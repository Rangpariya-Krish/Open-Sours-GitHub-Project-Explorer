import axios from 'axios';

const GITHUB_API = 'https://api.github.com/search/repositories';

export const fetchTrendingRepos = async (query = 'stars:>1000', sort = 'stars', order = 'desc', language = '') => {
  const languageFilter = language ? `+language:${language}` : '';
  const res = await axios.get(\`\${GITHUB_API}?q=\${query}\${languageFilter}&sort=\${sort}&order=\${order}&per_page=30\`);
  return res.data.items;
};
