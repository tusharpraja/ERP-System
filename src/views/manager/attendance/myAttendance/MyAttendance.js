import React, { useState, useEffect } from 'react';
import './MyAttendance.css';

const MyAttendance = () => {
  const [breakTime, setBreakTime] = useState(0);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakStartTime, setBreakStartTime] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate break time if on break
  useEffect(() => {
    let interval;
    if (isOnBreak && breakStartTime) {
      interval = setInterval(() => {
        const now = new Date();
        const diff = now - breakStartTime;
        setBreakTime(Math.floor(diff / 1000)); // in seconds
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOnBreak, breakStartTime]);

  const toggleBreak = () => {
    if (isOnBreak) {
      // End break
      setIsOnBreak(false);
      // Here you would typically send the break data to your backend
      console.log(`Break ended after ${breakTime} seconds`);
      setBreakTime(0);
    } else {
      // Start break
      setIsOnBreak(true);
      setBreakStartTime(new Date());
    }
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Sample attendance data with status colors
  const attendanceData = [
    {
      id: 1,
      date: '01',
      day: 'Thursday',
      shift: '09:30 - 18:30',
      mark: 'On Time',
      loginTime: '7:43 AM',
      logoutTime: '7:44 PM',
      logs: 1,
      grossLogin: '12 Hrs 1 Min',
      breaks: 0,
      totalBreak: '0 Hrs 0 Min',
      netLogin: '12 Hrs 1 Min',
      status: 'Holiday',
      statusColor: 'var(--holiday-color)'
    },
    {
      id: 2,
      date: '02',
      day: 'Friday',
      shift: '09:30 - 18:30',
      mark: 'Absent',
      loginTime: '--',
      logoutTime: '--',
      logs: 0,
      grossLogin: '0 Hrs 0 Min',
      breaks: 0,
      totalBreak: '0 Hrs 0 Min',
      netLogin: '0 Hrs 0 Min',
      status: 'Logout',
      statusColor: 'var(--absent-color)'
    },
    {
      id: 3,
      date: '03',
      day: 'Saturday',
      shift: '09:30 - 18:30',
      mark: 'Absent',
      loginTime: '--',
      logoutTime: '--',
      logs: 0,
      grossLogin: '0 Hrs 0 Min',
      breaks: 0,
      totalBreak: '0 Hrs 0 Min',
      netLogin: '0 Hrs 0 Min',
      status: 'Logout',
      statusColor: 'var(--absent-color)'
    },
    {
      id: 4,
      date: '04',
      day: 'Sunday',
      shift: '09:30 - 18:30',
      mark: 'Week Off',
      loginTime: 'Week Off',
      logoutTime: 'Week Off',
      logs: 1,
      grossLogin: '0 Hrs 0 Min',
      breaks: 1,
      totalBreak: '0 Hrs 0 Min',
      netLogin: '0 Hrs 0 Min',
      status: 'Week Off',
      statusColor: 'var(--weekoff-color)'
    },
    {
      id: 5,
      date: '05',
      day: 'Monday',
      shift: '09:30 - 18:30',
      mark: 'Half Day',
      loginTime: '11:12 AM',
      logoutTime: '--',
      logs: 1,
      grossLogin: '0 Hrs 0 Min',
      breaks: 0,
      totalBreak: '0 Hrs 0 Min',
      netLogin: '0 Hrs 0 Min',
      status: 'Login',
      statusColor: 'var(--halfday-color)'
    }
  ];

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="mainbar-grid">
      <div className="empSidebar d-flex flex-column pb-3">
        <div className="d-flex flex-column container-fluid gap-2">
          <div className="d-flex align-items-start align-items-md-center gap-2 justify-content-between flex-column flex-md-row">
            <div className="my-auto mt-2">
              <div className="d-flex align-items-center gap-2">
                <h5 className="m-0 p-0 text-capitalize attendance-title">Attendance List</h5>
              </div>
              <p className="m-0 attendance-subtitle">You can check your attendance here.</p>
            </div>
            <div className="d-flex gap-3">
              <div className="row gap-2">
                <div className="d-flex gap-2 align-items-center">
                  <button 
                    className={`btn w-100 rounded-2 d-flex align-items-center justify-content-center gap-2 break-btn ${isOnBreak ? 'btn-danger' : 'btn-warning'}`}
                    onClick={toggleBreak}
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M208,80H32a8,8,0,0,0-8,8v48a96.3,96.3,0,0,0,32.54,72H32a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16H183.46a96.59,96.59,0,0,0,27-40.09A40,40,0,0,0,248,128v-8A40,40,0,0,0,208,80Zm24,48a24,24,0,0,1-17.2,23,95.78,95.78,0,0,0,1.2-15V97.38A24,24,0,0,1,232,120ZM112,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm32,0V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0ZM80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Z"></path>
                    </svg>
                    {isOnBreak ? `Break: ${formatTime(breakTime)}` : 'Take a Break'}
                  </button>
                  <button className="btn btn-primary w-100 clockout-btn">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M392 432H120a40 40 0 01-40-40V120a40 40 0 0140-40h272a40 40 0 0140 40v272a40 40 0 01-40 40z"></path>
                    </svg>
                    Clock Out
                  </button>
                </div>
              </div>
              <div>
                <select className="form-select my-0 rounded-2 bg-light text-dark border dark-placeholder" id="year">
                  <option value="2025">2025</option>
                </select>
              </div>
              <div>
                <select className="form-select my-0 rounded-2 bg-light text-dark border dark-placeholder" id="month">
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="scroller mb-2 rounded-2">
              <table className="table mb-0 table-hover">
                <thead>
                  <tr>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"></path>
                      </svg>
                      Date | Day
                    </th>
                    <th className="table-header">Shift</th>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M6 12v-2a6 6 0 1 1 12 0v2"></path>
                        <path d="M15 9l3 3l3 -3"></path>
                      </svg>
                      Mark
                    </th>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                      </svg>
                      Login Time
                    </th>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                      </svg>
                      Logout Time
                    </th>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.618 1.76a.75.75 0 0 1 .623.859L9.46 7.5h6.48l.82-5.118a.75.75 0 0 1 1.48.237L17.46 7.5h3.79a.75.75 0 0 1 0 1.5h-4.03l-.96 6h3.99a.75.75 0 0 1 0 1.5h-4.23l-.78 4.869a.75.75 0 0 1-1.48-.237l.74-4.632H8.02l-.78 4.869a.75.75 0 0 1-1.48-.237L6.5 16.5H2.745a.75.75 0 0 1 0-1.5H6.74l.96-6H3.75a.75.75 0 0 1 0-1.5h4.19l.82-5.118a.75.75 0 0 1 .858-.622ZM14.741 15l.96-6H9.22l-.96 6Z"></path>
                      </svg>
                      Logs
                    </th>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 456c-110.3 0-200-89.7-200-200 0-54.8 21.7-105.9 61.2-144 6.4-6.2 16.6-6 22.7.4 6.2 6.4 6 16.6-.4 22.7-33.1 32-51.3 74.9-51.3 120.9 0 92.5 75.3 167.8 167.8 167.8S423.8 348.5 423.8 256c0-87.1-66.7-159-151.8-167.1v62.6c0 8.9-7.2 16.1-16.1 16.1s-16.1-7.2-16.1-16.1V72.1c0-8.9 7.2-16.1 16.1-16.1 110.3 0 200 89.7 200 200S366.3 456 256 456z"></path>
                        <path d="M175.9 161.9l99.5 71.5c13.5 9.7 16.7 28.5 7,42s-28.5 16.7-42,7c-2.8-2-5.2-4.4-7-7l-71.5-99.5c-3.2-4.5-2.2-10.8 2.3-14 3.6-2.6 8.3-2.4 11.7,0z"></path>
                      </svg>
                      Gross Login
                    </th>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.618 1.76a.75.75 0 0 1 .623.859L9.46 7.5h6.48l.82-5.118a.75.75 0 0 1 1.48.237L17.46 7.5h3.79a.75.75 0 0 1 0 1.5h-4.03l-.96 6h3.99a.75.75 0 0 1 0 1.5h-4.23l-.78 4.869a.75.75 0 0 1-1.48-.237l.74-4.632H8.02l-.78 4.869a.75.75 0 0 1-1.48-.237L6.5 16.5H2.745a.75.75 0 0 1 0-1.5H6.74l.96-6H3.75a.75.75 0 0 1 0-1.5h4.19l.82-5.118a.75.75 0 0 1 .858-.622ZM14.741 15l.96-6H9.22l-.96 6Z"></path>
                      </svg>
                      Breaks
                    </th>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M232.9 371.6c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1c0-12.7-10.4-23.1-23.1-23.1s-23.1 10.3-23.1 23.1zm0-323.6v92.4h46.2V96.1c78.3 11.3 138.7 78.3 138.7 159.9 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-38.8 13.6-74.4 36.5-102.2L256 279.1l32.6-32.6L131.4 89.4v.5C80.8 127.7 48 187.8 48 256c0 114.9 92.9 208 208 208 114.9 0 208-93.1 208-208S370.9 48 256 48h-23.1zm161.8 208c0-12.7-10.4-23.1-23.1-23.1-12.7 0-23.1 10.4-23.1 23.1s10.4 23.1 23.1 23.1c12.7 0 23.1-10.4 23.1-23.1zm-277.4 0c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1-10.4-23.1-23.1-23.1-23.1 10.4-23.1 23.1z"></path>
                      </svg>
                      Total Break
                    </th>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                      </svg>
                      Net Login
                    </th>
                    <th className="table-header">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" strokeWidth="2" d="M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M12,10 L12,18 M12,6 L12,8"></path>
                      </svg>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((row) => (
                    <tr key={row.id} className="attendance-row">
                      <td className="text-center date-cell">
                        <div className="d-flex gap-2 align-items-center">
                          <span className="date-btn">{row.date}</span>
                          <span className="day-btn">{row.day}</span>
                        </div>
                      </td>
                      <td className="shift-cell">
                        <span className="badge-primary py-1 px-2 d-flex align-items-center gap-2">
                          <span className="badge-warning">Demo Shift :</span>
                          <span>09:30 </span>
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                          </svg>
                          <span>18:30</span>
                        </span>
                      </td>
                      <td className="mark-cell">
                        <span className={`badge ${row.mark === 'On Time' ? 'badge-success' : row.mark === 'Absent' ? 'badge-danger' : 'badge-primary'} border`}>
                          {row.mark}
                        </span>
                      </td>
                      <td className="login-time-cell text-capitalize">{row.loginTime}</td>
                      <td className="logout-time-cell">{row.logoutTime}</td>
                      <td className="logs-cell text-uppercase">
                        <div style={{ position: 'relative' }}>
                          {row.logs}
                          <div className="position-absolute bg-white rounded-3 p-0 m-0 logs-tooltip"></div>
                        </div>
                      </td>
                      <td className="gross-login-cell">{row.grossLogin}</td>
                      <td className="breaks-cell position-relative">
                        <div className="fs-6 gap-2 d-flex justify-content-start align-items-center">
                          {row.breaks}
                          <div className="position-absolute bg-white rounded-3 p-0 m-0 breaks-tooltip"></div>
                        </div>
                      </td>
                      <td className="total-break-cell">{row.totalBreak}</td>
                      <td className="net-login-cell">{row.netLogin}</td>
                      <td className="status-cell">
                        <span className="badge border" style={{ backgroundColor: row.statusColor }}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="HrPannelFooter bg-dark w-100 text-white">
        <div className="d-flex justify-content-center align-items-center gap-5 p-2 footer-content">
          <span className="d-none d-md-flex">
            <span className="text-capitalize">{formattedDate}, {formattedTime}</span>
          </span>
          <span className="d-flex align-items-center gap-2">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
            <span className="d-none d-md-flex">Connected</span>
          </span>
          <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
            </svg>
            Chrome
          </span>
          <span title="IP Address" className="d-flex align-items-center gap-1">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-8a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h8zm-4 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1 -12h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" strokeWidth="0" fill="currentColor"></path>
            </svg>
            122.161.49.223
          </span>
          <div>Unable to retrieve your location.</div>
        </div>
      </div>
    </div>
  );
};

export default MyAttendance;