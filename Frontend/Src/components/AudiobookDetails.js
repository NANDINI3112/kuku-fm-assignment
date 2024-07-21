import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';

const AudiobookDetails = () => {
  const { id } = useParams();
  const [audiobook, setAudiobook] = useState(null);

  useEffect(() => {
    axios.get(`/api/audiobooks/${id}`).then((response) => {
      setAudiobook(response.data);
    });
  }, [id]);

  if (!audiobook) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{audiobook.title}</h1>
      <p>{audiobook.author}</p>
      <p>{audiobook.genre}</p>
      <p>{audiobook.description}</p>
      <img src={audiobook.coverImage} alt={audiobook.title} />
      <h2>Reviews</h2>
      <ul>
        {audiobook.reviews.map((review) => (
          <li key={review.id}>
            <p>{review.rating}</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <ReviewForm audiobookId={id} />
    </div>
  );
};

export default AudiobookDetails;
