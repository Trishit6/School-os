import { useParams } from "@tanstack/react-router";
import ParentForm from "../../components/parent-form";
import { mockParents } from "../../mock-data";

export default function EditParentPage() {
  const { parentId } = useParams({ strict: false });

  const parent = mockParents.find(
    (p) => p.id === parentId
  );

  if (!parent) return null;

  return (
    <div className="p-6 bg-[#f6f8fb] min-h-screen">
      <ParentForm parent={parent} />
    </div>
  );
}