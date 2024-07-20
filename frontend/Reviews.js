import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reviews({ audiobookId }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: '', comment: '' });

  useEffect(() => {
    fetchReviews();
  }, [audiobookId]);

  const fetchReviews = async () => {
    const response = await axios.get(`/api/audiobooks/${audiobookId}/reviews`);
    setReviews(response.data);
  };

  const submitReview = async () => {
    await axios.post(`/api/audiobooks/${audiobookId}/reviews`, newReview);
    fetchReviews();
    setNewReview({ rating: '', comment: '' });
  };

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        {reviews.map(review => (
          <div key={review.id}>
            <p>{review.rating} stars</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <h3>Submit a review</h3>
      <input
        type="number"
        value={newReview.rating}
        onChange={e => setNewReview({ ...newReview, rating: e.target.value })}
        placeholder="Rating"
      />
      <textarea
        value={newReview.comment}
        onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
        placeholder="Comment"
      />
      <button onClick={submitReview}>Submit</button>
    </div>
  );
}

export default Reviews;
