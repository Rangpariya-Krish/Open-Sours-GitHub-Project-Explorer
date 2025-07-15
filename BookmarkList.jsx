import { useState, useEffect } from 'react';

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(data);
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">📌 Bookmarked Repositories</h2>
      <ul className="list-disc ml-5">
        {bookmarks.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-600 underline">{repo.full_name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
