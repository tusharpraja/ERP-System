import React, { useState, useEffect } from 'react';
import './TimelogSection.module.css';

const TimeLogSection = () => {
  const [time, setTime] = useState('12:10:05');
  const [date, setDate] = useState('22 April 2025');
  const [logType, setLogType] = useState('monthly');
  const [timeOfDay, setTimeOfDay] = useState('day'); // sunrise, day, sunset, night

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      setTime(now.toLocaleTimeString());
      setDate(now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }));
      
      // Determine time of day for icon selection
      if (hours >= 5 && hours < 8) {
        setTimeOfDay('sunrise');
      } else if (hours >= 8 && hours < 17) {
        setTimeOfDay('day');
      } else if (hours >= 17 && hours < 20) {
        setTimeOfDay('sunset');
      } else {
        setTimeOfDay('night');
      }
    };

    const interval = setInterval(updateTime, 1000);
    updateTime(); // Initial call

    return () => clearInterval(interval);
  }, []);

  const handleLogTypeChange = (e) => {
    setLogType(e.target.value);
  };

  // Get celestial icon based on time of day
  const getCelestialIcon = () => {
    switch(timeOfDay) {
      case 'sunrise':
        return (
          <svg 
            className="rotate"
            stroke="#FF8C00" 
            fill="#FF8C00" 
            strokeWidth="0" 
            viewBox="0 0 512 512" 
            height="3em" 
            width="3em" 
            style={{ minWidth: '3em' }}
          >
            <path 
              fill="none" 
              strokeLinecap="round" 
              strokeMiterlimit="10" 
              strokeWidth="32" 
              d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            ></path>
            <circle cx="256" cy="256" r="80" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"></circle>
            <path d="M256 180V96" stroke="#FF8C00" strokeWidth="12" />
          </svg>
        );
      case 'day':
        return (
          <svg 
            className="rotate"
            stroke="orange" 
            fill="orange" 
            strokeWidth="0" 
            viewBox="0 0 512 512" 
            height="3em" 
            width="3em" 
            style={{ minWidth: '3em' }}
          >
            <path 
              fill="none" 
              strokeLinecap="round" 
              strokeMiterlimit="10" 
              strokeWidth="32" 
              d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            ></path>
            <circle cx="256" cy="256" r="80" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"></circle>
          </svg>
        );
      case 'sunset':
        return (
          <svg 
            className="rotate"
            stroke="#FF4500" 
            fill="#FF4500" 
            strokeWidth="0" 
            viewBox="0 0 512 512" 
            height="3em" 
            width="3em" 
            style={{ minWidth: '3em' }}
          >
            <path 
              fill="none" 
              strokeLinecap="round" 
              strokeMiterlimit="10" 
              strokeWidth="32" 
              d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            ></path>
            <circle cx="256" cy="256" r="80" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"></circle>
            <path d="M256 416V336" stroke="#FF4500" strokeWidth="12" />
          </svg>
        );
      case 'night':
        return (
          <svg 
            className="rotate"
            stroke="#1E3A8A" 
            fill="#1E3A8A" 
            strokeWidth="0" 
            viewBox="0 0 512 512" 
            height="3em" 
            width="3em" 
            style={{ minWidth: '3em' }}
          >
            <path
              d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        );
      default:
        return (
          <svg 
            className="rotate"
            stroke="currentColor" 
            fill="currentColor" 
            strokeWidth="0" 
            viewBox="0 0 512 512" 
            height="3em" 
            width="3em" 
            style={{ minWidth: '3em' }}
          >
            <path 
              fill="none" 
              strokeLinecap="round" 
              strokeMiterlimit="10" 
              strokeWidth="32" 
              d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            ></path>
            <circle cx="256" cy="256" r="80" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"></circle>
          </svg>
        );
    }
  };

  const isNightTime = timeOfDay === 'night';
  const isAM = new Date().getHours() < 12;

  return (
    <div style={{ 
      maxWidth: '600px',
      height: '300px',
      width: '400px',
      margin: '0 auto',
      fontSize: 'clamp(12px, 1.5vw, 16px)' // Responsive base font size
    }}>
      <div 
        className="p-2 rounded-2 shadow-sm justify-content-between d-flex flex-column h-100" 
        style={{ 
          background: 'linear-gradient(0deg, rgb(244, 244, 244) 0%, rgb(234, 246, 255) 100%) center center / cover no-repeat', 
          border: '1px solid rgba(223, 220, 220, 0.95)',
          boxSizing: 'border-box'
        }}
      >
        {/* Top Row - Date and Time */}
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between px-2 gap-2">
          <div className="d-flex align-items-center gap-2">
            {getCelestialIcon()}
            <span style={{ fontWeight: '600', fontSize: '1.2em' }}>{date}</span>
          </div>
          
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex flex-column text-center text-sm-start">
              <span style={{ fontSize: '2em' }}>{time}</span>
              <span style={{ fontSize: '0.9em' }}>Real time insight</span>
            </div>
            {/* <div className="d-flex flex-column rounded-1 overflow-hidden">
              <span className={`py-1 px-2 ${!isAM ? 'bg-light' : 'bg-secondary bg-opacity-25'}`}>PM</span>
              <span className={`py-1 px-2 ${isAM ? 'bg-light' : 'bg-secondary bg-opacity-25'}`}>AM</span>
            </div> */}
          </div>
        </div>

        {/* Middle Section - Log Selector */}
        <div className="d-flex flex-column gap-2 mt-3">
          <select 
            className="form-select bg-white border-0 py-1 w-auto" 
            value={logType}
            onChange={handleLogTypeChange}
            style={{ fontSize: '1em', maxWidth: '100%' }}
          >
            <option value="monthly">This Month Log</option>
            <option value="yearly">This Year Log</option>
          </select>
          
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-sm-start">
            <div style={{ 
              backgroundColor: '#d8ebff', 
              color: '#0072ff', 
              padding: '0.5rem 0.75rem', 
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.875rem'
            }}>
              <strong>Gross:</strong> {logType === 'monthly' ? '34 Hrs 4 Min' : '84 Hrs 24 Min'}
            </div>
            <div style={{ 
              backgroundColor: '#fffeca', 
              color: '#857300', 
              padding: '0.5rem 0.75rem', 
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.875rem'
            }}>
              <strong>Break:</strong> {logType === 'monthly' ? '0 Hrs 0 Min' : '14 Hrs 49 Min'}
            </div>
            <div style={{ 
              backgroundColor: '#d6ffd6', 
              color: '#1a801a', 
              padding: '0.5rem 0.75rem', 
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.875rem'
            }}>
              <strong>Net:</strong> {logType === 'monthly' ? '34 Hrs 4 Min' : '69 Hrs 35 Min'}
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-auto">
          <button 
            className="btn w-100" 
            disabled
            style={{ 
              fontSize: '1em',
              padding: '0.5em',
              backgroundColor: '#fbbc57',
              color: 'white'
            }}
          >
            You are on holiday
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeLogSection;