import type { Student } from "./types";

export const students: Student[] = [
  {
    id: "1",
    admissionNo: "ADM-1001",

    firstName: "Aisha",
    lastName: "Khan",

    email: "aisha@school.com",
    phone: "9876543210",

    gender: "female",

    grade: "10",
    section: "A",

    guardianName: "Rehan Khan",
    guardianPhone: "9876543200",

    attendance: 96,
    gpa: 3.8,

    status: "Active",
  },

  {
    id: "2",
    admissionNo: "ADM-1002",

    firstName: "Liam",
    lastName: "Carter",

    email: "liam@school.com",
    phone: "9876543211",

    gender: "male",

    grade: "9",
    section: "B",

    guardianName: "Sara Carter",
    guardianPhone: "9876543201",

    attendance: 88,
    gpa: 3.4,

    status: "Active",
  },

  {
    id: "3",
    admissionNo: "ADM-1003",

    firstName: "Mei",
    lastName: "Tanaka",

    email: "mei@school.com",
    phone: "9876543212",

    gender: "female",

    grade: "11",
    section: "A",

    guardianName: "Hiro Tanaka",
    guardianPhone: "9876543202",

    attendance: 99,
    gpa: 3.9,

    status: "Active",
  },

  {
    id: "4",
    admissionNo: "ADM-1004",

    firstName: "Diego",
    lastName: "Alvarez",

    email: "diego@school.com",
    phone: "9876543213",

    gender: "male",

    grade: "8",
    section: "C",

    guardianName: "Lucia Alvarez",
    guardianPhone: "9876543203",

    attendance: 74,
    gpa: 2.9,

    status: "On Leave",
  },
]