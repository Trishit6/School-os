export interface StudentSession {
  id: number;

  studentId: number;
  academicSessionId: number;
  academicClassId: number;

  rollNo: string;

  status: string;

  student?: {
    id: number;
    admissionNo: string;
    name: string;
  };

  academicSession?: {
    id: number;
    name: string;
  };

  academicClass?: {
    id: number;
    name: string;
  };

  createdAt?: string;
  updatedAt?: string;
}

export interface StudentSessionFormData {
  studentId: number;
  academicSessionId: number;
  academicClassId: number;

  rollNo: string;

  status: string;
}