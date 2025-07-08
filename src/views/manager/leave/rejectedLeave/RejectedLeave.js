import React, { useState } from 'react';
import { FaSearch, FaCalendarCheck, FaFilePdf } from 'react-icons/fa';
 
const RejectedLeave = () => {
  const initialLeaves = [
    {
      id: 1,
      empId: 'EMP001',
      employee: 'John Doe',
      leaveType: 'Sick Leave',
      from: '2023-06-15',
      to: '2023-06-17',
      days: 3,
      status: 'rejected',
      approvedOn: '',
      approvedBy: 'Manager Name',
      reason: 'High fever and doctor advised rest',
    },
    {
      id: 2,
      empId: 'EMP002',
      employee: 'Jane Smith',
      leaveType: 'Casual Leave',
      from: '2023-06-20',
      to: '2023-06-21',
      days: 2,
      status: 'rejected',
      approvedOn: '',
      approvedBy: 'Manager Name',
      reason: 'Family function',
    },
    {
      id: 3,
      empId: 'EMP003',
      employee: 'Robert Johnson',
      leaveType: 'Paid Leave',
      from: '2023-06-25',
      to: '2023-06-30',
      days: 6,
      status: 'rejected',
      approvedOn: '',
      approvedBy: 'HR Manager',
      reason: 'Vacation with family',
    },
  ];
 
  const [leaves, setLeaves] = useState(initialLeaves);
  const [searchTerm, setSearchTerm] = useState('');
 
  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
 
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === '') {
      setLeaves(initialLeaves);
    } else {
      const filtered = initialLeaves.filter(
        (leave) =>
          leave.employee.toLowerCase().includes(term) ||
          leave.empId.toLowerCase().includes(term) ||
          leave.leaveType.toLowerCase().includes(term) ||
          leave.reason.toLowerCase().includes(term) ||
          leave.approvedBy.toLowerCase().includes(term)
      );
      setLeaves(filtered);
    }
  };
 
  return (
    <div className="container-fluid accepted-leave-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="d-flex align-items-center gap-2">
            Rejected Leaves
            <span className="badge bg-primary">{leaves.length}</span>
          </h4>
          <p>You can see all rejected leave requests here</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-danger" onClick={() => window.print()}>
            <FaFilePdf className="me-2" />
            PDF
          </button>
          <div className="search-box d-flex align-items-center border rounded px-2">
            <FaSearch className="me-2 text-muted" />
            <input
              type="text"
              placeholder="Search by name or ID"
              className="form-control border-0"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
 
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Emp ID</th>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Created On</th>
                  <th>Days</th>
                  <th>Status</th>
                  <th>Remark</th>
                  <th>Rejected By</th>
                  <th>Reject reason</th>
                </tr>
              </thead>
              <tbody>
                {leaves.length > 0 ? (
                  leaves.map((leave) => (
                    <tr key={leave.id}>
                      <td className="d-flex align-items-center gap-2">
                        <div className="avatar-circle">{getInitials(leave.employee)}</div>
                        {leave.employee}
                      </td>
                      <td>{leave.empId}</td>
                      <td>{leave.leaveType}</td>
                      <td>{leave.from}</td>
                      <td>{leave.to}</td>
                      <td>{leave.approvedOn}</td>
                      <td>{leave.days}</td>
                      <td>
                        <span className="badge bg-danger">
                          <FaCalendarCheck className="me-1" />
                          {leave.status}
                        </span>
                      </td>
                      <td>
                        <div className="remark-container">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={leave.reason}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>{leave.approvedBy}</td>
                      <td>
                        <div className="reject-reason-container">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={leave.reason}
                            readOnly
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" className="text-center text-muted py-4">
                      No matching records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
 
      <style jsx>{`
        .table td {
          white-space: nowrap; /* Ensures no wrapping for table data */
        }
 
        .avatar-circle {
          width: 45px;
          height: 35px;
          border-radius: 50%;
          background-color: #e0e0e0;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
 
        .remark-container, .reject-reason-container {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
 
        .remark-container input, .reject-reason-container input {
          width: 100%;
          background-color: #f8f9fa;
          font-size: 0.875rem;
        }
 
        /* Added white-space: nowrap for Created On column */
        .created-on-container {
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};
 
export default RejectedLeave;