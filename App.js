// frontend/src/App.js
import React, { useEffect, useState } from "react";

function App() {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/analytics")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setAnalytics(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Loading analytics…</div>;
  if (error) return <div style={{ padding: 20, color: "red" }}>Error: {error}</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📊 Organizer Analytics Dashboard</h1>

      {analytics.length === 0 && <p>No events found.</p>}

      {analytics.map(event => (
        <div
          key={event.id}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginBottom: "16px",
            borderRadius: "8px"
          }}
        >
          <h2>{event.name}</h2>
          <p><strong>RSVPs:</strong> {event.rsvps}</p>
          <p><strong>Attendance:</strong> {event.attendance}</p>
          <p><strong>Attendance Rate:</strong> {event.attendanceRate}%</p>
          <p><strong>Avg Rating:</strong> {event.avgRating} ⭐</p>

          <h3>Recent Feedback</h3>
          <ul>
            {event.recentComments.length ? event.recentComments.map((c, i) => <li key={i}>{c}</li>) : <li>No feedback yet</li>}
          </ul>

          <h3>Audience Majors</h3>
          <ul>
            {Object.entries(event.majors).map(([major, count]) => (
              <li key={major}>{major}: {count}</li>
            ))}
          </ul>

          <h3>Audience Colleges</h3>
          <ul>
            {Object.entries(event.colleges).map(([college, count]) => (
              <li key={college}>{college}: {count}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;

