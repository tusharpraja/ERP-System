import React, { useState } from 'react';
 
const LeaveRequestEdit = () => {
  const [leaveType, setLeaveType] = useState('Casual Leave');
  const [startDate, setStartDate] = useState('2025-05-06');
  const [endDate, setEndDate] = useState('2025-05-07');
  const [status, setStatus] = useState('Pending');
  const [reason, setReason] = useState('Will be out of station.');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      leaveType,
      startDate,
      endDate,
      status,
      reason,
    });
    alert('Leave application submitted!');
  };
 
  const handleCancel = () => {
    alert('Cancelled');
  };
 
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h3 style={{ color: 'navy' }}>
        Edit Leave Application
      </h3>
      <p>You can edit leave application here.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            style={{ width: '60%', padding: '10px' }}
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{
              marginLeft: '10px',
              padding: '10px',
              backgroundColor: '#f2dede',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              width: '60%',
              padding: '10px',
              backgroundColor: '#f2dede',
            }}
          />
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ marginLeft: '10px', padding: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#eceff1',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            marginRight: '10px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleCancel}
          style={{
            backgroundColor: '#c62828',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
 
export default LeaveRequestEdit;