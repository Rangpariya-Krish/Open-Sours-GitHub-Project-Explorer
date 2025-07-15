import React, { useEffect, useState } from 'react';
import { fetchTrendingRepos } from '../utils/githubAPI';
import RepoCard from '../components/RepoCard';
import Filters from '../components/Filters';
import ChartPanel from '../components/ChartPanel';
import BookmarkList from '../components/BookmarkList';

export default function Dashboard() {
  const [repos, setRepos] = useState([]);
  const [sort, setSort] = useState('stars');
  const [language, setLanguage] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchTrendingRepos(search || 'stars:>1000', sort, 'desc', language).then(setRepos);
  }, [sort, language, search]);

  return (
    <div className="p-4">
      <Filters {...{ sort, setSort, language, setLanguage, search, setSearch }} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
      </div>
      <ChartPanel repos={repos} />
      <BookmarkList />
    </div>
  );
}
