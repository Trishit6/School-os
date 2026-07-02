import { useMemo, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { FiEdit2, FiSearch, FiSliders, FiTrash2, FiUsers } from 'react-icons/fi'

import type { StudentSession } from '../types'

type AcademicSessionOption = {
  id: number
  name: string
}

type Props = {
  sessions?: StudentSession[]
  academicSessions?: AcademicSessionOption[]
  search: string
  onSearchChange: (value: string) => void
  onEdit: (session: StudentSession) => void
  onDelete: (session: StudentSession) => void
}

const columnHelper = createColumnHelper<StudentSession>()

function ActionButton({
  onClick,
  children,
  tone = 'default',
}: {
  onClick: () => void
  children: React.ReactNode
  tone?: 'default' | 'danger'
}) {
  const toneClasses = {
    default:
      'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300',
    danger:
      'border-rose-200 bg-white text-rose-600 hover:bg-rose-50 hover:border-rose-300',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition ${toneClasses[tone]}`}
    >
      {children}
    </button>
  )
}

export default function StudentSessionTable({
  sessions = [],
  academicSessions = [],
  search,
  onSearchChange,
  onEdit,
  onDelete,
}: Props) {
  const [selectedAcademicSessionId, setSelectedAcademicSessionId] = useState('')

  const filteredData = useMemo(() => {
    const q = search.trim().toLowerCase()

    return sessions.filter((session) => {
      const matchesAcademicSession = selectedAcademicSessionId
        ? String(session.academicSessionId) === selectedAcademicSessionId
        : true

      const matchesSearch = q
        ? [
            session.student?.name,
            session.student?.email,
            session.student?.phone,
            session.academicSession?.name,
            session.academicClass?.name,
            session.academicClass?.code,
            String(session.rollNo ?? ''),
            String(session.id ?? ''),
          ]
            .filter(Boolean)
            .some((value) => String(value).toLowerCase().includes(q))
        : true

      return matchesAcademicSession && matchesSearch
    })
  }, [sessions, search, selectedAcademicSessionId])

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'ID',
        cell: (info) => (
          <span className="font-medium text-slate-700">#{info.getValue()}</span>
        ),
      }),

      columnHelper.display({
        id: 'student',
        header: 'Student',
        cell: ({ row }) => {
          const student = row.original.student
          return (
            <div className="space-y-0.5">
              <p className="font-medium text-slate-800">
                {student?.name ?? '—'}
              </p>
              <p className="text-xs text-slate-500">{student?.email ?? '—'}</p>
            </div>
          )
        },
      }),

      columnHelper.display({
        id: 'academicSession',
        header: 'Academic Session',
        cell: ({ row }) => (
          <span className="text-slate-700">
            {row.original.academicSession?.name ?? '—'}
          </span>
        ),
      }),

      columnHelper.display({
        id: 'academicClass',
        header: 'Class',
        cell: ({ row }) => (
          <span className="text-slate-700">
            {row.original.academicClass?.code ?? '—'}
          </span>
        ),
      }),

      columnHelper.accessor('rollNo', {
        header: 'Roll No',
        cell: (info) => (
          <span className="font-medium text-slate-700">
            {info.getValue() ?? '—'}
          </span>
        ),
      }),

      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) =>
          info.getValue() ? (
            <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              Active
            </span>
          ) : (
            <span className="inline-flex rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-200">
              Inactive
            </span>
          ),
      }),

      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <ActionButton onClick={() => onEdit(row.original)}>
              <FiEdit2 className="h-4 w-4" />
              Edit
            </ActionButton>

            <ActionButton onClick={() => onDelete(row.original)} tone="danger">
              <FiTrash2 className="h-4 w-4" />
              Delete
            </ActionButton>
          </div>
        ),
      }),
    ],
    [onEdit, onDelete],
  )

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/60">
      <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 py-4">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
              <FiUsers className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Student session records
              </h3>
              <p className="text-sm text-slate-500">
                {filteredData.length} result
                {filteredData.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 lg:flex-row xl:w-auto">
            <div className="relative min-w-0 flex-1 xl:w-[360px]">
              <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search student, email, session, class, roll..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div className="relative xl:w-[240px]">
              <FiSliders className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                value={selectedAcademicSessionId}
                onChange={(e) => setSelectedAcademicSessionId(e.target.value)}
                className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="">All sessions</option>
                {academicSessions.map((session) => (
                  <option key={session.id} value={session.id}>
                    {session.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-slate-200">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-slate-100 transition hover:bg-slate-50/70"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-5 py-4 align-middle text-sm"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-14 text-center text-sm text-slate-500"
                >
                  No student sessions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
