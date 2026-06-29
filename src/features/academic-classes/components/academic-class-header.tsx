import type { ReactNode } from 'react'

interface Props {
  title: string
  description: string
  children?: ReactNode
}

export default function AcademicClassHeader({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
          Academic Management
        </span>

        <h1 className="mt-3 text-3xl font-bold">{title}</h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">{description}</p>
      </div>

      {children}
    </div>
  )
}
