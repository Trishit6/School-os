import { useMemo, useState } from 'react'

import AcademicStandardHeader from './components/academic-standard-header'
import AcademicStandardFilter from './components/academic-standard-filter'
import AcademicStandardForm from './components/academic-standard-form'
import AcademicStandardTable from './components/academic-standard-table'

import { useAcademicStandards } from './hooks/use-academic-standards'

import type { AcademicStandard, AcademicStandardFormData } from './types'

import { FiX } from 'react-icons/fi'

export default function AcademicStandardComponent() {
  const { academicStandards, loading, saving, create, update, remove } =
    useAcademicStandards()

  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')

  const [open, setOpen] = useState(false)

  const [editing, setEditing] = useState<AcademicStandard | null>(null)

  const filteredAcademicStandards = useMemo(() => {
    return academicStandards.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.code.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        status === '' ? true : status === 'active' ? item.status : !item.status

      return matchesSearch && matchesStatus
    })
  }, [academicStandards, search, status])

  const handleCreate = async (values: AcademicStandardFormData) => {
    await create(values)
    setOpen(false)
  }

  const handleUpdate = async (values: AcademicStandardFormData) => {
    if (!editing) return

    await update(editing.id, values)

    setEditing(null)
    setOpen(false)
  }

  return (
    <div className="space-y-6">
      <AcademicStandardHeader
        onCreate={() => {
          setEditing(null)
          setOpen(true)
        }}
      />

      <AcademicStandardFilter
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        onReset={() => {
          setSearch('')
          setStatus('')
        }}
      />

      <AcademicStandardTable
        data={filteredAcademicStandards}
        loading={loading}
        onEdit={(item) => {
          setEditing(item)
          setOpen(true)
        }}
        onDelete={remove}
      />

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
          <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {editing
                  ? 'Edit Academic Standard'
                  : 'Create Academic Standard'}
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

            <AcademicStandardForm
              initialValues={editing}
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
    </div>
  )
}
