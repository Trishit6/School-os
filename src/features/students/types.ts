export interface Student {
  id: number;

  name: string;

  dateOfBirth: string;

  guardianName: string;

  status: boolean;

  createdAt?: string;
  updatedAt?: string;
}

export interface StudentFormData {
  name: string;

  dateOfBirth: string;

  guardianName: string;

  status: boolean;
}