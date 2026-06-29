import { useEffect, useState } from 'react'
import type {
  AcademicClass,
  AcademicClassFormData,
  AcademicStandardOption,
} from '../types'
import { academicClassSchema } from '../schemas/academic-class.schema'

interface Props {
  initialValues: AcademicClass | null
  standards: AcademicStandardOption[]
  loading: boolean
  onCancel: () => void
  onSubmit: (values: AcademicClassFormData) => void
}

export default function AcademicClassForm({
  initialValues,
  standards,
  loading,
  onCancel,
  onSubmit,
}: Props) {
  const [formData, setFormData] = useState<AcademicClassFormData>({
    name: '',
    code: '',
    capacity: 30,
    status: true,
    academic_standard_id: 0,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (initialValues) {
      setFormData({
        name: initialValues.name,
        code: initialValues.code ?? '',
        capacity: initialValues.capacity,
        status: initialValues.status,
        academic_standard_id:
          initialValues.academicStandardId ||
          initialValues.academicStandard?.id ||
          standards[0]?.id ||
          0,
      })
    } else {
      setFormData((prev) => ({
        ...prev,
        academic_standard_id: standards[0]?.id || 0,
      }))
    }
  }, [initialValues, standards])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const result = academicClassSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      })
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-700">
          <div>
            <h2 className="text-2xl font-bold">
              {initialValues ? 'Edit Academic Class' : 'Create Academic Class'}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your academic class information.
            </p>
          </div>

          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6 max-h-[80vh] overflow-y-auto"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Class Name */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Class Name
              </label>

              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                placeholder="Class Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-cyan-600"
              />

              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Class Code */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Class Code
              </label>

              <input
                value={formData.code}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    code: e.target.value.toUpperCase(),
                  })
                }
                placeholder="XI-A"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm uppercase outline-none focus:border-cyan-600"
              />

              {errors.code && (
                <p className="mt-1 text-xs text-red-500">{errors.code}</p>
              )}
            </div>

            {/* Academic Standard */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Academic Standard
              </label>

              <select
                value={formData.academic_standard_id}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    academic_standard_id: Number(e.target.value),
                  })
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-cyan-600"
              >
                <option value={0}>Select Standard</option>

                {standards.map((standard) => (
                  <option key={standard.id} value={standard.id}>
                    {standard.name}
                  </option>
                ))}
              </select>

              {errors.academic_standard_id && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.academic_standard_id}
                </p>
              )}
            </div>

            {/* Capacity */}

            <div>
              <label className="mb-2 block text-sm font-medium">Capacity</label>

              <input
                type="number"
                min={1}
                value={formData.capacity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    capacity: Number(e.target.value),
                  })
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-cyan-600"
              />
            </div>
          </div>

          {/* Status */}

          <div className="rounded-xl border border-slate-200 p-3">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.checked,
                  })
                }
                className="h-4 w-4 accent-cyan-600"
              />

              <span className="text-sm font-medium">Active Class</span>
            </label>
          </div>

          {/* Footer */}

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-xl border border-slate-300 px-5 py-2 text-sm hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-cyan-600 px-6 py-2 text-sm font-medium text-white hover:bg-cyan-700 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Class'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
