import { useState } from "react";
import ParentHeader from "./components/parent-header";
import ParentFilters from "./components/parent-filters";
import ParentTable from "./components/parent-table";
import { mockParents } from "./mock-data";

export default function ParentsPage() {
  const [search, setSearch] = useState("");

  const filtered = mockParents.filter((parent) =>
    `${parent.id} ${parent.name} ${parent.email} ${parent.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalParents = mockParents.length;
  const activeParents = mockParents.filter(
    (p) => p.status === "Active"
  ).length;

  const inactiveParents = mockParents.filter(
    (p) => p.status === "Inactive"
  ).length;

  const linkedStudents = mockParents.reduce(
    (sum, p) => sum + p.students.length,
    0
  );

  return (
    <div className="p-6 bg-[#f6f8fb] min-h-screen space-y-6">
      <ParentHeader />

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h4>Total Parents</h4>
          <h2 className="text-3xl font-bold">
            {totalParents}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h4>Active Parents</h4>
          <h2 className="text-3xl font-bold">
            {activeParents}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h4>Linked Students</h4>
          <h2 className="text-3xl font-bold">
            {linkedStudents}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h4>Inactive Parents</h4>
          <h2 className="text-3xl font-bold">
            {inactiveParents}
          </h2>
        </div>

      </div>

      <ParentFilters
        search={search}
        setSearch={setSearch}
      />

      <ParentTable parents={filtered} />
    </div>
  );
}