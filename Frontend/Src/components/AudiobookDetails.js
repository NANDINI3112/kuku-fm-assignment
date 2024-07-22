import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import './AudiobookDetails.css';

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
    <div className="audiobook-details-container">
      <h1 className="text-center mt-5 mb-4">{audiobook.title}</h1>
      <div className="audiobook-details-content">
        <img src={audiobook.coverImage} alt={audiobook.title} className="audiobook-cover mb-4" />
        <div className="audiobook-info">
          <p><strong>Author:</strong> {audiobook.author}</p>
          <p><strong>Genre:</strong> {audiobook.genre}</p>
          <p><strong>Description:</strong> {audiobook.description}</p>
        </div>
      </div>
      <h2 className="mt-5">Reviews</h2>
      <ul className="reviews-list">
        {audiobook.reviews.map((review) => (
          <li key={review.id} className="review-item">
            <p className="review-rating"><strong>Rating:</strong> {review.rating}</p>
            <p className="review-comment">{review.comment}</p>
          </li>
        ))}
      </ul>
      <ReviewForm audiobookId={id} />
    </div>
  );
};

export default AudiobookDetails;
