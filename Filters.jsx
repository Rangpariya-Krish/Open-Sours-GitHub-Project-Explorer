export default function Filters({ sort, setSort, language, setLanguage, search, setSearch }) {
  return (
    <div className="flex flex-wrap gap-4">
      <input className="border p-2" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <select className="border p-2" value={sort} onChange={e => setSort(e.target.value)}>
        <option value="stars">Stars</option>
        <option value="updated">Updated</option>
        <option value="forks">Forks</option>
      </select>
      <input className="border p-2" placeholder="Language" value={language} onChange={e => setLanguage(e.target.value)} />
    </div>
  );
}
