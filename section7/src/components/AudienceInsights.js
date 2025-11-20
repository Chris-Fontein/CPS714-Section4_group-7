import React from 'react';
import './AudienceInsights.css';

const AudienceInsights = ({ data }) => {
  return (
    <div className="widget audience-insights">
      <h2>Audience Insights</h2>
      <div className="insights-data">
        <div className="insight-category">
          <h3>Colleges</h3>
          <ul>
            {Object.entries(data.colleges).map(([college, count]) => (
              <li key={college}>
                {college}: {count}
              </li>
            ))}
          </ul>
        </div>
        <div className="insight-category">
          <h3>Majors</h3>
          <ul>
            {Object.entries(data.majors).map(([major, count]) => (
              <li key={major}>
                {major}: {count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AudienceInsights;
