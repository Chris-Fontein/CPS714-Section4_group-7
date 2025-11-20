import React from 'react';
import EventPerformance from './EventPerformance';
import FeedbackSummary from './FeedbackSummary';
import AudienceInsights from './AudienceInsights';
import './OrganizerDashboard.css';

const OrganizerDashboard = () => {
  // Mock data for the components
  const eventPerformanceData = {
    rsvps: 150,
    actualAttendance: 120,
    attendanceRate: '80%',
  };

  const feedbackSummaryData = {
    averageRating: 4.5,
    comments: [
      'Great event! Very informative.',
      'Enjoyed the networking opportunities.',
      'The speaker was excellent.',
    ],
  };

  const audienceInsightsData = {
    colleges: {
      'Faculty of Engineering and Architectural Science': 40,
      'Faculty of Arts': 30,
      'Ted Rogers School of Management': 50,
    },
    majors: {
      'Computer Science': 30,
      'Business Management': 25,
      'Mechanical Engineering': 20,
      'History': 15,
      'Sociology': 30,
    },
  };

  return (
    <div className="organizer-dashboard">
      <h1>Organizer Analytics & Reporting Dashboard</h1>
      <div className="dashboard-widgets">
        <EventPerformance data={eventPerformanceData} />
        <FeedbackSummary data={feedbackSummaryData} />
        <AudienceInsights data={audienceInsightsData} />
      </div>
    </div>
  );
};

export default OrganizerDashboard;
