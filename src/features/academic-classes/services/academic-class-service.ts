import axiosClient from "#/utils/axios-client";

import type {
  AcademicClass,
  AcademicClassFormData,
  AcademicStandardOption,
} from "../types";

class AcademicClassService {
  async getAll(): Promise<AcademicClass[]> {
    const response = await axiosClient.get("/academic_classes");

    return response.data.data;
  }

  async getById(id: number): Promise<AcademicClass> {
    const response = await axiosClient.get(
      `/academic_classes/${id}`,
    );

    return response.data.data;
  }

  async create(
    data: AcademicClassFormData,
  ): Promise<AcademicClass> {
    const response = await axiosClient.post(
      "/academic_classes",
      data,
    );

    return response.data.data;
  }

  async update(
    id: number,
    data: AcademicClassFormData,
  ): Promise<AcademicClass> {
    const response = await axiosClient.put(
      `/academic_classes/${id}`,
      data,
    );

    return response.data.data;
  }

  async delete(id: number): Promise<void> {
    await axiosClient.delete(
      `/academic_classes/${id}`,
    );
  }

  async getAcademicStandards(): Promise<
    AcademicStandardOption[]
  > {
    const response = await axiosClient.get(
      "/academic_standards",
    );

    return response.data.data;
  }
}

export default new AcademicClassService();