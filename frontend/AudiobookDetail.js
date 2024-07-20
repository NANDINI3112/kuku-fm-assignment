import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Reviews from './Reviews';

function AudiobookDetail() {
  const { id } = useParams();
  const [audiobook, setAudiobook] = useState(null);

  useEffect(() => {
    fetchAudiobookDetail();
  }, [id]);

  const fetchAudiobookDetail = async () => {
    const response = await axios.get(`/api/audiobooks/${id}`);
    setAudiobook(response.data);
  };

  if (!audiobook) return <div>Loading...</div>;

  return (
    <div>
      <h1>{audiobook.title}</h1>
      <p>{audiobook.author}</p>
      <p>{audiobook.genre}</p>
      <p>{audiobook.description}</p>
      <img src={audiobook.coverImage} alt={audiobook.title} />
      <Reviews audiobookId={id} />
    </div>
  );
}

export default AudiobookDetail;
