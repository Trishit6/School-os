export interface Student {
  id: string;

  admissionNo: string;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;

  gender: string;

  guardianName: string;
  guardianPhone: string;

  dateOfBirth: string;
  address: string;

  status: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface StudentFormData {
  admissionNo: string;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;

  gender: string;

  guardianName: string;
  guardianPhone: string;

  dateOfBirth: string;
  address: string;

  status: string;
}