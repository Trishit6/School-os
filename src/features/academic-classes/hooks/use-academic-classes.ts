import { useEffect, useState } from "react"

import AcademicClassService from "../services/academic-class-service"

import type {
  AcademicClass,
  AcademicClassFormData,
  AcademicSessionOption,
  AcademicStandardOption,
} from "../types"

export function useAcademicClasses() {
  const [academicClasses, setAcademicClasses] = useState<AcademicClass[]>([])
  const [academicSessions, setAcademicSessions] = useState<
    AcademicSessionOption[]
  >([])
  const [academicStandards, setAcademicStandards] = useState<
    AcademicStandardOption[]
  >([])

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const loadAcademicClasses = async () => {
    try {
      setLoading(true)

      const [classes, sessions, standards] = await Promise.all([
        AcademicClassService.getAll(),
        AcademicClassService.getAcademicSessions(),
        AcademicClassService.getAcademicStandards(),
      ])

      setAcademicClasses(classes)
      setAcademicSessions(sessions)
      setAcademicStandards(standards)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadAcademicClasses()
  }, [])

  const create = async (values: AcademicClassFormData) => {
    try {
      setSaving(true)

      const academicClass = await AcademicClassService.create(values)

      setAcademicClasses((prev) => [academicClass, ...prev])
    } finally {
      setSaving(false)
    }
  }

  const update = async (
    id: number,
    values: AcademicClassFormData,
  ) => {
    try {
      setSaving(true)

      const academicClass = await AcademicClassService.update(
        id,
        values,
      )

      setAcademicClasses((prev) =>
        prev.map((item) =>
          item.id === id ? academicClass : item,
        ),
      )
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id: number) => {
    try {
      await AcademicClassService.delete(id)

      setAcademicClasses((prev) =>
        prev.filter((item) => item.id !== id),
      )
    } catch (error) {
      console.error(error)
    }
  }

  return {
    academicClasses,
    academicSessions,
    academicStandards,
    loading,
    saving,
    create,
    update,
    remove,
    reload: loadAcademicClasses,
  }
}