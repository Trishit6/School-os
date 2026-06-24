interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function ParentFilters({
  search,
  setSearch,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm">
      <input
        type="text"
        placeholder="Search by Parent ID, Name, Email, Phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-[#0b8ca1]"
      />
    </div>
  );
}