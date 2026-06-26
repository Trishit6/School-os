import { useEffect, useState } from "react"

import {
  createAcademicStandard,
  deleteAcademicStandard,
  getAcademicStandards,
  updateAcademicStandard,
} from "../services/academic-standard-service"

import type {
  AcademicStandard,
  AcademicStandardFormData,
} from "../types"

export function useAcademicStandards() {
  const [academicStandards, setAcademicStandards] = useState<
    AcademicStandard[]
  >([])

  const [loading, setLoading] = useState(true)

  const [saving, setSaving] = useState(false)

  const [selectedAcademicStandard, setSelectedAcademicStandard] =
    useState<AcademicStandard | null>(null)

  const loadAcademicStandards = async () => {
    try {
      setLoading(true)

      const data =
        await getAcademicStandards()

      setAcademicStandards(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadAcademicStandards()
  }, [])

  const create = async (
    values: AcademicStandardFormData
  ) => {
    try {
      setSaving(true)

      await createAcademicStandard(values)

      await loadAcademicStandards()
    } finally {
      setSaving(false)
    }
  }

  const update = async (
    id: number,
    values: AcademicStandardFormData
  ) => {
    try {
      setSaving(true)

      await updateAcademicStandard(
        id,
        values
      )

      await loadAcademicStandards()
    } finally {
      setSaving(false)
    }
  }

  const remove = async (
    id: number
  ) => {
    if (
      !confirm(
        "Delete this Academic Standard?"
      )
    ) {
      return
    }

    await deleteAcademicStandard(id)

    await loadAcademicStandards()
  }

  return {
    academicStandards,

    loading,

    saving,

    selectedAcademicStandard,

    setSelectedAcademicStandard,

    loadAcademicStandards,

    create,

    update,

    remove,
  }
}