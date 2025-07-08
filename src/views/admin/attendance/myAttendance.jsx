import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faClock, 
  faAdjust, 
  faTimesCircle, 
  faUmbrellaBeach, 
  faCalendarDay,
  faSignOutAlt,
  faSyncAlt,
  faChevronLeft,
  faChevronRight,
  faSort,
  faSortUp,
  faSortDown,
  faCalendarTimes
} from '@fortawesome/free-solid-svg-icons';
import './myAttendance.css';

const myAttendance = () => {
  // Sample data for the attendance
  const attendanceData = [
    { date: '01 Apr', day: 'Tuesday', shift: 'Demo Shift: 09:30 → 18:30', status: 'half-day', 
      login: '11:51 AM', logout: '9:03 PM', logs: 4, gross: '2 Hrs 45 Min', breaks: 1, 
      totalBreak: '6 Hrs 29 Min', net: '0 Hrs 0 Min', action: 'logout' },
    
    { date: '02 Apr', day: 'Wednesday', shift: 'Demo Shift: 09:30 → 18:30', status: 'on-time', 
      login: '9:29 AM', logout: '3:12 PM', logs: 3, gross: '0 Hrs 4 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 4 Min', action: 'logout' },
    
    { date: '03 Apr', day: 'Thursday', shift: 'Demo Shift: 09:30 → 18:30', status: 'absent', 
      login: '-', logout: '-', logs: 0, gross: '0 Hrs 0 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 0 Min', action: 'logout' },
    
    { date: '04 Apr', day: 'Friday', shift: 'Demo Shift: 09:30 → 18:30', status: 'absent', 
      login: '9:39 PM', logout: '9:39 PM', logs: 1, gross: '0 Hrs 0 Min', breaks: 1, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 0 Min', action: 'logout' },
    
    { date: '05 Apr', day: 'Saturday', shift: 'Demo Shift: 09:30 → 18:30', status: 'absent', 
      login: '-', logout: '-', logs: 0, gross: '0 Hrs 0 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 0 Min', action: 'logout' },
    
    { date: '06 Apr', day: 'Sunday', shift: 'Demo Shift: 09:30 → 18:30', status: 'week-off', 
      login: 'Week Off', logout: 'Week Off', logs: 1, gross: '0 Hrs 0 Min', breaks: 1, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 0 Min', action: 'week-off' },
    
    { date: '07 Apr', day: 'Monday', shift: 'Demo Shift: 09:30 → 18:30', status: 'half-day', 
      login: '2:13 PM', logout: '2:26 PM', logs: 2, gross: '0 Hrs 1 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 1 Min', action: 'logout' },
    
    { date: '08 Apr', day: 'Tuesday', shift: 'Demo Shift: 09:30 → 18:30', status: 'half-day', 
      login: '1:23 PM', logout: '12:00 AM', logs: 3, gross: '10 Hrs 32 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '10 Hrs 32 Min', action: 'logout' },
    
    { date: '09 Apr', day: 'Wednesday', shift: 'Demo Shift: 09:30 → 18:30', status: 'absent', 
      login: '3:51 PM', logout: '12:00 AM', logs: 1, gross: '8 Hrs 8 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '8 Hrs 8 Min', action: 'logout' },
    
    { date: '10 Apr', day: 'Thursday', shift: 'Demo Shift: 09:30 → 18:30', status: 'half-day', 
      login: '3:18 PM', logout: '3:24 PM', logs: 1, gross: '0 Hrs 7 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 7 Min', action: 'logout' },
    
    { date: '11 Apr', day: 'Friday', shift: 'Demo Shift: 09:30 → 18:30', status: 'absent', 
      login: '-', logout: '-', logs: 0, gross: '0 Hrs 0 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 0 Min', action: 'logout' },
    
    { date: '12 Apr', day: 'Saturday', shift: 'Demo Shift: 09:30 → 18:30', status: 'week-off', 
      login: 'Week Off', logout: 'Week Off', logs: 0, gross: '0 Hrs 0 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 0 Min', action: 'week-off' },
    
    { date: '13 Apr', day: 'Sunday', shift: 'Demo Shift: 09:30 → 18:30', status: 'week-off', 
      login: 'Week Off', logout: 'Week Off', logs: 0, gross: '0 Hrs 0 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 0 Min', action: 'week-off' },
    
    { date: '14 Apr', day: 'Monday', shift: 'Demo Shift: 09:30 → 18:30', status: 'on-time', 
      login: '9:28 AM', logout: '6:35 PM', logs: 2, gross: '9 Hrs 7 Min', breaks: 1, 
      totalBreak: '0 Hrs 45 Min', net: '8 Hrs 22 Min', action: 'logout' },
    
    { date: '15 Apr', day: 'Tuesday', shift: 'Demo Shift: 09:30 → 18:30', status: 'on-time', 
      login: '9:30 AM', logout: '6:30 PM', logs: 2, gross: '9 Hrs 0 Min', breaks: 1, 
      totalBreak: '1 Hrs 0 Min', net: '8 Hrs 0 Min', action: 'logout' },
    
    { date: '20 Apr', day: 'Sunday', shift: 'Demo Shift: 09:30 → 18:30', status: 'holiday', 
      login: 'Holiday', logout: 'Holiday', logs: 0, gross: '0 Hrs 0 Min', breaks: 0, 
      totalBreak: '0 Hrs 0 Min', net: '0 Hrs 0 Min', action: 'holiday' }
  ];

  // State variables
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentSort, setCurrentSort] = useState({ column: 'date', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('3');
  const rowsPerPage = 10;

  // Filter data based on current filter
  const filterData = (data) => {
    if (currentFilter === 'all') return data;
    
    return data.filter(item => {
      if (currentFilter === 'present') return item.status === 'on-time' || item.status === 'late';
      if (currentFilter === 'absent') return item.status === 'absent';
      if (currentFilter === 'half-day') return item.status === 'half-day';
      if (currentFilter === 'week-off') return item.status === 'week-off';
      if (currentFilter === 'holiday') return item.status === 'holiday';
      return true;
    });
  };

  // Sort data based on current sort
  const sortData = (data) => {
    return [...data].sort((a, b) => {
      const column = currentSort.column;
      const direction = currentSort.direction === 'asc' ? 1 : -1;
      
      // Special sorting for different columns
      if (column === 'date') {
        return direction * compareDates(a.date, b.date);
      } else if (column === 'login' || column === 'logout') {
        return direction * compareTimes(a[column], b[column]);
      } else if (column === 'logs' || column === 'breaks') {
        return direction * (a[column] - b[column]);
      } else if (column === 'gross' || column === 'total-break' || column === 'net') {
        return direction * compareDurations(a[column], b[column]);
      } else {
        // Default string comparison
        return direction * a[column].localeCompare(b[column]);
      }
    });
  };

  // Comparison functions
  const compareDates = (a, b) => {
    const monthOrder = {
      "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
      "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
    };
    
    const aParts = a.split(" ");
    const bParts = b.split(" ");
    
    // Compare months first
    if (monthOrder[aParts[1]] !== monthOrder[bParts[1]]) {
      return monthOrder[aParts[1]] - monthOrder[bParts[1]];
    }
    
    // If same month, compare days
    return parseInt(aParts[0]) - parseInt(bParts[0]);
  };
  
  const compareTimes = (a, b) => {
    // Handle special values
    if (a === "Week Off" || a === "Holiday" || a === "-") a = "23:59";
    if (b === "Week Off" || b === "Holiday" || b === "-") b = "23:59";
    
    const parseTime = (timeStr) => {
      const [time, period] = timeStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);
      
      if (period === "PM" && hours !== 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;
      
      return hours * 60 + minutes;
    };
    
    return parseTime(a) - parseTime(b);
  };
  
  const compareDurations = (a, b) => {
    const parseDuration = (duration) => {
      const parts = duration.split(" ");
      const hours = parseInt(parts[0]) || 0;
      const minutes = parseInt(parts[3]) || 0;
      return hours * 60 + minutes;
    };
    
    return parseDuration(a) - parseDuration(b);
  };

  // Paginate data
  const paginateData = (data) => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  };

  // Get filtered, sorted, and paginated data
  const getDisplayData = () => {
    let filteredData = filterData(attendanceData);
    filteredData = sortData(filteredData);
    return paginateData(filteredData);
  };

  // Handle sort column click
  const handleSort = (column) => {
    setCurrentSort(prev => ({
      column,
      direction: prev.column === column 
        ? prev.direction === 'asc' ? 'desc' : 'asc'
        : 'asc'
    }));
  };

  // Handle filter button click
  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get sort icon for a column
  const getSortIcon = (column) => {
    if (currentSort.column !== column) return <FontAwesomeIcon icon={faSort} className="sort-icon" />;
    
    return currentSort.direction === 'asc' 
      ? <FontAwesomeIcon icon={faSortUp} className="sort-icon" />
      : <FontAwesomeIcon icon={faSortDown} className="sort-icon" />;
  };

  // Get status icon and class
  const getStatusInfo = (status) => {
    switch(status) {
      case 'on-time':
        return { 
          class: 'on-time',
          icon: faCheckCircle,
          text: 'On Time'
        };
      case 'late':
        return { 
          class: 'late',
          icon: faClock,
          text: 'Late'
        };
      case 'half-day':
        return { 
          class: 'half-day',
          icon: faAdjust,
          text: 'Half Day'
        };
      case 'absent':
        return { 
          class: 'absent',
          icon: faTimesCircle,
          text: 'Absent'
        };
      case 'week-off':
        return { 
          class: '',
          icon: faUmbrellaBeach,
          text: 'Week Off'
        };
      case 'holiday':
        return { 
          class: '',
          icon: faCalendarDay,
          text: 'Holiday'
        };
      default:
        return { 
          class: '',
          icon: faCheckCircle,
          text: status
        };
    }
  };

  // Get action button info
  const getActionInfo = (action) => {
    switch(action) {
      case 'logout':
        return { 
          class: 'logout',
          icon: faSignOutAlt,
          text: 'Logout'
        };
      case 'week-off':
        return { 
          class: 'week-off',
          icon: faUmbrellaBeach,
          text: 'Week Off'
        };
      case 'holiday':
        return { 
          class: 'holiday',
          icon: faCalendarDay,
          text: 'Holiday'
        };
      default:
        return { 
          class: '',
          icon: faSignOutAlt,
          text: action
        };
    }
  };

  // Calculate total items for pagination
  const totalItems = filterData(attendanceData).length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const startItem = (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="card-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div>
          <h4>Attendance List</h4>
          <small>You can check and manage your attendance here</small>
        </div>
        <div className="controls">
          <button className="holiday">You are on Holiday</button>
          <select 
            id="yearSelect" 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          <select 
            id="monthSelect" 
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
          <button id="refreshBtn">
            <FontAwesomeIcon icon={faSyncAlt} /> Refresh
          </button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="stats">
        <div className="stat-card">
          <h3>Working Days</h3>
          <p>22</p>
        </div>
        <div className="stat-card">
          <h3>Present</h3>
          <p>14</p>
        </div>
        <div className="stat-card">
          <h3>Absent</h3>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h3>Half Days</h3>
          <p>4</p>
        </div>
        <div className="stat-card">
          <h3>Leaves Taken</h3>
          <p>1</p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="filters">
        <button 
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'present' ? 'active' : ''}`}
          onClick={() => handleFilterClick('present')}
        >
          Present
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'absent' ? 'active' : ''}`}
          onClick={() => handleFilterClick('absent')}
        >
          Absent
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'half-day' ? 'active' : ''}`}
          onClick={() => handleFilterClick('half-day')}
        >
          Half Day
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'week-off' ? 'active' : ''}`}
          onClick={() => handleFilterClick('week-off')}
        >
          Week Off
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'holiday' ? 'active' : ''}`}
          onClick={() => handleFilterClick('holiday')}
        >
          Holiday
        </button>
      </div>
      
      {/* Attendance Table */}
      <div className="table-container">
        <table id="attendanceTable">
          <thead>
            <tr>
              <th onClick={() => handleSort('date')}>
                Date {getSortIcon('date')}
              </th>
              <th onClick={() => handleSort('day')}>
                Day {getSortIcon('day')}
              </th>
              <th onClick={() => handleSort('shift')}>
                Shift {getSortIcon('shift')}
              </th>
              <th onClick={() => handleSort('status')}>
                Status {getSortIcon('status')}
              </th>
              <th onClick={() => handleSort('login')}>
                Login Time {getSortIcon('login')}
              </th>
              <th onClick={() => handleSort('logout')}>
                Logout Time {getSortIcon('logout')}
              </th>
              <th onClick={() => handleSort('logs')}>
                Logs {getSortIcon('logs')}
              </th>
              <th onClick={() => handleSort('gross')}>
                Gross Login {getSortIcon('gross')}
              </th>
              <th onClick={() => handleSort('breaks')}>
                Breaks {getSortIcon('breaks')}
              </th>
              <th onClick={() => handleSort('total-break')}>
                Total Break {getSortIcon('total-break')}
              </th>
              <th onClick={() => handleSort('net')}>
                Net Login {getSortIcon('net')}
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {getDisplayData().length > 0 ? (
              getDisplayData().map((item, index) => {
                const statusInfo = getStatusInfo(item.status);
                const actionInfo = getActionInfo(item.action);
                
                return (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.day}</td>
                    <td><span className="shift-info">{item.shift}</span></td>
                    <td className={statusInfo.class}>
                      <FontAwesomeIcon icon={statusInfo.icon} className="status-icon" />
                      {statusInfo.text}
                    </td>
                    <td>{item.login}</td>
                    <td>{item.logout}</td>
                    <td>{item.logs}</td>
                    <td>{item.gross}</td>
                    <td>{item.breaks}</td>
                    <td>{item.totalBreak}</td>
                    <td>{item.net}</td>
                    <td>
                      <button className={`status-btn ${actionInfo.class}`}>
                        <FontAwesomeIcon icon={actionInfo.icon} className="status-icon" />
                        {actionInfo.text}
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="12" className="no-records">
                  <FontAwesomeIcon icon={faCalendarTimes} style={{ fontSize: '24px', marginBottom: '10px' }} />
                  <p>No attendance records found for the selected criteria</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="pagination">
        <div className="page-info">
          Showing {startItem} to {endItem} of {totalItems} entries
        </div>
        <div className="page-buttons">
          <button 
            className="page-btn" 
            id="prevPage" 
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} /> Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`page-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="page-btn" 
            id="nextPage" 
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default myAttendance;
