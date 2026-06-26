import type { AcademicStandardFormData } from "./types"

export const defaultAcademicStandardValues: AcademicStandardFormData = {
  name: "",
  code: "",
  status: true,
}

export const statusOptions = [
  {
    label: "Active",
    value: true,
  },
  {
    label: "Inactive",
    value: false,
  },
]

export const tableColumns = [
  {
    key: "name",
    label: "Standard Name",
  },
  {
    key: "code",
    label: "Code",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "createdAt",
    label: "Created",
  },
  {
    key: "actions",
    label: "Actions",
  },
]

export const getStatusBadgeClass = (status: boolean) =>
  status
    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
    : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"

export const getStatusLabel = (status: boolean) =>
  status ? "Active" : "Inactive"