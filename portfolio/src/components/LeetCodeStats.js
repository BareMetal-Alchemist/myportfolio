import React, { useEffect, useState } from 'react';

export default function LeetCodeStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/BareMetal_Alchemist'); 
        const result = await response.json();
        setStats([
          { difficulty: 'Rank', count: result.ranking },
          { difficulty: 'Easy', count: result.easySolved },
          { difficulty: 'Medium', count: result.mediumSolved },
          { difficulty: 'Hard', count: result.hardSolved },
          { difficulty: 'Total', count: result.totalSolved },
        ]);
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        setError('Could not load LeetCode stats.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchStats();
  }, []);

  return (
    <section style={{ padding: '2rem' }}>
      <h2>LeetCode Stats</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {stats.map((item, index) => {
            if (index === 0) {
                return (
                    <li key={item.difficulty}>
                        {item.difficulty}: {item.count}
                    </li>
                );
            }
            return (
            <li key={item.difficulty}>
              {item.difficulty}: {item.count} solved 
            </li>
          );
        })}
        </ul>
      )}
    </section>
  );
}
