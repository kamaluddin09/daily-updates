import React, { useEffect, useState } from 'react';

// Step 1: Define TypeScript interface for GitHub user
interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  blog: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

// Step 2: Component
const GitHubUserProfile: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const username = 'mojombo-dev'; // change to any GitHub username

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('User not found');
        const data: GitHubUser = await response.json();
        setUser(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubUser();
  }, []);

  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <div className="p-4 bg-white shadow rounded max-w-md mx-auto">
      <img src={user.avatar_url} alt={user.login} className="w-24 rounded-full mb-4" />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-700">@{user.login}</p>
      {user.bio && <p className="mt-2">{user.bio}</p>}
      <p><strong>Company:</strong> {user.company || 'N/A'}</p>
      <p><strong>Location:</strong> {user.location || 'N/A'}</p>
      <p><strong>Blog:</strong> {user.blog ? <a href={user.blog}>{user.blog}</a> : 'N/A'}</p>
      <p><strong>Followers:</strong> {user.followers}</p>
      <p><strong>Following:</strong> {user.following}</p>
      <p><strong>Public Repos:</strong> {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
        View on GitHub
      </a>
    </div>
  );
};

export default GitHubUserProfile;
