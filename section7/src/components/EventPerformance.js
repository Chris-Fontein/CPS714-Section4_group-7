import React from 'react';
import './EventPerformance.css';

const EventPerformance = ({ data }) => {
  return (
    <div className="widget event-performance">
      <h2>Event Performance</h2>
      <div className="performance-metrics">
        <div className="metric">
          <span className="metric-value">{data.rsvps}</span>
          <span className="metric-label">RSVPs</span>
        </div>
        <div className="metric">
          <span className="metric-value">{data.actualAttendance}</span>
          <span className="metric-label">Actual Attendance</span>
        </div>
        <div className="metric">
          <span className="metric-value">{data.attendanceRate}</span>
          <span className="metric-label">Attendance Rate</span>
        </div>
      </div>
    </div>
  );
};

export default EventPerformance;
