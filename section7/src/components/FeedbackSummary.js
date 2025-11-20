import React from 'react';
import './FeedbackSummary.css';

const FeedbackSummary = ({ data }) => {
  return (
    <div className="widget feedback-summary">
      <h2>Feedback Summary</h2>
      <div className="summary-metrics">
        <div className="metric">
          <span className="metric-value">{data.averageRating} / 5</span>
          <span className="metric-label">Average Rating</span>
        </div>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        <ul>
          {data.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackSummary;
