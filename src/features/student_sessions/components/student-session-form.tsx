import {
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiHash,
  FiLoader,
  FiSearch,
  FiUser,
  FiUsers,
  FiX,
} from 'react-icons/fi'
import { useForm } from '@tanstack/react-form'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useQueries } from '@tanstack/react-query'

import type { StudentSession } from '../types'
import {
  studentSessionSchema,
  type StudentSessionSchema,
} from '../schemas/student-session.schema'

import { getStudents } from '#/features/students/services/student-service.ts'
import { getAcademicStandards } from '#/features/academic_standards/services/academic-standard-service.ts'
import { getAcademicClasses } from '#/features/academic-classes/data.ts'
import { academicSessionService } from '#/features/academic_sessions/data/services.ts'

type Props = {
  session?: StudentSession
  onClose: () => void
  onSubmit: (data: StudentSessionSchema) => void | Promise<void>
  loading?: boolean
}

export async function getAcademicClassesByStandardId(
  academicStandardId: number | null,
) {
  if (!academicStandardId) return []

  const classes = await getAcademicClasses()
  return classes.filter((c) => c.academicStandardId === academicStandardId)
}

type FieldShellProps = {
  label: string
  icon?: React.ReactNode
  children: React.ReactNode
  hint?: string
  error?: string
}

function FieldShell({ label, icon, children, hint, error }: FieldShellProps) {
  return (
    <div className="space-y-2.5">
      <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
        {icon ? <span className="text-slate-400">{icon}</span> : null}
        <span>{label}</span>
      </label>

      {children}

      {error ? (
        <p className="text-xs font-medium text-rose-600">{error}</p>
      ) : hint ? (
        <p className="text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  )
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  isBusy?: boolean
}

function SelectInput({
  className = '',
  isBusy = false,
  children,
  ...props
}: SelectProps) {
  return (
    <div className="relative">
      <select
        {...props}
        className={`h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 pr-11 text-sm text-slate-800 shadow-sm outline-none transition-all duration-200 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 ${className}`}
      >
        {children}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        {isBusy ? (
          <FiLoader className="h-4 w-4 animate-spin text-cyan-600" />
        ) : (
          <FiChevronDown className="h-4 w-4 text-slate-400" />
        )}
      </div>
    </div>
  )
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
    />
  )
}

type StudentOption = {
  id: number
  name: string
}

type StudentSearchSelectProps = {
  value: number
  onChange: (value: number) => void
  options: StudentOption[]
  loading?: boolean
  disabled?: boolean
  error?: boolean
}

function StudentSearchSelect({
  value,
  onChange,
  options,
  loading = false,
  disabled = false,
  error = false,
}: StudentSearchSelectProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const selectedStudent = useMemo(
    () => options.find((student) => student.id === value),
    [options, value],
  )

  const filteredStudents = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return options

    return options.filter((student) => student.name.toLowerCase().includes(q))
  }, [options, query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className={[
          'flex h-12 w-full items-center justify-between rounded-2xl border bg-white px-4 text-sm shadow-sm outline-none transition-all duration-200',
          error ? 'border-rose-300 focus:ring-rose-100' : 'border-slate-200',
          'hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100',
          'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400',
        ].join(' ')}
      >
        <span
          className={
            selectedStudent
              ? 'truncate text-slate-800'
              : 'truncate text-slate-400'
          }
        >
          {selectedStudent ? selectedStudent.name : 'Search student'}
        </span>

        {loading ? (
          <FiLoader className="h-4 w-4 animate-spin text-cyan-600" />
        ) : (
          <FiChevronDown
            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          />
        )}
      </button>

      {open && !disabled && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="border-b border-slate-100 p-3">
            <div className="relative">
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search student..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              />
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto p-2">
            {loading ? (
              <div className="flex items-center justify-center gap-2 px-3 py-8 text-sm text-slate-500">
                <FiLoader className="h-4 w-4 animate-spin" />
                Loading students...
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="px-3 py-8 text-center text-sm text-slate-500">
                No student found.
              </div>
            ) : (
              filteredStudents.map((student) => {
                const isSelected = student.id === value

                return (
                  <button
                    key={student.id}
                    type="button"
                    onClick={() => {
                      onChange(student.id)
                      setOpen(false)
                      setQuery('')
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                      isSelected
                        ? 'bg-cyan-50 text-cyan-700'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          isSelected
                            ? 'bg-cyan-100 text-cyan-700'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <FiUser className="h-4 w-4" />
                      </div>

                      <span className="truncate font-medium">
                        {student.name}
                      </span>
                    </div>

                    {isSelected ? (
                      <FiCheckCircle className="h-4 w-4 shrink-0 text-cyan-600" />
                    ) : null}
                  </button>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function FormSkeletonRow() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
        <div className="h-12 animate-pulse rounded-2xl bg-slate-100" />
      </div>

      <div className="space-y-2">
        <div className="h-4 w-36 animate-pulse rounded bg-slate-200" />
        <div className="h-12 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    </div>
  )
}

export default function StudentSessionForm({
  session,
  onClose,
  onSubmit,
  loading = false,
}: Props) {
  const [academicStandardId, setAcademicStandardId] = useState<number | null>(
    null,
  )
  const [selectedStandardId, setSelectedStandardId] = useState<number>(0)

  const [students, academicStandards, academicSessions, academicClasses] =
    useQueries({
      queries: [
        {
          queryKey: ['students'],
          queryFn: getStudents,
        },
        {
          queryKey: ['academic-standards'],
          queryFn: getAcademicStandards,
        },
        {
          queryKey: ['academic-sessions'],
          queryFn: academicSessionService.getAll,
        },
        {
          queryKey: ['academic-classes', academicStandardId],
          queryFn: () => getAcademicClassesByStandardId(academicStandardId),
          enabled: !!academicStandardId,
        },
      ],
    })

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

  useEffect(() => {
    if (!session) return

    form.setFieldValue('studentId', session.studentId ?? 0)
    form.setFieldValue('academicSessionId', session.academicSessionId ?? 0)
    form.setFieldValue('academicClassId', session.academicClassId ?? 0)
    form.setFieldValue('rollNo', session.rollNo ?? 0)
    form.setFieldValue('status', session.status ?? true)
  }, [session, form])

  const isInitialLoading =
    students.isLoading ||
    academicStandards.isLoading ||
    academicSessions.isLoading

  const hasInitialError =
    students.isError || academicStandards.isError || academicSessions.isError

  const studentOptions = useMemo(
    () =>
      students.data?.map((student) => ({
        id: student.id,
        name: student.name,
      })) ?? [],
    [students.data],
  )

  const classOptions = useMemo(
    () => academicClasses.data ?? [],
    [academicClasses.data],
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-md">
      <div className="w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/30 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.22)]">
        <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-cyan-50 via-sky-50 to-white px-6 py-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500" />
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-100/60 blur-2xl" />
          <div className="absolute -bottom-10 right-14 h-24 w-24 rounded-full bg-sky-100/60 blur-2xl" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-3 py-1 text-xs font-semibold text-cyan-700 backdrop-blur">
                <FiCheckCircle className="h-3.5 w-3.5" />
                Student Session Form
              </div>

              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  {session ? 'Edit student session' : 'Assign student session'}
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-slate-600">
                  Search and assign a student to an academic session, standard,
                  class, and roll number with a cleaner workflow.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-cyan-100"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form
          className="space-y-6 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] p-6"
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          {hasInitialError ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              Failed to load form data. Please refresh and try again.
            </div>
          ) : isInitialLoading ? (
            <>
              <FormSkeletonRow />
              <FormSkeletonRow />
              <FormSkeletonRow />
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <form.Field
                  name="studentId"
                  validators={{
                    onChange: ({ value }) =>
                      !value || value === 0
                        ? 'Please search and select a student'
                        : undefined,
                  }}
                >
                  {(field) => (
                    <FieldShell
                      label="Search Student"
                      icon={<FiUsers className="h-4 w-4" />}
                      hint="Search by student name and pick the correct student."
                      error={field.state.meta.errors?.[0]}
                    >
                      <StudentSearchSelect
                        value={field.state.value}
                        onChange={(value) => field.handleChange(value)}
                        options={studentOptions}
                        loading={students.isLoading}
                        disabled={loading}
                        error={!!field.state.meta.errors?.[0]}
                      />
                    </FieldShell>
                  )}
                </form.Field>

                <form.Field
                  name="academicSessionId"
                  validators={{
                    onChange: ({ value }) =>
                      !value || value === 0
                        ? 'Please select an academic session'
                        : undefined,
                  }}
                >
                  {(field) => (
                    <FieldShell
                      label="Academic Session"
                      icon={<FiBookOpen className="h-4 w-4" />}
                      error={field.state.meta.errors?.[0]}
                    >
                      <SelectInput
                        value={field.state.value}
                        disabled={loading}
                        onChange={(e) => {
                          field.handleChange(Number(e.target.value))
                          setSelectedStandardId(0)
                          setAcademicStandardId(null)
                          form.setFieldValue('academicClassId', 0)
                        }}
                      >
                        <option value={0}>Select session</option>
                        {academicSessions.data?.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                      </SelectInput>
                    </FieldShell>
                  )}
                </form.Field>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FieldShell
                  label="Academic Standard"
                  icon={<FiBookOpen className="h-4 w-4" />}
                  hint="Choose a standard first to load matching classes."
                >
                  <SelectInput
                    value={selectedStandardId}
                    disabled={loading}
                    onChange={(e) => {
                      const value = Number(e.target.value)
                      setSelectedStandardId(value)
                      setAcademicStandardId(value || null)
                      form.setFieldValue('academicClassId', 0)
                    }}
                  >
                    <option value={0}>Select standard</option>
                    {academicStandards.data?.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </SelectInput>
                </FieldShell>

                <form.Field
                  name="academicClassId"
                  validators={{
                    onChange: ({ value }) =>
                      !value || value === 0
                        ? 'Please select an academic class'
                        : undefined,
                  }}
                >
                  {(field) => (
                    <FieldShell
                      label="Academic Class"
                      icon={<FiBookOpen className="h-4 w-4" />}
                      error={field.state.meta.errors?.[0]}
                    >
                      <SelectInput
                        value={field.state.value}
                        disabled={
                          loading ||
                          !selectedStandardId ||
                          academicClasses.isLoading
                        }
                        isBusy={academicClasses.isLoading}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                      >
                        <option value={0}>
                          {!selectedStandardId
                            ? 'Select standard first'
                            : academicClasses.isLoading
                              ? 'Loading classes...'
                              : 'Select class'}
                        </option>
                        {classOptions.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.code}
                          </option>
                        ))}
                      </SelectInput>
                    </FieldShell>
                  )}
                </form.Field>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <form.Field
                  name="rollNo"
                  validators={{
                    onChange: ({ value }) =>
                      !value || value <= 0
                        ? 'Roll number must be greater than 0'
                        : undefined,
                  }}
                >
                  {(field) => (
                    <FieldShell
                      label="Roll Number"
                      icon={<FiHash className="h-4 w-4" />}
                      error={field.state.meta.errors?.[0]}
                    >
                      <TextInput
                        type="number"
                        min={1}
                        placeholder="Enter roll number"
                        disabled={loading}
                        value={field.state.value || ''}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                      />
                    </FieldShell>
                  )}
                </form.Field>

                <form.Field name="status">
                  {(field) => (
                    <FieldShell
                      label="Status"
                      icon={<FiCheckCircle className="h-4 w-4" />}
                    >
                      <SelectInput
                        value={field.state.value ? '1' : '0'}
                        disabled={loading}
                        onChange={(e) =>
                          field.handleChange(e.target.value === '1')
                        }
                      >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </SelectInput>
                    </FieldShell>
                  )}
                </form.Field>
              </div>
            </>
          )}

          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading || isInitialLoading}
              className="inline-flex h-12 min-w-40 items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-cyan-400"
            >
              {loading ? (
                <>
                  <FiLoader className="h-4 w-4 animate-spin" />
                  Saving session...
                </>
              ) : (
                'Save session'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
