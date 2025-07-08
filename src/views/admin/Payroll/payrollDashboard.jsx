import React, { useState } from 'react';
import './payrollDashboard.css'; // Import your CSS file here
import { FiHelpCircle, FiFlag, FiChevronLeft, FiExternalLink, FiCheck, FiClock, FiArrowUp } from 'react-icons/fi';
import { BsInfoCircle } from 'react-icons/bs';

const PayrollDashboard = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [chartView, setChartView] = useState('currentYear');
  
  // Employee data
  const [employees, setEmployees] = useState([
    { id: "E0001", name: "Adrian Adams", role: "Admin", status: "Processed", avatarColor: "#FF6B6B" },
    { id: "E0002", name: "TJ Mengel", role: "HR Manager", status: "Processed", avatarColor: "#4ECDC4" },
    { id: "E0003", name: "Emma Stone", role: "Office Manager", status: "Processed", avatarColor: "#FFBE0B" },
    { id: "E0004", name: "Jake Norton", role: "Senior Designer", status: "Processed", avatarColor: "#FB5607" },
    { id: "E0005", name: "Ahmed Harris", role: "Senior Developer", status: "Processed", avatarColor: "#8338EC" },
    { id: "E0006", name: "Rahul Singh", role: "Product Manager", status: "Hold", avatarColor: "#3A86FF" },
    { id: "E0007", name: "Johan Martinez", role: "Marketing Manager", status: "Processed", avatarColor: "#FF006E" },
    { id: "E0008", name: "Deepak Sengar", role: "Senior Test Engineer", status: "Failed", avatarColor: "#1B9AAA" },
    { id: "E0009", name: "Chris Aven", role: "Data Analyst", status: "Processed", avatarColor: "#06D6A0" },
    { id: "E0010", name: "Seethal Gokhale", role: "UX/UI Designer", status: "Processed", avatarColor: "#EF476F" },
    { id: "E0011", name: "Jack Rogers", role: "HR Support", status: "Processed", avatarColor: "#118AB2" },
    { id: "E0012", name: "Will Young", role: "Tech Lead", status: "Processed", avatarColor: "#073B4C" },
  ]);

  const [activities, setActivities] = useState([
    { id: 1, type: "Approval & Finance Checked", status: "complete", completedAt: "2025-05-01T10:30:00" },
    { id: 2, type: "Salary Checked", status: "complete", completedAt: "2025-05-02T11:15:00" },
    { id: 3, type: "Tax Calculations Verified", status: "pending", dueAt: "2025-05-05T09:00:00" },
    { id: 4, type: "Employee Deductions Processed", status: "complete", completedAt: "2025-05-03T14:45:00" },
    { id: 5, type: "Payroll Summary Generated", status: "pending", dueAt: "2025-05-06T12:00:00" },
    { id: 6, type: "Bank Transfer Initiated", status: "complete", completedAt: "2025-05-04T16:20:00" },
    { id: 7, type: "Payslips Distributed", status: "pending", dueAt: "2025-05-07T10:00:00" }
  ]);

  const filteredEmployees = employees.filter(employee => {
    if (activeTab === 'all') return true;
    return employee.status.toLowerCase() === activeTab;
  });

  const processedCount = employees.filter(e => e.status === 'Processed').length;
  const holdCount = employees.filter(e => e.status === 'Hold').length;
  const failedCount = employees.filter(e => e.status === 'Failed').length;

  const completionPercentage = Math.round((activities.filter(a => a.status === 'complete').length / activities.length) * 100);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Processed': return '#10B981';
      case 'Hold': return '#F59E0B';
      case 'Failed': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="payroll-dashboard">
      <header className="header">
        <div className="header-left">
          <h1>Payroll Dashboard</h1>
          <p>You have new payroll to process</p>
        </div>
        <div className="header-right">
          <button className="help-button">
            <FiHelpCircle className="help-icon" />
            <span>Help</span> / <span>Help desk</span>
          </button>
          <div className="completion">
            <span>{completionPercentage}%</span>
          </div>
          <div className="flag">
            <FiFlag className="flag-icon" />
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="main-left">
          <div className="payroll-process-section">
            <div className="payroll-header">
              <h2>Process Payroll for: May 2025</h2>
              <span className="planned-tag">Planned</span>
              <p className="cutoff-date">Cutoff Date: {formatDate('2025-05-27')}</p>
            </div>

            <div className="action-buttons">
              <button className="back-btn">
                <FiChevronLeft className="back-icon" />
                Back
              </button>
              <div className="action-right">
                <button className="secondary-btn">
                  <FiExternalLink className="external-icon" />
                  View Payslips
                </button>
                <button className="process-btn">Process Payroll</button>
              </div>
            </div>

            <div className="payroll-stats">
              <div className="stat-box">
                <h3>Net Pay</h3>
                <div className="amount">₹ 1,267,899</div>
              </div>

              <div className="stat-box">
                <h3>Subtotal (On Net)</h3>
                <div className="subtotal-info">No items in tax basket</div>
              </div>

              <div className="stat-box">
                <h3>{employees.length} Nos.</h3>
                <div className="employee-count">Active Employees on Payroll</div>
              </div>
            </div>

            <div className="payroll-details">
              <div className="detail-row">
                <div className="detail-label">Total CTC</div>
                <div className="detail-value">₹ 1,567,899</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Employee Contribution</div>
                <div className="detail-value">₹ 187,650</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Employer Contribution</div>
                <div className="detail-value">₹ 112,590</div>
              </div>
              <div className="detail-row small">
                <div className="detail-label">Paid: ₹ 1,267,899</div>
              </div>
              <div className="detail-row small">
                <div className="detail-label">Unpaid: ₹ 0.00</div>
              </div>

              <div className="detail-note">
                <BsInfoCircle className="note-icon" />
                <div className="note-text">Final payroll for Successful run has been generated.</div>
              </div>
            </div>

            <div className="payment-info">
              <div className="detail-row">
                <div className="detail-label">Employee Contribution</div>
                <div className="detail-value">₹ 187,650</div>
                <div className="detail-date">15th June, 2025</div>
              </div>
            </div>

            <div className="contribution-sections">
              <div className="contribution-box">
                <h4>Employee State Insurance (ESI)</h4>
                <div className="contribution-amount">₹ 12,450</div>
                <div className="last-date">Last Date to Deposit: 15th June, 2025</div>
              </div>
              <div className="contribution-box">
                <h4>Employee Provident Fund (EPF)</h4>
                <div className="contribution-amount">₹ 112,590</div>
                <div className="last-date">Last Date to Deposit: 15th June, 2025</div>
              </div>
              <div className="contribution-box">
                <h4>Tax Deducted at Source (TDS)</h4>
                <div className="contribution-amount">₹ 62,610</div>
                <div className="last-date">Last Date to Deposit: 7th June, 2025</div>
              </div>
            </div>

            <div className="overview-section">
              <h3>Overview</h3>
              <div className="spending-overview">
                <p>Spending over the year</p>
                <div className="spending-amount">₹ 68,293.00</div>
                <div className="spending-percent">
                  <FiArrowUp className="up-arrow" />
                  <span className="percent">+3.05%</span>
                  <span className="period">vs Last Year</span>
                </div>
              </div>

              <div className="chart-container">
                <div className="chart">
                  <div className="chart-placeholder">
                    <div className="chart-bar" style={{ height: '30%' }}></div>
                    <div className="chart-bar" style={{ height: '45%' }}></div>
                    <div className="chart-bar" style={{ height: '60%' }}></div>
                    <div className="chart-bar" style={{ height: '75%' }}></div>
                    <div className="chart-bar" style={{ height: '40%' }}></div>
                    <div className="chart-bar" style={{ height: '65%' }}></div>
                    <div className="chart-bar" style={{ height: '80%' }}></div>
                    <div className="chart-bar" style={{ height: '55%' }}></div>
                    <div className="chart-bar" style={{ height: '70%' }}></div>
                    <div className="chart-bar" style={{ height: '85%' }}></div>
                    <div className="chart-bar" style={{ height: '90%' }}></div>
                    <div className="chart-bar" style={{ height: '65%' }}></div>
                  </div>
                </div>
                <div className="chart-legend">
                  <button 
                    className={`legend-btn ${chartView === 'currentYear' ? 'active' : ''}`}
                    onClick={() => setChartView('currentYear')}
                  >
                    Current Year
                  </button>
                  <button 
                    className={`legend-btn ${chartView === 'previousYear' ? 'active' : ''}`}
                    onClick={() => setChartView('previousYear')}
                  >
                    Previous Year
                  </button>
                  <button 
                    className={`legend-btn ${chartView === 'currentMonth' ? 'active' : ''}`}
                    onClick={() => setChartView('currentMonth')}
                  >
                    Current Month
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="employees-section">
            <div className="tab-header">
              <div className="tab-title">Employees</div>
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  All ({employees.length})
                </button>
                <button 
                  className={`tab ${activeTab === 'processed' ? 'active' : ''}`}
                  onClick={() => setActiveTab('processed')}
                >
                  Processed ({processedCount})
                </button>
                <button 
                  className={`tab ${activeTab === 'hold' ? 'active' : ''}`}
                  onClick={() => setActiveTab('hold')}
                >
                  Hold ({holdCount})
                </button>
                <button 
                  className={`tab ${activeTab === 'failed' ? 'active' : ''}`}
                  onClick={() => setActiveTab('failed')}
                >
                  Failed ({failedCount})
                </button>
              </div>
            </div>

            <div className="employees-list">
              {filteredEmployees.map(employee => (
                <div key={employee.id} className="employee-card">
                  <div className="employee-avatar">
                    <div 
                      className="avatar-circle" 
                      style={{ backgroundColor: employee.avatarColor }}
                    >
                      {employee.name.charAt(0)}
                    </div>
                  </div>
                  <div className="employee-info">
                    <div className="employee-id">{employee.id}</div>
                    <div className="employee-name">{employee.name}</div>
                    <div className="employee-role">{employee.role}</div>
                  </div>
                  <div 
                    className="employee-status"
                    style={{ color: getStatusColor(employee.status) }}
                  >
                    {employee.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="activity-section">
            <div className="activity-header">
              <h3>Activity</h3>
              <button className="expand-btn">
                <FiExternalLink className="external-icon" />
              </button>
            </div>
            <div className="activity-list">
              {activities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    <div className={`icon ${activity.status}`}>
                      {activity.status === 'complete' ? <FiCheck /> : <FiClock />}
                    </div>
                  </div>
                  <div className="activity-details">
                    <div className="activity-type">{activity.type}</div>
                    <div className="activity-status">
                      {activity.status === 'complete' 
                        ? `Completed on ${formatDate(activity.completedAt)}` 
                        : `Due by ${formatDate(activity.dueAt)}`}
                    </div>
                  </div>
                  <div className="activity-check">
                    <div className={`check-icon ${activity.status}`}>
                      {activity.status === 'complete' ? <FiCheck /> : ''}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollDashboard;