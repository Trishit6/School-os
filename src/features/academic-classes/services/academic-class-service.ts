import {
  createAcademicClass,
  deleteAcademicClass,
  getAcademicClass,
  getAcademicClasses,
  getAcademicSessions,
  getAcademicStandards,
  updateAcademicClass,
} from "../data"

import type {
  AcademicClass,
  AcademicClassFormData,
  AcademicSessionOption,
  AcademicStandardOption,
} from "../types"

class AcademicClassService {
  async getAll(): Promise<AcademicClass[]> {
    return await getAcademicClasses()
  }

  async getById(
    id: number,
  ): Promise<AcademicClass> {
    return await getAcademicClass(id)
  }

  async create(
    data: AcademicClassFormData,
  ): Promise<AcademicClass> {
    return await createAcademicClass(data)
  }

  async update(
    id: number,
    data: AcademicClassFormData,
  ): Promise<AcademicClass> {
    return await updateAcademicClass(id, data)
  }

  async delete(
    id: number,
  ): Promise<void> {
    await deleteAcademicClass(id)
  }

  async getAcademicSessions(): Promise<
    AcademicSessionOption[]
  > {
    return await getAcademicSessions()
  }

  async getAcademicStandards(): Promise<
    AcademicStandardOption[]
  > {
    return await getAcademicStandards()
  }
}

export default new AcademicClassService()