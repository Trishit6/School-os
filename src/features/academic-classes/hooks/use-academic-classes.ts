import { useCallback, useEffect, useState } from "react";


import type {
  AcademicClass,
  AcademicClassFormData,
  AcademicStandardOption,
} from "../types";
import academicClassService from "../services/academic-class-service";

export function useAcademicClasses() {
  const [academicClasses, setAcademicClasses] = useState<
    AcademicClass[]
  >([]);

  const [academicStandards, setAcademicStandards] = useState<
    AcademicStandardOption[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const loadAcademicClasses = useCallback(async () => {
    try {
      setLoading(true);

      const [classes, standards] = await Promise.all([
        academicClassService.getAll(),
        academicClassService.getAcademicStandards(),
      ]);

      setAcademicClasses(classes);
      setAcademicStandards(standards);
    } catch (error) {
      console.error("Failed to load academic classes", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadAcademicClasses();
  }, [loadAcademicClasses]);

  const create = async (
    values: AcademicClassFormData,
  ) => {
    try {
      setSaving(true);

      const academicClass =
        await academicClassService.create(values);

      setAcademicClasses((prev) => [
        academicClass,
        ...prev,
      ]);
    } catch (error) {
      console.error("Create failed", error);
      throw error;
    } finally {
      setSaving(false);
    }
  };

  const update = async (
    id: number,
    values: AcademicClassFormData,
  ) => {
    try {
      setSaving(true);

      const academicClass =
        await academicClassService.update(
          id,
          values,
        );

      setAcademicClasses((prev) =>
        prev.map((item) =>
          item.id === id ? academicClass : item,
        ),
      );
    } catch (error) {
      console.error("Update failed", error);
      throw error;
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id: number) => {
    try {
      await academicClassService.delete(id);

      setAcademicClasses((prev) =>
        prev.filter((item) => item.id !== id),
      );
    } catch (error) {
      console.error("Delete failed", error);
      throw error;
    }
  };

  return {
    academicClasses,
    academicStandards,

    loading,
    saving,

    create,
    update,
    remove,

    reload: loadAcademicClasses,
  };
}