import React, { useState, useEffect } from 'react';
import LeaveForm from './leaveForm/LeaveForm';
import './Leave.css';

const Leave = () => {
  const [showForm, setShowForm] = useState(false);
  const [leaveBalance, setLeaveBalance] = useState({
    'Casual Leave (Paid)': 12,
    'Sick Leave (Paid)': 10,
    'Emergency Leave (Paid)': 5,
    'Unpaid Leave': 0 // Unlimited
  });

  const [history, setHistory] = useState([
    { id: 1, from: '2025-04-10', to: '2025-04-12', type: 'Sick Leave (Paid)', reason: 'Fever', status: 'Approved' },
    { id: 2, from: '2025-03-28', to: '2025-03-30', type: 'Casual Leave (Paid)', reason: 'Family Function', status: 'Pending' },
    { id: 3, from: '2025-02-14', to: '2025-02-14', type: 'Emergency Leave (Paid)', reason: 'Urgent work', status: 'Rejected' },
  ]);

  const calculateLeaveDays = (from, to) => {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const diffTime = Math.abs(toDate - fromDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleLeaveSubmit = (formData) => {
    const leaveDays = calculateLeaveDays(formData.from, formData.to);
    const leaveType = formData.type;
    
    // Check leave balance (except for unpaid leave)
    if (leaveType !== 'Unpaid Leave' && leaveBalance[leaveType] < leaveDays) {
      alert(`❌ You only have ${leaveBalance[leaveType]} days left for ${leaveType}`);
      return false;
    }
    
    const newEntry = {
      id: Date.now(),
      ...formData,
      days: leaveDays,
      appliedOn: new Date().toISOString().split('T')[0],
      status: 'Pending',
    };
    
    setHistory(prev => [newEntry, ...prev]);
    
    // Update leave balance
    if (leaveType !== 'Unpaid Leave') {
      setLeaveBalance(prev => ({
        ...prev,
        [leaveType]: prev[leaveType] - leaveDays
      }));
    }
    
    alert('✅ Leave applied successfully!');
    setShowForm(false);
    return true;
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Approved': 'approved',
      'Pending': 'pending',
      'Rejected': 'rejected'
    };
    return <span className={`badge ${statusClasses[status]}`}>{status}</span>;
  };

  return (
    <div className="leave-container">
      <div className="leave-header">
        <h1>Leave Management</h1>
        <button 
          className={`toggle-btn ${showForm ? 'cancel' : 'apply'}`} 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? '✕ Cancel' : '➕ Apply for Leave'}
        </button>
      </div>

      {showForm && (
        <LeaveForm 
          onSubmit={handleLeaveSubmit} 
          onCancel={() => setShowForm(false)} 
          leaveBalance={leaveBalance}
        />
      )}

      <div className="leave-balance-card">
        <h3>Your Leave Balance</h3>
        <div className="balance-grid">
          {Object.entries(leaveBalance).map(([type, days]) => (
            <div key={type} className="balance-item">
              <div className="balance-type">{type}</div>
              <div className="balance-days">{type === 'Unpaid Leave' ? 'Unlimited' : `${days} days`}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="leave-history-card">
        <div className="history-header">
          <h3>Leave History</h3>
          <div className="history-stats">
            <span>Total: {history.length}</span>
            <span>Approved: {history.filter(h => h.status === 'Approved').length}</span>
            <span>Pending: {history.filter(h => h.status === 'Pending').length}</span>
          </div>
        </div>
        
        {history.length === 0 ? (
          <div className="no-history">No leave history found</div>
        ) : (
          <div className="table-responsive">
            <table className="leave-table">
              <thead>
                <tr>
                  <th>Applied On</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Days</th>
                  <th>Type</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.appliedOn || 'N/A'}</td>
                    <td>{entry.from}</td>
                    <td>{entry.to}</td>
                    <td>{calculateLeaveDays(entry.from, entry.to)}</td>
                    <td>{entry.type}</td>
                    <td className="reason-cell">{entry.reason}</td>
                    <td>{getStatusBadge(entry.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leave;