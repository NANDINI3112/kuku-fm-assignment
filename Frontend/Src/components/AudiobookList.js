import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AudiobookList = () => {
  const [audiobooks, setAudiobooks] = useState([]);
  const [filters, setFilters] = useState({ genre: '', author: '', rating: '' });

  useEffect(() => {
    axios.get('/api/audiobooks').then((response) => {
      setAudiobooks(response.data);
    });
  }, []);

  const applyFilters = () => {
    axios
      .get('/api/audiobooks', { params: filters })
      .then((response) => setAudiobooks(response.data));
  };

  return (
    <div>
      <h1>Audiobook List</h1>
      <div>
        <input
          type="text"
          placeholder="Genre"
          value={filters.genre}
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={filters.author}
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={filters.rating}
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
        />
        <button onClick={applyFilters}>Apply Filters</button>
      </div>
      <ul>
        {audiobooks.map((audiobook) => (
          <li key={audiobook.id}>
            <Link to={`/audiobooks/${audiobook.id}`}>
              <h2>{audiobook.title}</h2>
              <p>{audiobook.author}</p>
              <img src={audiobook.coverImage} alt={audiobook.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudiobookList;
