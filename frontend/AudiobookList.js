import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AudiobookItem from './AudiobookItem';
import Filters from './Filters';

function AudiobookList() {
  const [audiobooks, setAudiobooks] = useState([]);
  const [filters, setFilters] = useState({ genre: '', author: '', rating: '' });

  useEffect(() => {
    fetchAudiobooks();
  }, [filters]);

  const fetchAudiobooks = async () => {
    const response = await axios.get('/api/audiobooks', { params: filters });
    setAudiobooks(response.data);
  };

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="audiobook-list">
        {audiobooks.map(audiobook => (
          <AudiobookItem key={audiobook.id} audiobook={audiobook} />
        ))}
      </div>
    </div>
  );
}

export default AudiobookList;
