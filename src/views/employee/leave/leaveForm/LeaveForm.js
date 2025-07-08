import React, { useState, useEffect } from 'react';
import '.././Leave.css';

const LeaveForm = ({ onSubmit, onCancel, leaveBalance }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    type: 'Casual Leave (Paid)',
    reason: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Calculate leave days when dates change
    if (formData.from && formData.to) {
      const fromDate = new Date(formData.from);
      const toDate = new Date(formData.to);
      
      if (fromDate > toDate) {
        setErrors(prev => ({ ...prev, dateRange: 'End date cannot be before start date' }));
      } else {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.dateRange;
          return newErrors;
        });
      }
    }
  }, [formData.from, formData.to]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.from) newErrors.from = 'Start date is required';
    if (!formData.to) newErrors.to = 'End date is required';
    if (!formData.reason) newErrors.reason = 'Reason is required';
    
    if (formData.from && formData.to) {
      const fromDate = new Date(formData.from);
      const toDate = new Date(formData.to);
      if (fromDate > toDate) {
        newErrors.dateRange = 'End date cannot be before start date';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const success = onSubmit(formData);
    if (success) {
      // Reset form on successful submission
      setFormData({ from: '', to: '', type: 'Casual Leave (Paid)', reason: '' });
    }
  };

  return (
    <div className="leave-form-card">
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit} className="leave-form">
        <div className="form-group">
          <label>From Date <span className="required">*</span></label>
          <input 
            type="date" 
            name="from" 
            value={formData.from} 
            onChange={handleChange} 
            min={new Date().toISOString().split('T')[0]} 
          />
          {errors.from && <span className="error">{errors.from}</span>}
        </div>

        <div className="form-group">
          <label>To Date <span className="required">*</span></label>
          <input 
            type="date" 
            name="to" 
            value={formData.to} 
            onChange={handleChange} 
            min={formData.from || new Date().toISOString().split('T')[0]} 
          />
          {errors.to && <span className="error">{errors.to}</span>}
          {errors.dateRange && <span className="error">{errors.dateRange}</span>}
        </div>

        <div className="form-group">
          <label>Leave Type</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="Casual Leave (Paid)">Casual Leave (Paid) - {leaveBalance['Casual Leave (Paid)']} days left</option>
            <option value="Sick Leave (Paid)">Sick Leave (Paid) - {leaveBalance['Sick Leave (Paid)']} days left</option>
            <option value="Emergency Leave (Paid)">Emergency Leave (Paid) - {leaveBalance['Emergency Leave (Paid)']} days left</option>
            <option value="Unpaid Leave">Unpaid Leave</option>
          </select>
        </div>

        <div className="form-group">
          <label>Reason <span className="required">*</span></label>
          <textarea 
            name="reason" 
            value={formData.reason} 
            onChange={handleChange} 
            rows="3" 
            placeholder="Briefly explain the reason for your leave..."
          />
          {errors.reason && <span className="error">{errors.reason}</span>}
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForm;