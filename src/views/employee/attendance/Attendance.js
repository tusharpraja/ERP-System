import React, { useState, useEffect } from 'react';
import './Attendance.css';
import { FaHistory, FaCalendarAlt } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';

const Attendance = () => {
  const today = new Date();
  
  const [activeTab, setActiveTab] = useState('history');
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dummyData = [
    { date: '2025-04-16', login: '09:10 AM', logout: '05:30 PM', breakStart: '01:00 PM', breakEnd: '01:30 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-04-15', login: '09:12 AM', logout: '05:28 PM', breakStart: '01:15 PM', breakEnd: '01:45 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-04-14', login: '09:00 AM', logout: '05:00 PM', breakStart: '12:30 PM', breakEnd: '01:00 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-04-13', login: '09:05 AM', logout: '05:20 PM', breakStart: '12:45 PM', breakEnd: '01:15 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-04-12', login: '09:15 AM', logout: '05:10 PM', breakStart: '01:10 PM', breakEnd: '01:40 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-04-11', login: '09:17 AM', logout: '05:25 PM', breakStart: '12:50 PM', breakEnd: '01:20 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-04-10', login: '09:30 AM', logout: '05:30 PM', breakStart: '01:05 PM', breakEnd: '01:35 PM', status: 'late', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-04-09', login: '09:45 AM', logout: '05:15 PM', breakStart: '01:25 PM', breakEnd: '01:55 PM', status: 'late', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-04-08', login: '09:00 AM', logout: '05:00 PM', breakStart: '12:40 PM', breakEnd: '01:10 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-04-07', login: '09:20 AM', logout: '05:40 PM', breakStart: '12:55 PM', breakEnd: '01:25 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-03-20', login: '09:05 AM', logout: '05:10 PM', breakStart: '12:45 PM', breakEnd: '01:15 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-03-19', login: '09:00 AM', logout: '05:00 PM', breakStart: '12:30 PM', breakEnd: '01:00 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
    { date: '2025-03-18', login: '09:10 AM', logout: '05:15 PM', breakStart: '01:00 PM', breakEnd: '01:30 PM', status: 'present', workingHours: '7.5 hrs', breakDuration: '30 mins' },
  ];

  const emptySummaryData = {
    totalWorkingDays: 0,
    presentDays: 0,
    absentDays: 0,
    lateDays: 0,
    leaveDays: 0,
    averageWorkingHours: '0 hrs'
  };

  // Default summary data for current month (April)
  const defaultSummaryData = {
    totalWorkingDays: 22,
    presentDays: 20,
    absentDays: 1,
    lateDays: 1,
    leaveDays: 1,
    averageWorkingHours: '7.5 hrs'
  };

  // Summary data for March
  const marchSummaryData = {
    totalWorkingDays: 21,
    presentDays: 18,
    absentDays: 2,
    lateDays: 1,
    leaveDays: 0,
    averageWorkingHours: '7.3 hrs'
  };

  const [summaryData, setSummaryData] = useState(defaultSummaryData);

  // Filter data based on selected month and year
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const filtered = dummyData.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.getMonth() === selectedMonth && itemDate.getFullYear() === selectedYear;
      });
      
      setFilteredData(filtered);
      
      // Update summary data based on selected month/year
      if (selectedMonth === 3 && selectedYear === 2025) { // April 2025
        setSummaryData(defaultSummaryData);
      } else if (selectedMonth === 2 && selectedYear === 2025) { // March 2025
        setSummaryData(marchSummaryData);
      } else {
        setSummaryData(emptySummaryData);
      }
      
      setLoading(false);
    }, 500);
  }, [selectedMonth, selectedYear]);

  return (
    <div className="attendance-container">
      <div className="attendance-tabs">
        <button 
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          <FaHistory /> History
        </button>
        <button 
          className={`tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
          onClick={() => setActiveTab('summary')}
        >
          <MdTimeline /> Summary
        </button>
      </div>

      {activeTab === 'history' && (
        <div className="attendance-history">
          <div className="month-selector">
            <select 
              value={selectedMonth} 
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="month-select"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {new Date(0, i).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="year-select"
            >
              {Array.from({ length: 5 }, (_, i) => {
                const year = today.getFullYear() - 2 + i;
                return <option key={year} value={year}>{year}</option>;
              })}
            </select>
          </div>

          <div className="table-responsive">
            {loading ? (
              <div className="loading-indicator">Loading...</div>
            ) : filteredData.length > 0 ? (
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Login</th>
                    <th>Logout</th>
                    <th>Break</th>
                    <th>Working Hours</th>
                    <th>Break Duration</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((entry, idx) => (
                    <tr key={idx}>
                      <td>{entry.date}</td>
                      <td>{entry.login}</td>
                      <td>{entry.logout}</td>
                      <td>{entry.breakStart} - {entry.breakEnd}</td>
                      <td>{entry.workingHours}</td>
                      <td>{entry.breakDuration}</td>
                      <td>
                        <span className={`status-badge ${entry.status}`}>
                          {entry.status === 'present' ? 'Present' : 
                           entry.status === 'late' ? 'Late' : 'Absent'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="no-data-message">
                <p>No attendance records found for {new Date(selectedYear, selectedMonth).toLocaleString('default', { month: 'long' })} {selectedYear}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'summary' && (
        <div className="attendance-summary">
          <div className="month-selector">
            <select 
              value={selectedMonth} 
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="month-select"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {new Date(0, i).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="year-select"
            >
              {Array.from({ length: 5 }, (_, i) => {
                const year = today.getFullYear() - 2 + i;
                return <option key={year} value={year}>{year}</option>;
              })}
            </select>
          </div>

          {loading ? (
            <div className="loading-indicator">Loading...</div>
          ) : summaryData.totalWorkingDays > 0 ? (
            <>
              <div className="summary-cards">
                <div className="summary-card total">
                  <h3>Total Working Days</h3>
                  <p>{summaryData.totalWorkingDays}</p>
                </div>
                <div className="summary-card present">
                  <h3>Present Days</h3>
                  <p>{summaryData.presentDays}</p>
                </div>
                <div className="summary-card absent">
                  <h3>Absent Days</h3>
                  <p>{summaryData.absentDays}</p>
                </div>
                <div className="summary-card late">
                  <h3>Late Days</h3>
                  <p>{summaryData.lateDays}</p>
                </div>
                <div className="summary-card leave">
                  <h3>Leave Days</h3>
                  <p>{summaryData.leaveDays}</p>
                </div>
                <div className="summary-card avg-hours">
                  <h3>Avg. Working Hours</h3>
                  <p>{summaryData.averageWorkingHours}</p>
                </div>
              </div>

              <div className="attendance-chart">
                <h3>Monthly Attendance Overview</h3>
                <div className="chart-placeholder">
                  <p>Attendance chart visualization would appear here</p>
                </div>
              </div>
            </>
          ) : (
            <div className="no-data-message">
              <p>No summary data available for {new Date(selectedYear, selectedMonth).toLocaleString('default', { month: 'long' })} {selectedYear}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Attendance;