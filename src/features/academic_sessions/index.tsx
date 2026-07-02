import { useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FiBookOpen, FiSearch, FiUsers } from 'react-icons/fi'

import AcademicSessionHeader from './components/academic-session-header'
import AcademicSessionFilters from './components/academic-session-filters'
import AcademicSessionTable from './components/academic-session-table'
import AcademicSessionForm from './components/academic-session-form'

import type { AcademicSession, AcademicSessionPayload } from './types'
import { academicSessionService } from './data/services'

function StatCard({
  title,
  value,
  icon,
}: {
  title: string
  value: string | number
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {title}
          </p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
          {icon}
        </div>
      </div>
    </div>
  )
}

const initialFormData: AcademicSessionPayload = {
  name: '',
  startDate: '',
  endDate: '',
  isActive: false,
}

export default function AcademicSessionComponent() {
  const queryClient = useQueryClient()

  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingSession, setEditingSession] = useState<AcademicSession | null>(
    null,
  )
  const [formData, setFormData] =
    useState<AcademicSessionPayload>(initialFormData)

  const {
    data: sessions = [],
    isLoading,
    error: queryError,
  } = useQuery<AcademicSession[]>({
    queryKey: ['academic-sessions'],
    queryFn: academicSessionService.getAll,
  })

  const closeModal = () => {
    setShowForm(false)
    setEditingSession(null)
    setFormData(initialFormData)
  }

  const createMutation = useMutation({
    mutationFn: (payload: AcademicSessionPayload) =>
      academicSessionService.create(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['academic-sessions'],
      })
      closeModal()
    },
    onError: (mutationError) => {
      console.error('Create academic session failed:', mutationError)
    },
  })

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number
      payload: AcademicSessionPayload
    }) => academicSessionService.update(id, payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['academic-sessions'],
      })
      closeModal()
    },
    onError: (mutationError) => {
      console.error('Update academic session failed:', mutationError)
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => academicSessionService.delete(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['academic-sessions'],
      })
    },
    onError: (mutationError) => {
      console.error('Delete academic session failed:', mutationError)
    },
  })

  const activateMutation = useMutation({
    mutationFn: (id: number) => academicSessionService.activate(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['academic-sessions'],
      })
    },
    onError: (mutationError) => {
      console.error('Activate academic session failed:', mutationError)
    },
  })

  const filteredSessions = useMemo(() => {
    const q = search.toLowerCase().trim()

    if (!q) return sessions

    return sessions.filter((session) =>
      [
        session.name,
        session.startDate,
        session.endDate,
        session.isActive ? 'active' : 'inactive',
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(q)),
    )
  }, [sessions, search])

  const totalSessions = sessions.length
  const totalActiveSessions = sessions.filter((s) => s.isActive).length
  const totalInactiveSessions = sessions.filter((s) => !s.isActive).length

  const openCreateModal = () => {
    setEditingSession(null)
    setFormData(initialFormData)
    setShowForm(true)
  }

  const openEditModal = (session: AcademicSession) => {
    setEditingSession(session)
    setFormData({
      name: session.name ?? '',
      startDate: session.startDate ?? '',
      endDate: session.endDate ?? '',
      isActive: !!session.isActive,
    })
    setShowForm(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target

    setFormData((prev) => ({
      ...prev,
      [target.name]:
        target instanceof HTMLInputElement && target.type === 'checkbox'
          ? target.checked
          : target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingSession) {
      updateMutation.mutate({
        id: editingSession.id,
        payload: formData,
      })
      return
    }

    createMutation.mutate(formData)
  }

  return (
    <div className="min-h-screen space-y-6 bg-[#f6f8fb] p-6">
      <AcademicSessionHeader onAddSession={openCreateModal} />

      <div className="grid gap-5 md:grid-cols-3">
        <StatCard
          title="Total Sessions"
          value={totalSessions}
          icon={<FiUsers className="h-5 w-5" />}
        />
        <StatCard
          title="Active Sessions"
          value={totalActiveSessions}
          icon={<FiBookOpen className="h-5 w-5" />}
        />
        <StatCard
          title="Inactive Sessions"
          value={totalInactiveSessions}
          icon={<FiSearch className="h-5 w-5" />}
        />
      </div>

      <AcademicSessionFilters search={search} setSearch={setSearch} />

      {isLoading ? (
        <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow-sm">
          Loading sessions...
        </div>
      ) : queryError ? (
        <div className="rounded-3xl bg-white p-10 text-center text-rose-600 shadow-sm">
          Failed to load sessions.
        </div>
      ) : (
        <AcademicSessionTable
          sessions={filteredSessions}
          onEdit={openEditModal}
          onDelete={(id) => deleteMutation.mutate(id)}
          onActivate={(id) => activateMutation.mutate(id)}
        />
      )}

      {showForm && (
        <AcademicSessionForm
          formData={formData}
          editingSession={editingSession}
          loading={createMutation.isPending || updateMutation.isPending}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </div>
  )
}
