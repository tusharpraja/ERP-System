// CreateLeaveForm.js
import React, { useState } from 'react';
import './CreateLeaveForm.css';
 
const CreateLeaveForm = ({ onCancel }) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportingManager, setReportingManager] = useState('');
  const [reportingHR, setReportingHR] = useState('');
  const [additionalManager, setAdditionalManager] = useState('');
  const [reason, setReason] = useState('');
  const [errors, setErrors] = useState({});
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
 
    if (!leaveType) {
      validationErrors.leaveType = "Please select a leave type.";
    }
    if (!startDate) {
      validationErrors.startDate = "Start date is required.";
    }
    if (!endDate) {
      validationErrors.endDate = "End date is required.";
    }
    if (!reportingManager) {
      validationErrors.reportingManager = "Reporting Manager is required.";
    }
    if (!reportingHR) {
      validationErrors.reportingHR = "Reporting HR is required.";
    }
    if (reason.length > 100) {
      validationErrors.reason = "Reason must be within 100 characters.";
    }
 
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // In a real application, you would submit this data to an API
      console.log("Form Submitted", { leaveType, startDate, endDate, reportingManager, reportingHR, additionalManager, reason });
      // After successful submission, you might want to close the form
      onCancel();
    }
  };
 
  return (
    <form onSubmit={handleSubmit} className="leave-form">
      <h2>Create Leave</h2>
      <p>You can create a new leave request here.</p>
 
      <label>
        Select Leave Type:
        <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
          <option value="">-- Select Leave Type --</option>
          <option value="sick">Sick Leave</option>
          <option value="vacation">Vacation Leave</option>
          <option value="casual">Casual Leave</option>
          <option value="paternity">Paternity Leave</option>
          {/* Add additional leave types as needed */}
        </select>
        {errors.leaveType && <div className="error">{errors.leaveType}</div>}
      </label>
 
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        {errors.startDate && <div className="error">{errors.startDate}</div>}
      </label>
 
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        {errors.endDate && <div className="error">{errors.endDate}</div>}
      </label>
 
      <label>
        Reporting Manager:
        <input
          type="email"
          value={reportingManager}
          onChange={(e) => setReportingManager(e.target.value)}
          placeholder="demo.admin@munc.in"
        />
        {errors.reportingManager && <div className="error">{errors.reportingManager}</div>}
      </label>
 
      <label>
        Reporting HR:
        <input
          type="email"
          value={reportingHR}
          onChange={(e) => setReportingHR(e.target.value)}
          placeholder="demo.hr@munc.in"
        />
        {errors.reportingHR && <div className="error">{errors.reportingHR}</div>}
      </label>
 
      <label>
        Additional Manager:
        <select value={additionalManager} onChange={(e) => setAdditionalManager(e.target.value)}>
          <option value="">-- Select Additional Manager --</option>
          <option value="manager1@munc.in">Manager One</option>
          <option value="manager2@munc.in">Manager Two</option>
          {/* Add additional managers as options */}
        </select>
      </label>
 
      <label>
        Reason:
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          maxLength={100}
          placeholder="Please mention the reason for leave"
        />
        {errors.reason && <div className="error">{errors.reason}</div>}
      </label>
 
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};
 
export default CreateLeaveForm;