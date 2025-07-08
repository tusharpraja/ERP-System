import React, { useState } from 'react';
import './Salary.css';

const Salary = () => {
  const currentMonth = {
    net: '₹55,000',
    gross: '₹65,000',
    deductions: '₹10,000',
    components: [
      { label: 'Basic', amount: '₹30,000' },
      { label: 'HRA', amount: '₹15,000' },
      { label: 'Conveyance', amount: '₹5,000' },
      { label: 'Medical', amount: '₹5,000' },
      { label: 'Special Allowance', amount: '₹10,000' },
    ]
  };

  const [salaryHistory] = useState([
    { month: 'March 2025', net: '₹54,000', status: 'Credited' },
    { month: 'February 2025', net: '₹53,500', status: 'Credited' },
    { month: 'January 2025', net: '₹52,800', status: 'Credited' }
  ]);

  return (
    <div className="salary-container">
      <h2>Salary Overview</h2>

      <div className="salary-summary">
        <div><strong>Net Salary:</strong> {currentMonth.net}</div>
        <div><strong>Gross Salary:</strong> {currentMonth.gross}</div>
        <div><strong>Deductions:</strong> {currentMonth.deductions}</div>
      </div>

      <h3>Breakdown</h3>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {currentMonth.components.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="download-btn">📄 Download Payslip</button>

      <h3>Salary History</h3>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Net Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {salaryHistory.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.month}</td>
              <td>{entry.net}</td>
              <td><span className="status">{entry.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Salary;
