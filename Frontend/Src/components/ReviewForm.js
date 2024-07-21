import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ audiobookId }) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/audiobooks/${audiobookId}/reviews`, { rating, comment })
      .then((response) => {
        window.location.reload();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit a Review</h3>
      <div>
        <label>Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <label>Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
