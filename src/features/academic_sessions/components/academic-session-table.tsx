import { useMemo } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  FiCheckCircle,
  FiChevronRight,
  FiEdit,
  FiLayers,
  FiTrash,
} from 'react-icons/fi'

import type { AcademicSession } from '../types'

type Props = {
  sessions: AcademicSession[]
  onEdit: (session: AcademicSession) => void
  onDelete: (id: number) => void
  onActivate: (id: number) => void
}

const columnHelper = createColumnHelper<AcademicSession>()

function formatDate(date?: string) {
  if (!date) return '—'

  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date

  return parsed.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function StatusBadge({ active }: { active: boolean }) {
  return active ? (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      Active
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      Inactive
    </span>
  )
}

function CurrentBadge({ active }: { active: boolean }) {
  return active ? (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
      <FiCheckCircle className="h-3.5 w-3.5" />
      Current Session
    </span>
  ) : (
    <span className="text-sm text-slate-400">—</span>
  )
}

function ActionButton({
  onClick,
  title,
  children,
  tone = 'default',
}: {
  onClick: () => void
  title: string
  children: React.ReactNode
  tone?: 'default' | 'success' | 'danger'
}) {
  const toneClasses = {
    default:
      'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900',
    success:
      'border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-100',
    danger:
      'border-rose-200 bg-rose-50 text-rose-600 hover:border-rose-300 hover:bg-rose-100',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-label={title}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-100 ${toneClasses[tone]}`}
    >
      {children}
    </button>
  )
}

export default function AcademicSessionTable({
  sessions,
  onEdit,
  onDelete,
  onActivate,
}: Props) {
  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Session',
        cell: ({ row, getValue }) => {
          const session = row.original

          return (
            <div className="min-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-100 text-cyan-700 ring-1 ring-cyan-100">
                  <FiLayers className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold tracking-tight text-slate-900">
                    {getValue()}
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Academic timeline session
                  </p>
                </div>
              </div>

              <div className="mt-3 md:hidden">
                <StatusBadge active={session.isActive} />
              </div>
            </div>
          )
        },
      }),

      columnHelper.accessor('startDate', {
        header: 'Start Date',
        cell: (info) => (
          <div className="text-sm font-medium text-slate-700">
            {formatDate(info.getValue())}
          </div>
        ),
      }),

      columnHelper.accessor('endDate', {
        header: 'End Date',
        cell: (info) => (
          <div className="text-sm font-medium text-slate-700">
            {formatDate(info.getValue())}
          </div>
        ),
      }),

      columnHelper.accessor('isActive', {
        header: 'Status',
        cell: (info) => <StatusBadge active={info.getValue()} />,
      }),

      columnHelper.display({
        id: 'current',
        header: 'Current',
        cell: ({ row }) => <CurrentBadge active={row.original.isActive} />,
      }),

      columnHelper.display({
        id: 'actions',
        header: () => <div className="text-right">Actions</div>,
        cell: ({ row }) => {
          const session = row.original

          return (
            <div className="flex items-center justify-end gap-2">
              {!session.isActive && (
                <ActionButton
                  onClick={() => onActivate(session.id)}
                  title="Activate Session"
                  tone="success"
                >
                  <FiCheckCircle className="h-4 w-4" />
                </ActionButton>
              )}

              <ActionButton
                onClick={() => onEdit(session)}
                title="Edit Session"
              >
                <FiEdit className="h-4 w-4" />
              </ActionButton>

              <ActionButton
                onClick={() => onDelete(session.id)}
                title="Delete Session"
                tone="danger"
              >
                <FiTrash className="h-4 w-4" />
              </ActionButton>
            </div>
          )
        },
      }),
    ],
    [onActivate, onDelete, onEdit],
  )

  const table = useReactTable({
    data: sessions,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            Academic Sessions
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Review, activate, edit, and manage academic session records.
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 sm:flex">
          <span className="h-2 w-2 rounded-full bg-cyan-500" />
          {sessions.length} records
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50/80">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-slate-200">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="whitespace-nowrap px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500"
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
                  className="group border-b border-slate-100 transition-colors duration-200 hover:bg-slate-50/80"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-4 align-middle">
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
                <td colSpan={columns.length} className="px-6 py-16">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-400">
                      <FiLayers className="h-7 w-7" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-800">
                      No academic sessions found
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                      There are no matching academic sessions right now. Create
                      a new session to start managing timelines and activation
                      states.
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-700">
                      Add your first session
                      <FiChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
