export interface Student {
  id: string;
  name: string;
  photo?: string;
  className: string;
  admissionNo: string;
  rollNumber: string;
  attendance: number;
  feeStatus: string;
}

export interface Parent {
  id: string;
  name: string;
  fatherName: string;
  motherName: string;
  email: string;
  phone: string;
  alternatePhone: string;
  occupation: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  photo?: string;
  status: "Active" | "Inactive";
  students: Student[];
}