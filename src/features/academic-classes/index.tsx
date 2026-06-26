import { useMemo, useState } from 'react'
import { FiX } from 'react-icons/fi'

import AcademicClassDeleteDialog from './components/academic-class-delete-dialog'
import AcademicClassFilter from './components/academic-class-filter'
import AcademicClassForm from './components/academic-class-form'
import AcademicClassHeader from './components/academic-class-header'
import AcademicClassSummary from './components/academic-class-summary'
import AcademicClassTable from './components/academic-class-table'

import { useAcademicClasses } from './hooks/use-academic-classes'

import type { AcademicClass, AcademicClassFormData } from './types'

export default function AcademicClassComponent() {
  const {
    academicClasses,
    academicSessions,
    academicStandards,
    loading,
    saving,
    create,
    update,
    remove,
  } = useAcademicClasses()

  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<AcademicClass | null>(null)

  const [deleteOpen, setDeleteOpen] = useState(false)

  const [selectedDelete, setSelectedDelete] = useState<AcademicClass | null>(
    null,
  )

  const filteredAcademicClasses = useMemo(() => {
    return academicClasses.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.academicSession.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.academicStandard.name.toLowerCase().includes(search.toLowerCase())
      )
    })
  }, [academicClasses, search])

  const totalClasses = academicClasses.length

  const activeClasses = academicClasses.filter((item) => item.status).length

  const totalCapacity = academicClasses.reduce(
    (total, item) => total + item.capacity,
    0,
  )

  const handleCreate = async (values: AcademicClassFormData) => {
    await create(values)

    setOpen(false)
  }

  const handleUpdate = async (values: AcademicClassFormData) => {
    if (!editing) return

    await update(editing.id, values)

    setEditing(null)
    setOpen(false)
  }

  const handleDelete = async () => {
    if (!selectedDelete) return

    await remove(selectedDelete.id)

    setDeleteOpen(false)
    setSelectedDelete(null)
  }

  return (
    <div className="space-y-6">
      <AcademicClassHeader
        onCreate={() => {
          setEditing(null)
          setOpen(true)
        }}
      />

      <AcademicClassSummary
        totalClasses={totalClasses}
        activeClasses={activeClasses}
        totalCapacity={totalCapacity}
      />

      <AcademicClassFilter
        search={search}
        onSearchChange={setSearch}
        total={filteredAcademicClasses.length}
      />

      <AcademicClassTable
        data={filteredAcademicClasses}
        loading={loading}
        onEdit={(item) => {
          setEditing(item)
          setOpen(true)
        }}
        onDelete={(id) => {
          const academicClass =
            academicClasses.find((item) => item.id === id) ?? null

          setSelectedDelete(academicClass)
          setDeleteOpen(true)
        }}
      />

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {editing ? 'Edit Academic Class' : 'Create Academic Class'}
              </h2>

              <button
                onClick={() => {
                  setOpen(false)
                  setEditing(null)
                }}
              >
                <FiX size={24} />
              </button>
            </div>

            <AcademicClassForm
              initialValues={editing}
              sessions={academicSessions}
              standards={academicStandards}
              loading={saving}
              onCancel={() => {
                setOpen(false)
                setEditing(null)
              }}
              onSubmit={editing ? handleUpdate : handleCreate}
            />
          </div>
        </div>
      )}

      <AcademicClassDeleteDialog
        open={deleteOpen}
        loading={saving}
        title="Delete Academic Class"
        description={`Are you sure you want to delete "${
          selectedDelete?.name ?? ''
        }"? This action cannot be undone.`}
        onCancel={() => {
          setDeleteOpen(false)
          setSelectedDelete(null)
        }}
        onConfirm={handleDelete}
      />
    </div>
  )
}
