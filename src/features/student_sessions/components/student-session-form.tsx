import { FiX } from 'react-icons/fi'

import {
  studentSessionSchema,
  type StudentSessionSchema,
} from '../schemas/student-session.schema'

import type { StudentSession } from '../types'
import { useForm } from '@tanstack/react-form'
import { zodResolver } from 'hookform/resolvers/zod'

type Option = {
  id: number
  name: string
}

type Props = {
  session?: StudentSession

  students: {
    id: number
    admissionNo: string
    name: string
  }[]

  academicSessions: Option[]

  academicClasses: Option[]

  onClose: () => void

  onSubmit: (data: StudentSessionSchema) => void

  loading?: boolean
}

export default function StudentSessionForm({
  session,
  students,
  academicSessions,
  academicClasses,
  onClose,
  onSubmit,
  loading = false,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentSessionSchema>({
    resolver: zodResolver(studentSessionSchema),

    defaultValues: {
      studentId: session?.studentId ?? undefined,

      academicSessionId: session?.academicSessionId ?? undefined,

      academicClassId: session?.academicClassId ?? undefined,

      rollNo: session?.rollNo ?? '',

      status: session?.status ?? 'ACTIVE',
    },
  })

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold">
              {session ? 'Edit Student Session' : 'Assign Student'}
            </h2>

            <p className="text-sm text-slate-500">
              Manage academic session assignment
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <FiX />
          </button>
        </div>

        {/* BODY */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6">
          {/* STUDENT */}
          <div>
            <label className="mb-2 block text-sm font-medium">Student</label>

            <select
              {...register('studentId')}
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="">Select Student</option>

              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} ({student.admissionNo})
                </option>
              ))}
            </select>

            <p className="mt-1 text-xs text-red-500">
              {errors.studentId?.message}
            </p>
          </div>

          {/* SESSION */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Academic Session
            </label>

            <select
              {...register('academicSessionId')}
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="">Select Session</option>

              {academicSessions.map((session) => (
                <option key={session.id} value={session.id}>
                  {session.name}
                </option>
              ))}
            </select>

            <p className="mt-1 text-xs text-red-500">
              {errors.academicSessionId?.message}
            </p>
          </div>

          {/* CLASS */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Academic Class
            </label>

            <select
              {...register('academicClassId')}
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="">Select Class</option>

              {academicClasses.map((academicClass) => (
                <option key={academicClass.id} value={academicClass.id}>
                  {academicClass.name}
                </option>
              ))}
            </select>

            <p className="mt-1 text-xs text-red-500">
              {errors.academicClassId?.message}
            </p>
          </div>

          {/* ROLL NO */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Roll Number
            </label>

            <input
              {...register('rollNo')}
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />

            <p className="mt-1 text-xs text-red-500">
              {errors.rollNo?.message}
            </p>
          </div>

          {/* STATUS */}
          <div>
            <label className="mb-2 block text-sm font-medium">Status</label>

            <select
              {...register('status')}
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="ACTIVE">ACTIVE</option>

              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>

          {/* FOOTER */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-5 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-cyan-600 px-5 py-3 text-white"
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
