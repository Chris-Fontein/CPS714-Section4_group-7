// BACKEND FOR ORGANIZER ANALYTICS DASHBOARD
// Uses CommonJS (require) to avoid module errors in Node 18.

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// -------------------------------
// Mock Datasets
// -------------------------------

// Event performance analytics
const eventReports = [
  {
    eventId: 1,
    eventName: "Tech Innovation Fair",
    rsvps: 120,
    attendance: 95,
    attendanceRate: "79%"
  },
  {
    eventId: 2,
    eventName: "Business Leadership Summit",
    rsvps: 200,
    attendance: 150,
    attendanceRate: "75%"
  }
];

// Feedback summary
const feedbackData = [
  {
    eventId: 1,
    averageRating: 4.5,
    comments: ["Great event!", "Very informative!"]
  },
  {
    eventId: 2,
    averageRating: 4.2,
    comments: ["Well organized.", "Good speakers."]
  }
];

// Audience insights
const audienceInsights = [
  {
    eventId: 1,
    majors: {
      "Computer Science": 40,
      "Engineering": 25,
      "Business": 10,
      "Arts": 20
    },
    colleges: {
      "College of Computing": 45,
      "College of Engineering": 30,
      "Business School": 20
    }
  }
];

// -------------------------------
// API Routes
// -------------------------------

// Event performance
app.get("/api/events", (req, res) => {
  res.json(eventReports);
});

// Feedback summary
app.get("/api/feedback", (req, res) => {
  res.json(feedbackData);
});

// Audience insights
app.get("/api/insights/:eventId", (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const insights = audienceInsights.find((e) => e.eventId === eventId);

  if (!insights) {
    return res.status(404).json({ message: "No insights found for this event." });
  }

  res.json(insights);
});

// Root route
app.get("/", (req, res) => {
  res.send("Organizer Analytics Backend Running ✔️");
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
