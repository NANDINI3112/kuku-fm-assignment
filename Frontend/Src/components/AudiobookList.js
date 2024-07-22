import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AudiobookList.css';

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
    <div className="audiobook-list-container">
      <h1 className="text-center mt-5 mb-5">Audiobook List</h1>
      <div className="filter-container mb-4">
        <input
          type="text"
          placeholder="Genre"
          className="filter-input"
          value={filters.genre}
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          className="filter-input"
          value={filters.author}
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          className="filter-input"
          value={filters.rating}
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
        />
        <button className="btn btn-primary" onClick={applyFilters}>Apply Filters</button>
      </div>
      <div className="row">
        {audiobooks.map((audiobook) => (
          <div className="col-md-4 mb-4" key={audiobook.id}>
            <div className="card h-100">
              <img src={audiobook.coverImage} className="card-img-top" alt={audiobook.title} />
              <div className="card-body">
                <h5 className="card-title">{audiobook.title}</h5>
                <p className="card-text">{audiobook.author}</p>
                <Link to={`/audiobooks/${audiobook.id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudiobookList;
