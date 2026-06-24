import { Link } from "@tanstack/react-router";
import { FaEye, FaEdit } from "react-icons/fa";
import type { Parent } from "../types";

interface Props {
  parents: Parent[];
}

export default function ParentTable({ parents }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Avatar</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Occupation</th>
              <th className="p-4 text-left">Students</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {parents.map((parent) => (
              <tr
                key={parent.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="p-4">{parent.id}</td>

                <td className="p-4">
                  <img
                    src={parent.photo}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>

                <td className="p-4 font-medium">{parent.name}</td>

                <td className="p-4">{parent.email}</td>

                <td className="p-4">{parent.phone}</td>

                <td className="p-4">{parent.occupation}</td>

                <td className="p-4">{parent.students.length}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      parent.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {parent.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <Link
                      to="/parents/$parentId"
                      params={{ parentId: parent.id }}
                      className="p-2 bg-blue-100 rounded-xl"
                    >
                      <FaEye />
                    </Link>

                    <Link
                      to="/parents/$parentId/edit"
                      params={{ parentId: parent.id }}
                      className="p-2 bg-amber-100 rounded-xl"
                    >
                      <FaEdit />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}