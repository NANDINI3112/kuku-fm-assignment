// src/components/AudiobookList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AudiobookList.css';
import './App.css';

const AudiobookList = () => {
  const [audiobooks, setAudiobooks] = useState([]);
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get('/api/audiobooks')
      .then(response => setAudiobooks(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleGenreChange = (e) => setGenre(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);

  const filteredAudiobooks = audiobooks.filter(book => 
    (genre ? book.genre === genre : true) &&
    (author ? book.author === author : true)
  );

  return (
    <div className="container">
      <h1 className="my-4">Audiobooks</h1>
      <div className="filters mb-4">
        <select className="form-select" onChange={handleGenreChange}>
          <option value="">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          {/* Add more genres as needed */}
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Filter by Author"
          onChange={handleAuthorChange}
        />
      </div>
      <div className="row">
        {filteredAudiobooks.map(book => (
          <div key={book.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={book.coverImage} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <Link to={`/audiobooks/${book.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudiobookList;
