// MyLeave.js
import React, { useState } from 'react';
import './myLeave.css';
import { FaCalendarCheck } from 'react-icons/fa';
import CreateLeaveForm from './CreateLeaveForm'; // Assuming CreateLeaveForm.js is in the same directory
 
const leaveData = [
  { type: 'Sick Leave', used: 0, total: 89, status: 'Unpaid' },
  { type: 'Paid Leave', used: 1.5, total: 60, status: 'Paid' },
  { type: 'Casual Leave', used: 0, total: 78, status: 'Paid' },
  { type: 'Paternity Leave', used: 0, total: 56, status: 'Paid' },
];
 
const initialLeaves = [
  {
    id: 1,
    employee: 'Unpaid Leave',
    leaveType: 'Full day',
    from: '2023-06-15',
    to: '2023-06-17',
    days: 3,
    status: 'rejected',
    approvedOn: '10/mar/2025',
    approvedBy: 'Manager Name',
    reason: 'Personal emergency',
  },
  {
    id: 2,
    employee: 'Casual leave',
    leaveType: 'Full Day',
    from: '2023-06-20',
    to: '2023-06-21',
    days: 2,
    status: 'rejected',
    approvedOn: '10/mar/2025',
    approvedBy: 'Manager Name',
    reason: 'Family visit',
  },
  {
    id: 3,
    employee: 'Paid leave',
    leaveType: 'Half day',
    from: '2023-06-25',
    to: '2023-06-30',
    days: 6,
    status: 'rejected',
    approvedOn: '10/mar/2025',
    approvedBy: 'HR Manager',
    reason: 'Medical treatment',
  },
];
 
const MyLeave = () => {
  const [leaves] = useState(initialLeaves);
  const [showCreateForm, setShowCreateForm] = useState(false);
 
  const handleApplyLeaveClick = () => {
    setShowCreateForm(true);
  };
 
  const handleCancelCreateForm = () => {
    setShowCreateForm(false);
  };
 
  return (
    <div className="leave-container">
      {showCreateForm ? (
        <CreateLeaveForm onCancel={handleCancelCreateForm} />
      ) : (
        <>
          {/* Leave Balance Header */}
          <div className="leave-header">
            <div>
              <h2 className="leave-title">Leaves Balance</h2>
              <p className="leave-subtitle">You can see all new leave balances here.</p>
            </div>
            <button className="leave-policy-link" onClick={() => window.print()}>
              <span className="material-icons"></span> Leave Policy
            </button>
          </div>
 
          {/* Leave Balance Cards */}
          <div className="leave-grid">
            {leaveData.map((leave, index) => {
              const percent = ((leave.used / leave.total) * 100).toFixed(0);
              return (
                <div key={index} className="leave-card">
                  <div className="card-header">
                    <h3 className="leave-type">{leave.type}</h3>
                    <span className={`status-badge ${leave.status.toLowerCase()}`}>{leave.status}</span>
                  </div>
                  <p className="leave-usage">{leave.used} Out of / {leave.total}</p>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${percent}%` }}></div>
                    </div>
                    <p className="progress-text">{percent}% of 100%</p>
                  </div>
                </div>
              );
            })}
          </div>
 
 
          <div className="leave-footer">
            <div>
              <h4 className="application-title">
                Your Leave Application <span className="application-badge">{leaves.length}</span>
              </h4>
              <p className="application-subtitle">You can view your applied leaves here.</p>
            </div>
            <button className="apply-button" onClick={handleApplyLeaveClick}>
              <span className="plus-icon">+</span> Apply Leave
            </button>
          </div>
 
          {/* Leave Table */}
          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Leave Type</th>
                      <th>Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Created At</th>
                      <th>Days</th>
                      <th>Status</th>
                      <th>Remark</th>
                      <th>Updated By</th>
                      <th>Reject Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaves.length > 0 ? (
                      leaves.map((leave) => (
                        <tr key={leave.id}>
                          <td>{leave.employee}</td>
                          <td>{leave.leaveType}</td>
                          <td>{leave.from}</td>
                          <td>{leave.to}</td>
                          <td>{leave.approvedOn}</td>
                          <td>{leave.days}</td>
                          <td>
                            <span className="badge bg-danger text-capitalize">
                              <FaCalendarCheck className="me-1" />
                              {leave.status}
                            </span>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={leave.reason}
                              readOnly
                            />
                          </td>
                          <td>{leave.approvedBy}</td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={leave.reason}
                              readOnly
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="10" className="text-center text-muted py-4">
                          No records found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
 
export default MyLeave;