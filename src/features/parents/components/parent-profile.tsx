import { Link } from "@tanstack/react-router";
import { FaEdit, FaEnvelope } from "react-icons/fa";
import type { Parent } from "../types";

interface Props {
  parent: Parent;
}

export default function ParentProfile({
  parent,
}: Props) {
  return (
    <div className="space-y-6">

      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-center">

          <img
            src={parent.photo}
            alt=""
            className="w-32 h-32 rounded-full object-cover border-4 border-[#0b8ca1]"
          />

          <div className="flex-1">
            <h2 className="text-3xl font-bold">
              {parent.name}
            </h2>

            <p>{parent.id}</p>
            <p>{parent.email}</p>
            <p>{parent.phone}</p>
            <p>{parent.occupation}</p>
            <p>{parent.address}</p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/parents/$parentId/edit"
              params={{ parentId: parent.id }}
              className="bg-[#0b8ca1] text-white px-5 py-3 rounded-2xl flex items-center gap-2"
            >
              <FaEdit />
              Edit Parent
            </Link>

            <button className="bg-slate-100 px-5 py-3 rounded-2xl flex items-center gap-2">
              <FaEnvelope />
              Message
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-xl mb-4">
          Linked Students
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {parent.students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-3xl p-5 shadow-sm"
            >
              <img
                src={student.photo}
                alt=""
                className="w-16 h-16 rounded-full mb-3"
              />

              <h4 className="font-semibold">
                {student.name}
              </h4>

              <p>{student.admissionNo}</p>
              <p>{student.className}</p>
              <p>Roll: {student.rollNumber}</p>
              <p>Attendance: {student.attendance}%</p>
              <p>Fee: {student.feeStatus}</p>

              <button className="mt-4 bg-[#0b8ca1] text-white px-4 py-2 rounded-xl">
                View Student
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}