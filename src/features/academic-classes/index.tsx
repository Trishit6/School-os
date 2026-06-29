import { useMemo, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import AcademicClassHeader from './components/academic-class-header'
import AcademicClassSummary from './components/academic-class-summary'
import AcademicClassFilter from './components/academic-class-filter'
import AcademicClassTable from './components/academic-class-table'
import AcademicClassForm from './components/academic-class-form'
import AcademicClassDeleteDialog from './components/academic-class-delete-dialog'

import { useAcademicClasses } from './hooks/use-academic-classes'

import type { AcademicClass, AcademicClassFormData } from './types'

export default function AcademicClassComponent() {
  const {
    academicClasses,
    academicStandards,
    loading,
    saving,
    create,
    update,
    remove,
  } = useAcademicClasses()

  const [search, setSearch] = useState('')

  const [openForm, setOpenForm] = useState(false)

  const [deleteId, setDeleteId] = useState<number | null>(null)

  const [editing, setEditing] = useState<AcademicClass | null>(null)

  const filteredClasses = useMemo(() => {
    return academicClasses.filter((item) => {
      const keyword = search.toLowerCase()

      return (
        item.name.toLowerCase().includes(keyword) ||
        item.code.toLowerCase().includes(keyword) ||
        item.academicStandard.name.toLowerCase().includes(keyword)
      )
    })
  }, [academicClasses, search])

  const handleCreate = async (values: AcademicClassFormData) => {
    await create(values)

    setOpenForm(false)
  }

  const handleUpdate = async (values: AcademicClassFormData) => {
    if (!editing) return

    await update(editing.id, values)

    setEditing(null)

    setOpenForm(false)
  }

  const handleDelete = async () => {
    if (deleteId === null) return

    await remove(deleteId)

    setDeleteId(null)
  }

  return (
    <div className="space-y-6">
      <AcademicClassHeader
        title="Academic Classes"
        description="Manage academic classes in your school."
      >
        <button
          onClick={() => {
            setEditing(null)
            setOpenForm(true)
          }}
          className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-white hover:bg-cyan-700"
        >
          <FiPlus />
          Add Academic Class
        </button>
      </AcademicClassHeader>

      <AcademicClassSummary
        total={academicClasses.length}
        active={academicClasses.filter((x) => x.status).length}
        capacity={academicClasses.reduce((sum, x) => sum + x.capacity, 0)}
      />

      <AcademicClassFilter value={search} onChange={setSearch} />

      <AcademicClassTable
        data={filteredClasses}
        loading={loading}
        onEdit={(item) => {
          setEditing(item)
          setOpenForm(true)
        }}
        onDelete={(id) => setDeleteId(id)}
      />

      {openForm && (
        <AcademicClassForm
          initialValues={editing}
          standards={academicStandards}
          loading={saving}
          onCancel={() => {
            setEditing(null)
            setOpenForm(false)
          }}
          onSubmit={editing ? handleUpdate : handleCreate}
        />
      )}

      <AcademicClassDeleteDialog
        open={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
      />
    </div>
  )
}
