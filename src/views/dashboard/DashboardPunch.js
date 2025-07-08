import React, { useState } from 'react';
import { FaSignInAlt, FaSignOutAlt, FaCoffee, FaClock } from 'react-icons/fa';
import './DashboardPunch.css';

const DashboardPunch = () => {
  const [attendance, setAttendance] = useState({
    punchInTime: '',
    punchOutTime: '',
    breakStart: '',
    breakEnd: '',
    workingHours: '--',
    breakDuration: '--',
    status: 'out' // 'out', 'working', 'onBreak'
  });

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const calculateDuration = (start, end) => {
    if (!start || !end) return '--';
    const startTime = new Date(`01/01/2000 ${start}`);
    const endTime = new Date(`01/01/2000 ${end}`);
    const diffMs = (endTime - startTime);
    const diffMins = Math.floor(diffMs / 60000);
    return `${diffMins} mins`;
  };

  const calculateWorkingHours = () => {
    if (!attendance.punchInTime) return '--';
    
    const now = attendance.punchOutTime || formatTime();
    const start = new Date(`01/01/2000 ${attendance.punchInTime}`);
    const end = new Date(`01/01/2000 ${now}`);
    
    let diffMs = (end - start);
    
    if (attendance.breakStart && attendance.breakEnd) {
      const breakStart = new Date(`01/01/2000 ${attendance.breakStart}`);
      const breakEnd = new Date(`01/01/2000 ${attendance.breakEnd}`);
      diffMs -= (breakEnd - breakStart);
    }
    
    const hours = Math.floor(diffMs / 3600000);
    const minutes = Math.floor((diffMs % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  const handlePunchIn = () => {
    const time = formatTime();
    setAttendance({
      ...attendance,
      punchInTime: time,
      status: 'working',
      workingHours: calculateWorkingHours()
    });
  };

  const handlePunchOut = () => {
    const time = formatTime();
    setAttendance({
      ...attendance,
      punchOutTime: time,
      status: 'out',
      workingHours: calculateWorkingHours()
    });
  };

  const handleBreakStart = () => {
    const time = formatTime();
    setAttendance({
      ...attendance,
      breakStart: time,
      status: 'onBreak',
      breakDuration: calculateDuration(time, attendance.breakEnd)
    });
  };

  const handleBreakEnd = () => {
    const time = formatTime();
    setAttendance({
      ...attendance,
      breakEnd: time,
      status: 'working',
      breakDuration: calculateDuration(attendance.breakStart, time),
      workingHours: calculateWorkingHours()
    });
  };

  const getStatusText = () => {
    switch (attendance.status) {
      case 'working': return 'Currently Working';
      case 'onBreak': return 'On Break';
      default: return 'Not Clocked In';
    }
  };

  const getStatusClass = () => {
    switch (attendance.status) {
      case 'working': return 'status-working';
      case 'onBreak': return 'status-break';
      default: return 'status-out';
    }
  };

  return (
    <div className="dashboard-punch-container">
      <div className="punch-status">
        <div className={`status-indicator ${getStatusClass()}`}>
          {getStatusText()}
        </div>
        <div className="time-metrics">
          <div className="metric">
            <FaClock /> {calculateWorkingHours()}
          </div>
          {attendance.breakStart && (
            <div className="metric">
              <FaCoffee /> {attendance.breakDuration}
            </div>
          )}
        </div>
      </div>

      <div className="punch-controls">
        {!attendance.punchInTime ? (
          <button
            onClick={handlePunchIn}
            className="punch-btn punch-in"
          >
            <FaSignInAlt />
            <span>Punch In</span>
          </button>
        ) : !attendance.punchOutTime ? (
          <>
            {!attendance.breakStart ? (
              <button
                onClick={handleBreakStart}
                className="punch-btn break-start"
              >
                <FaCoffee />
                <span>Start Break</span>
              </button>
            ) : (
              <button
                onClick={handleBreakEnd}
                className="punch-btn break-end"
              >
                <FaCoffee />
                <span>End Break</span>
              </button>
            )}
            <button
              onClick={handlePunchOut}
              className="punch-btn punch-out"
            >
              <FaSignOutAlt />
              <span>Punch Out</span>
            </button>
          </>
        ) : (
          <div className="punch-complete">
            <span>Today's attendance completed</span>
          </div>
        )}
      </div>

      <div className="time-stamps">
        {attendance.punchInTime && (
          <div className="stamp">
            <span>In:</span> {attendance.punchInTime}
          </div>
        )}
        {attendance.breakStart && (
          <div className="stamp">
            <span>Break:</span> {attendance.breakStart}
          </div>
        )}
        {attendance.breakEnd && (
          <div className="stamp">
            <span>Back:</span> {attendance.breakEnd}
          </div>
        )}
        {attendance.punchOutTime && (
          <div className="stamp">
            <span>Out:</span> {attendance.punchOutTime}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPunch;