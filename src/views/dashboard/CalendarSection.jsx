import React, { useState, useEffect } from 'react';
import './CalendarSection.module.css';

const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const changeMonth = (increment) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;
    
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const generateCalendarDays = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear);
    
    const days = [];
    
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="calendar-day empty-light"></div>
      );
    }

    for (let day = 1; day <= totalDays; day++) {
      const isToday = day === currentDate.getDate() && 
                      currentMonth === currentDate.getMonth() && 
                      currentYear === currentDate.getFullYear();
      
      const hasMarker = day === 18 || day === 21;

      days.push(
        <div 
          key={`day-${day}`} 
          className={`calendar-day containerHolidayPopover ${isToday ? 'current-dark rounded-2' : ''}`}
          style={{ position: 'relative' }} 
        >
          <span className="d-flex align-items-center" style={{ position: 'relative' }}>
            <span style={{
              fontWeight: hasMarker ? '600' : 'inherit',
              color: hasMarker ? 'rgb(220, 20, 60)' : 'inherit'
            }}>
              {day}
            </span>
            {hasMarker && (
              <div style={{
                height: '0.3rem',
                width: '0.3rem',
                background: 'rgb(220, 20, 60)',
                borderRadius: '50%',
                position: 'absolute',
                bottom: '0.5rem',
                right: '-0.8rem'
              }}></div>
            )}
          </span>
        </div>
      );
    }
    
    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="col-12 p-2">
      <div 
        className="px-3 shadow-sm rounded-2 d-flex flex-column gap-0 justify-content-between p-2" 
        style={{ 
          height: '18rem', 
          overflow: 'hidden', 
          color: 'black', 
          background: 'rgb(245, 245, 246)', 
          border: '1px solid rgba(223, 220, 220, 0.95)' 
        }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <span style={{ color: 'rgb(0, 122, 255)', fontWeight: '600', fontSize: '1rem' }}>
            {monthNames[currentMonth]} {currentYear}
          </span>
          <div className="d-flex align-items-center gap-2">
            <span 
              className="d-flex align-items-center py-1 badge-primary" 
              style={{ cursor: 'pointer' }}
              onClick={() => changeMonth(-1)}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
            </span>
            <span 
              className="d-flex align-items-center py-1 badge-primary" 
              style={{ cursor: 'pointer' }}
              onClick={() => changeMonth(1)}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </span>
          </div>
        </div>
        
        <div className="rounded-3 my-2" style={{ height: '100%', overflow: 'auto', background: 'var(--secondaryDashMenuColor)' }}>
          <div>
            <div className="calendar-header" style={{ color: 'black', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
              {dayNames.map(day => (
                <div key={day} className="calendar-day" style={{ color: 'black' }}>{day}</div>
              ))}
            </div>
            
            <div className="calendar-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
              {generateCalendarDays()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
