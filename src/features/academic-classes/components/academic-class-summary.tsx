interface Props {
  total: number
  active: number
  capacity: number
}

export default function AcademicClassSummary({
  total,
  active,
  capacity,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="rounded-2xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500">Total Classes</p>

        <h2 className="mt-2 text-3xl font-bold">{total}</h2>
      </div>

      <div className="rounded-2xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500">Active Classes</p>

        <h2 className="mt-2 text-3xl font-bold text-green-600">{active}</h2>
      </div>

      <div className="rounded-2xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500">Total Capacity</p>

        <h2 className="mt-2 text-3xl font-bold text-cyan-600">{capacity}</h2>
      </div>
    </div>
  )
}
