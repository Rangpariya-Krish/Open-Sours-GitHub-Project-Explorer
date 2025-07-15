import { useState } from 'react';

export default function RepoCard({ repo }) {
  const [note, setNote] = useState(localStorage.getItem(repo.full_name) || '');

  const toggleBookmark = () => {
    const saved = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const exists = saved.find(r => r.id === repo.id);
    const newList = exists ? saved.filter(r => r.id !== repo.id) : [...saved, repo];
    localStorage.setItem('bookmarks', JSON.stringify(newList));
  };

  const saveNote = () => {
    localStorage.setItem(repo.full_name, note);
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-lg font-bold">{repo.full_name}</h3>
      <p>{repo.description}</p>
      <p>⭐ {repo.stargazers_count} | 🧑‍💻 {repo.language}</p>
      <textarea className="w-full mt-2 p-1 border" value={note} onChange={e => setNote(e.target.value)} />
      <button className="bg-blue-500 text-white px-2 py-1 mr-2 mt-2" onClick={saveNote}>Save Note</button>
      <button className="bg-green-500 text-white px-2 py-1 mt-2" onClick={toggleBookmark}>Bookmark</button>
    </div>
  );
}
