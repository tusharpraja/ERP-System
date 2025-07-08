import React from 'react';
import LogBoard from '../../dashboard/LogBoard';
import NoticeBoard from '../../dashboard/NoticeBoard';
import LeaveBoard from '../../dashboard/LeaveBoard';
import TimeLogSection from '../../dashboard/TimeLogSection';
import TeamTask from '../../dashboard/TeamTask';
import TeamMembers from '../../dashboard/TeamMembers';
import CalendarSection from '../../dashboard/CalendarSection';
import BirthdayBoard from '../../dashboard/BirthdayBoard';
import './Dashboard.css';
import DashboardPunch from '../../dashboard/DashboardPunch';

// ... other imports ...

const DefaultLayout = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="dashboard-container">
      {/* Header with date and punch component */}
      <div className="dashboard-header">
        <h1 className="dashboard-date">{formattedDate}</h1>
        <DashboardPunch />
      </div>

      {/* Rest of your dashboard content */}
      <div className="dashboard-content">
        {/* Row 1 */}
        <div className="dashboard-row">
          <TimeLogSection />
          <LogBoard />
          <NoticeBoard />
        </div>
        
        {/* Row 2 */}
        <div className="dashboard-row">
          <LeaveBoard />
          <TeamTask />
          <TeamMembers />
        </div>

        {/* Row 3 */}
        <div className="dashboard-row">
          <CalendarSection />
          <BirthdayBoard />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;