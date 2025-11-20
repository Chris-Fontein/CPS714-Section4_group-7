import React from 'react';
import EventPerformance from './EventPerformance';
import FeedbackSummary from './FeedbackSummary';
import AudienceInsights from './AudienceInsights';
import './OrganizerDashboard.css';
import { eventPerformanceData } from '../api/EventPerformanceAPI';
import { feedbackSummaryData } from '../api/FeedbackSummaryAPI';
import { audienceInsightsData } from '../api/AudienceInsightsAPI';

const OrganizerDashboard = () => {

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
