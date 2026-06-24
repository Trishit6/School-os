import { useParams } from "@tanstack/react-router";
import ParentProfile from "../components/parent-profile";
import { mockParents } from "../mock-data";

export default function ParentDetailsPage() {
  const { parentId } = useParams({ strict: false });

  const parent = mockParents.find(
    (p) => p.id === parentId
  );

  if (!parent) return null;

  return (
    <div className="p-6 bg-[#f6f8fb] min-h-screen">
      <ParentProfile parent={parent} />
    </div>
  );
}