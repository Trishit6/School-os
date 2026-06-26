import { useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import api from '@/lib/api'

import AcademicSessionHeader from './components/academic-session-header'
import AcademicSessionFilters from './components/academic-session-filters'
import AcademicSessionTable from './components/academic-session-table'
import AcademicSessionForm from './components/academic-session-form'

import type { AcademicSession } from './types'

export default function AcademicSessionComponent() {
  const queryClient = useQueryClient()

  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)

  const [editingSession, setEditingSession] = useState<AcademicSession | null>(
    null,
  )

  const [formData, setFormData] = useState({
    name: '',
    start_date: '',
    end_date: '',
    is_active: false,
  })

  const { data = [], isLoading } = useQuery({
    queryKey: ['academic-sessions'],

    queryFn: async () => {
      const response = await api.get('/academic_sessions')

      return response.data.data as AcademicSession[]
    },
  })

  const createMutation = useMutation({
    mutationFn: async () => {
      const response = await api.post('/academic_sessions', formData)

      return response.data
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['academic-sessions'],
      })

      closeModal()
    },

    onError: (error) => {
      console.error(error)
    },
  })

  const updateMutation = useMutation({
    mutationFn: async () => {
      const response = await api.put(
        `/academic_sessions/${editingSession?.id}`,
        formData,
      )

      return response.data
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['academic-sessions'],
      })

      closeModal()
    },

    onError: (error) => {
      console.error(error)
    },
  })
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/academic_sessions/${id}`)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['academic-sessions'],
      })
    },
  })

  const activateMutation = useMutation({
    mutationFn: async (id: number) => {
      await api.patch(`/academic_sessions/${id}/activate`)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['academic-sessions'],
      })
    },
  })

  const filteredSessions = useMemo(() => {
    return data.filter((session) =>
      session.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [data, search])

  const openCreateModal = () => {
    setEditingSession(null)

    setFormData({
      name: '',
      start_date: '',
      end_date: '',
      is_active: false,
    })

    setShowForm(true)
  }

  const openEditModal = (session: AcademicSession) => {
    setEditingSession(session)

    setFormData({
      name: session.name,
      start_date: session.start_date,
      end_date: session.end_date,
      is_active: session.is_active,
    })

    setShowForm(true)
  }
  const closeModal = () => {
    setShowForm(false)

    setEditingSession(null)

    setFormData({
      name: '',
      start_date: '',
      end_date: '',
      is_active: false,
    })
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
      updateMutation.mutate()
      return
    }

    createMutation.mutate()
  }

  return (
    <div className="min-h-screen space-y-6 bg-[#f6f8fb] p-6">
      <AcademicSessionHeader onAddSession={openCreateModal} />

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h4 className="text-sm text-slate-500">Total Sessions</h4>

          <h2 className="mt-2 text-3xl font-bold">{data.length}</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h4 className="text-sm text-slate-500">Active Sessions</h4>

          <h2 className="mt-2 text-3xl font-bold">
            {data.filter((s) => s.is_active).length}
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h4 className="text-sm text-slate-500">Inactive Sessions</h4>

          <h2 className="mt-2 text-3xl font-bold">
            {data.filter((s) => !s.is_active).length}
          </h2>
        </div>
      </div>

      <AcademicSessionFilters search={search} setSearch={setSearch} />

      {isLoading ? (
        <div className="rounded-3xl bg-white p-10 text-center">
          Loading Sessions...
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
