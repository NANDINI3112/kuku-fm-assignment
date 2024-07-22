// src/components/ReviewForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './App.css';

const ReviewForm = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/audiobooks/${id}/reviews`, { rating, comment })
      .then(() => {
        setFeedback('Review submitted successfully!');
        setRating(1);
        setComment('');
      })
      .catch(error => {
        setFeedback('Error submitting review.');
        console.error('Error submitting review:', error);
      });
  };

  return (
    <div className="review-form">
      <h3>Submit a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rating</label>
          <select className="form-select" value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Comment</label>
          <textarea
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {feedback && <div className="feedback mt-3">{feedback}</div>}
    </div>
  );
};

export default ReviewForm;
