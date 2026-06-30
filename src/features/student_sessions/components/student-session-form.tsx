import { FiX } from 'react-icons/fi'
import { useForm, useStore } from '@tanstack/react-form'
import { useEffect, useMemo, useState } from 'react'

import type { StudentSession } from '../types'
import {
  studentSessionSchema,
  type StudentSessionSchema,
} from '../schemas/student-session.schema'

type StudentOption = { id: number; name: string }
type SessionOption = { id: number; name: string }

type StandardOption = {
  id: number
  name: string
  academicSessionId?: number
  academic_session_id?: number
}

type ClassOption = {
  id: number
  name: string
  academicSessionId?: number
  academic_session_id?: number
  academicStandardId?: number
  academic_standard_id?: number
}

type Props = {
  session?: StudentSession
  students: StudentOption[]
  academicSessions: SessionOption[]
  academicStandards: StandardOption[]
  academicClasses: ClassOption[]
  onClose: () => void
  onSubmit: (data: StudentSessionSchema) => void | Promise<void>
  loading?: boolean
}

export default function StudentSessionForm({
  session,
  students,
  academicSessions,
  academicStandards = [],
  academicClasses,
  onClose,
  onSubmit,
  loading = false,
}: Props) {
  const form = useForm({
    defaultValues: {
      studentId: session?.studentId ?? 0,
      academicSessionId: session?.academicSessionId ?? 0,
      academicClassId: session?.academicClassId ?? 0,
      rollNo: session?.rollNo ?? 0,
      status: session?.status ?? true,
    } satisfies StudentSessionSchema,

    onSubmit: async ({ value }) => {
      const parsed = studentSessionSchema.safeParse(value)
      if (!parsed.success) {
        console.error(parsed.error.flatten())
        return
      }
      await onSubmit(parsed.data)
    },
  })

  // 🔥 form state watcher
  const academicSessionId = useStore(
    form.store,
    (s) => s.values.academicSessionId,
  )

  // 🔥 local filter state
  const [selectedStandardId, setSelectedStandardId] = useState<number>(0)

  // ✅ FIX: reset standard when editing different session
  useEffect(() => {
    if (!session) {
      setSelectedStandardId(0)
      return
    }

    const matchedClass = academicClasses.find(
      (c) => c.id === session.academicClassId,
    )

    setSelectedStandardId(
      matchedClass?.academicStandardId ??
        matchedClass?.academic_standard_id ??
        0,
    )
  }, [session, academicClasses])

  // 🔥 standards filter
  const filteredStandards = useMemo(() => {
    if (!academicSessionId) return []

    return academicStandards.filter((s) => {
      const ref = s.academicSessionId ?? s.academic_session_id
      return Number(ref) === Number(academicSessionId)
    })
  }, [academicStandards, academicSessionId])

  // 🔥 classes filter
  const filteredClasses = useMemo(() => {
    if (!academicSessionId) return []

    return academicClasses.filter((c) => {
      const sessionRef = c.academicSessionId ?? c.academic_session_id
      const standardRef = c.academicStandardId ?? c.academic_standard_id

      return (
        Number(sessionRef) === Number(academicSessionId) &&
        (selectedStandardId === 0 ||
          Number(standardRef) === Number(selectedStandardId))
      )
    })
  }, [academicClasses, academicSessionId, selectedStandardId])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {session ? 'Edit Student Session' : 'Assign Student Session'}
            </h2>
            <p className="text-xs text-slate-500">
              Manage academic assignments
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <FiX />
          </button>
        </div>

        {/* FORM */}
        <form
          className="p-5 space-y-5"
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Student */}
            <form.Field name="studentId">
              {(field) => (
                <div>
                  <label className="text-xs font-semibold text-slate-600">
                    Student
                  </label>
                  <select
                    value={field.state.value}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    className="w-full mt-1 rounded-xl border px-3 py-2"
                  >
                    <option value={0}>Select Student</option>
                    {students.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </form.Field>

            {/* Session */}
            <form.Field name="academicSessionId">
              {(field) => (
                <div>
                  <label className="text-xs font-semibold text-slate-600">
                    Academic Session
                  </label>
                  <select
                    value={field.state.value}
                    onChange={(e) => {
                      field.handleChange(Number(e.target.value))
                      setSelectedStandardId(0)
                      form.setFieldValue('academicClassId', 0)
                    }}
                    className="w-full mt-1 rounded-xl border px-3 py-2"
                  >
                    <option value={0}>Select Session</option>
                    {academicSessions.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </form.Field>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Standard */}
            <div>
              <label className="text-xs font-semibold text-slate-600">
                Academic Standard
              </label>
              <select
                value={selectedStandardId}
                onChange={(e) => {
                  setSelectedStandardId(Number(e.target.value))
                  form.setFieldValue('academicClassId', 0)
                }}
                className="w-full mt-1 rounded-xl border px-3 py-2"
              >
                <option value={0}>All Standards</option>
                {filteredStandards.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Class */}
            <form.Field name="academicClassId">
              {(field) => (
                <div>
                  <label className="text-xs font-semibold text-slate-600">
                    Academic Class
                  </label>
                  <select
                    value={field.state.value}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    className="w-full mt-1 rounded-xl border px-3 py-2"
                  >
                    <option value={0}>Select Class</option>
                    {filteredClasses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </form.Field>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Roll No */}
            <form.Field name="rollNo">
              {(field) => (
                <div>
                  <label className="text-xs font-semibold text-slate-600">
                    Roll Number
                  </label>
                  <input
                    type="number"
                    value={field.state.value || ''}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    className="w-full mt-1 rounded-xl border px-3 py-2"
                  />
                </div>
              )}
            </form.Field>

            {/* Status */}
            <form.Field name="status">
              {(field) => (
                <div>
                  <label className="text-xs font-semibold text-slate-600">
                    Status
                  </label>
                  <select
                    value={field.state.value ? '1' : '0'}
                    onChange={(e) => field.handleChange(e.target.value === '1')}
                    className="w-full mt-1 rounded-xl border px-3 py-2"
                  >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>
              )}
            </form.Field>
          </div>

          {/* FOOTER */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-xl bg-cyan-600 text-white"
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
