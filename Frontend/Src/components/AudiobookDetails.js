// src/components/AudiobookDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import './AudiobookDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const AudiobookDetail = () => {
  const { id } = useParams();
  const [audiobook, setAudiobook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`/api/audiobooks/${id}`)
      .then(response => {
        setAudiobook(response.data);
        setReviews(response.data.reviews);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!audiobook) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="card mb-4 shadow-sm">
        <img src={audiobook.coverImage} className="card-img-top" alt={audiobook.title} />
        <div className="card-body">
          <h1 className="card-title">{audiobook.title}</h1>
          <h5 className="card-subtitle mb-2 text-muted">{audiobook.author}</h5>
          <p className="card-text">{audiobook.description}</p>
          <p><strong>Genre:</strong> {audiobook.genre}</p>
          <hr />
          <h3>Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>Rating:</strong> {review.rating}/5</p>
                <p>{review.comment}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudiobookDetail;
