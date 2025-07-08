import React, { useState, useEffect } from 'react';
import './TodayAttendance.css';

const TodayAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        employeeId: 'DEMO0001',
        name: 'Admin Admin',
        avatar: 'http://res.cloudinary.com/dv8c2pofx/image/upload/v1734088853/pln6cmnbiufewjfqlecz.gif',
        shift: 'Demo Shift',
        shiftTime: '09:30 - 18:30',
        status: 'Absent',
        loginTime: '--',
        logoutTime: '--',
        logCount: '--',
        grossLogin: '--',
        totalBreak: '--',
        netLogin: '--',
        breakCount: '--'
      },
      {
        id: 2,
        employeeId: 'DEMO0002',
        name: 'Hr Manager',
        avatar: 'http://res.cloudinary.com/dv8c2pofx/image/upload/v1741721783/dhc7rhowf682tyfq6l0g.jpg',
        shift: 'Demo Shift',
        shiftTime: '09:30 - 18:30',
        status: 'Absent',
        loginTime: '--',
        logoutTime: '--',
        logCount: '--',
        grossLogin: '--',
        totalBreak: '--',
        netLogin: '--',
        breakCount: '--'
      },
      {
        id: 3,
        employeeId: 'DEMO0003',
        name: 'Demo Manager',
        avatar: 'http://res.cloudinary.com/dv8c2pofx/image/upload/v1741182655/yie0goj65hk9e9egp6tx.png',
        shift: 'Demo Shift',
        shiftTime: '09:30 - 18:30',
        status: 'Absent',
        loginTime: '--',
        logoutTime: '--',
        logCount: '--',
        grossLogin: '--',
        totalBreak: '--',
        netLogin: '--',
        breakCount: '--'
      },
      {
        id: 4,
        employeeId: 'DEMO0004',
        name: 'Demo Emp',
        avatar: 'http://res.cloudinary.com/dv8c2pofx/image/upload/v1742800046/jpjrtn9pv1omzi1wgsn1.png',
        shift: 'Demo Shift',
        shiftTime: '09:30 - 18:30',
        status: 'On Leave',
        loginTime: 'PL / F',
        logoutTime: 'PL / F',
        logCount: 1,
        grossLogin: '--',
        totalBreak: '--',
        netLogin: '--',
        breakCount: '--'
      },
      // Add more mock data as needed
    ];

    setTimeout(() => {
      setAttendanceData(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Get current date in the format: Wednesday, 30 - 04 - 2025
  const getCurrentDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const today = new Date();
    const dayName = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    return `${dayName}, ${date} - ${month} - ${year}`;
  };

  // Filter data based on search term
  const filteredData = attendanceData.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get status badge class
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'Absent':
        return 'badge-danger';
      case 'On Leave':
        return 'badge-info';
      case 'Present':
        return 'badge-success';
      default:
        return 'badge-secondary';
    }
  };

  return (
    <div className="container-fluid pb-5">
      <div className="d-flex justify-content-between py-3">
        <div>
          <h5 className="my-auto" style={{ color: 'var(--secondaryDashColorDark)' }}>
            Today's Attendance
          </h5>
          <span className="p-0 fs-6 d-flex">
            <span className="m-0 p-0 fs-6 text-center" style={{ color: 'var(--secondaryDashColorDark)' }}>
              {getCurrentDate()}
            </span>
          </span>
        </div>
        <div>
          <div className="d-flex gap-2">
            <input 
              type="search" 
              className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder" 
              placeholder="Search by employee name" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '15rem' }}
            />
            <button className="btn d-flex align-items-center gap-2 shadow-sm rounded-2 bg-light text-dark border" 
              style={{ whiteSpace: 'pre', color: 'var(--primaryDashColorDark)' }}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" 
                className="text-success fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z"></path>
              </svg>
              <span className="d-none d-md-flex text-success">Export XLSX</span>
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex d-sm-none">
        <input 
          type="search" 
          className="form-control mb-3 rounded-0" 
          placeholder="Search by employee name" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <div className="scroller mb-2 rounded-2" 
          style={{ 
            height: 'fit-content', 
            maxHeight: '75vh', 
            overflow: 'auto', 
            position: 'relative', 
            border: 'var(--borderLight)' 
          }}>
          <table className="table mb-0 table-hover table-striped">
            <thead>
              <tr style={{ position: 'sticky', top: '0px', zIndex: 1 }}>
                <th style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Employee</th>
                <th style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Shift</th>
                <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Mark</th>
                <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Login Time</th>
                <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Logout Time</th>
                <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Log Count</th>
                <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Gross Login</th>
                <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Total Break</th>
                <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Net Login</th>
                <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Status</th>
                <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Break Count</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="11" className="text-center py-4">Loading attendance data...</td>
                </tr>
              ) : currentItems.length === 0 ? (
                <tr>
                  <td colSpan="11" className="text-center py-4">No employees found</td>
                </tr>
              ) : (
                currentItems.map((employee) => (
                  <tr key={employee.id} id={`attendance-row-${employee.id}`}>
                    <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      <div className="d-flex align-items-center gap-2">
                        <div style={{ height: '30px', width: '30px', backgroundColor: '#ccc', borderRadius: '50%', fontSize: '1rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {employee.avatar ? (
                            <img src={employee.avatar} alt={employee.name} style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                          ) : (
                            employee.name.split(' ').map(n => n[0]).join('').toUpperCase()
                          )}
                        </div>
                        <div>
                          <p style={{ fontSize: '0.8rem', margin: '0px' }}>{employee.employeeId}</p>
                          <p className="text-capitalize" style={{ fontSize: '1rem', margin: '0px' }}>{employee.name}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      <span className="py-1 d-flex align-items-center gap-2 badge-primary" style={{ width: 'fit-content' }}>
                        <span className="badge-warning">{employee.shift}</span>
                        {employee.shiftTime}
                      </span>
                    </td>
                    <td className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'red', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      <span className={`px-2 rounded-2 border ${getStatusBadgeClass(employee.status)}`} style={{ color: 'red' }}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      {employee.loginTime}
                    </td>
                    <td className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      {employee.logoutTime}
                    </td>
                    <td className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', position: 'relative' }}>
                      {employee.logCount}
                    </td>
                    <td className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      {employee.grossLogin}
                    </td>
                    <td className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      {employee.totalBreak}
                    </td>
                    <td className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      {employee.netLogin}
                    </td>
                    <td className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'red', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      <span className={`badge border ${getStatusBadgeClass(employee.status)}`} style={{ color: 'red' }}>
                        {employee.status === 'On Leave' ? 'On Leave' : 'Logout'}
                      </span>
                    </td>
                    <td className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                      {employee.breakCount}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="cntainer-fluid d-flex flex-column-reverse gap-4 py-2 px-2 rounded-2 gap-md-0 flex-md-row w-100 justify-content-between align-items-center my-2" style={{ background: 'var(--primaryDashMenuColor)' }}>
        <div className="d-flex flex-column-reverse gap-4 py-1 px-2 rounded-2 gap-md-0 flex-md-row w-100 justify-content-between align-items-center" style={{ background: 'var(--secondaryDashMenuColor)' }}>
          <div className="my-auto" style={{ color: 'black' }}>
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} results
          </div>
          <div className="d-flex align-items-center gap-1">
            <button 
              className="btn bg-light text-dark rounded-2 border shadow-sm mx-1 d-flex align-items-center gap-2" 
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="my-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <polyline fill="none" strokeWidth="2" points="9 6 15 12 9 18" transform="matrix(-1 0 0 1 24 0)"></polyline>
              </svg>
              <span className="d-none d-md-flex">Previous</span>
            </button>
            <div className="pagination d-flex flex-nowrap gap-2">
              {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
                <button 
                  key={index}
                  className={`border rounded-2 ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                  style={{ border: 'none', height: '2.3rem', width: '2.3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button 
              className="btn bg-light text-dark rounded-2 border shadow-sm mx-1 d-flex align-items-center gap-2"
              disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
              onClick={() => paginate(currentPage + 1)}
            >
              <span className="d-none d-md-flex">Next</span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="my-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <polyline fill="none" strokeWidth="2" points="9 6 15 12 9 18"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayAttendance;