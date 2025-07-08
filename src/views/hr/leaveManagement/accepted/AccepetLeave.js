import React, { useState } from 'react';
import { FaSearch, FaFilter, FaCalendarCheck, FaFileExport } from 'react-icons/fa';
import './Accepted.css';
import * as XLSX from 'xlsx';

const AcceptedLeave = () => {
  // Sample accepted leave data
  const initialLeaves = [
    {
      id: 1,
      employee: 'John Doe',
      leaveType: 'Sick Leave',
      from: '2023-06-15',
      to: '2023-06-17',
      days: 3,
      status: 'Approved',
      approvedOn: '2023-06-10',
      approvedBy: 'Manager Name',
      reason: 'High fever and doctor advised rest'
    },
    {
      id: 2,
      employee: 'Jane Smith',
      leaveType: 'Casual Leave',
      from: '2023-06-20',
      to: '2023-06-21',
      days: 2,
      status: 'Approved',
      approvedOn: '2023-06-12',
      approvedBy: 'Manager Name',
      reason: 'Family function'
    },
    {
      id: 3,
      employee: 'Robert Johnson',
      leaveType: 'Paid Leave',
      from: '2023-06-25',
      to: '2023-06-30',
      days: 6,
      status: 'Approved',
      approvedOn: '2023-06-15',
      approvedBy: 'HR Manager',
      reason: 'Vacation with family'
    }
  ];

  const [leaves, setLeaves] = useState(initialLeaves);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    approvedBy: ''
  });

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      setLeaves(initialLeaves);
    } else {
      const filtered = initialLeaves.filter(leave =>
        leave.employee.toLowerCase().includes(term) ||
        leave.leaveType.toLowerCase().includes(term) ||
        leave.reason.toLowerCase().includes(term) ||
        leave.approvedBy.toLowerCase().includes(term)
      );
      setLeaves(filtered);
    }
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...initialLeaves];
    
    if (filters.leaveType) {
      filtered = filtered.filter(leave => leave.leaveType === filters.leaveType);
    }
    
    if (filters.fromDate) {
      filtered = filtered.filter(leave => leave.from >= filters.fromDate);
    }
    
    if (filters.toDate) {
      filtered = filtered.filter(leave => leave.to <= filters.toDate);
    }
    
    if (filters.approvedBy) {
      filtered = filtered.filter(leave => 
        leave.approvedBy.toLowerCase().includes(filters.approvedBy.toLowerCase())
      );
    }
    
    setLeaves(filtered);
    setShowFilters(false);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      leaveType: '',
      fromDate: '',
      toDate: '',
      approvedBy: ''
    });
    setLeaves(initialLeaves);
    setShowFilters(false);
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(leaves);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "AcceptedLeaves");
    XLSX.writeFile(workbook, "AcceptedLeaves.xlsx");
  };

  // Get unique leave types for filter dropdown
  const leaveTypes = [...new Set(initialLeaves.map(leave => leave.leaveType))];

  return (
    <div className="container-fluid accepted-leave-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="page-title">Accepted Leave Applications</h4>
          <p className="page-subtitle">View all approved leave requests</p>
        </div>
        <div className="d-flex gap-2">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button 
            className="btn btn-outline-secondary"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter className="me-2" />
            Filter
          </button>
          <button 
            className="btn btn-outline-primary"
            onClick={exportToExcel}
          >
            <FaFileExport className="me-2" />
            Export
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Leave Type</label>
                <select 
                  className="form-select"
                  name="leaveType"
                  value={filters.leaveType}
                  onChange={handleFilterChange}
                >
                  <option value="">All Types</option>
                  {leaveTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label">From Date</label>
                <input 
                  type="date" 
                  className="form-control"
                  name="fromDate"
                  value={filters.fromDate}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="col-md-2">
                <label className="form-label">To Date</label>
                <input 
                  type="date" 
                  className="form-control"
                  name="toDate"
                  value={filters.toDate}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Approved By</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Approver name"
                  name="approvedBy"
                  value={filters.approvedBy}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button 
                  className="btn btn-primary me-2"
                  onClick={applyFilters}
                >
                  Apply
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={resetFilters}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Leave Type</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Days</th>
                  <th>Approved On</th>
                  <th>Approved By</th>
                  <th>Reason</th>
                  <th>Status</th>
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
                      <td>{leave.days}</td>
                      <td>{leave.approvedOn}</td>
                      <td>{leave.approvedBy}</td>
                      <td className="reason-cell">
                        <div className="reason-text">{leave.reason}</div>
                      </td>
                      <td>
                        <span className="badge bg-success">
                          <FaCalendarCheck className="me-1" />
                          {leave.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center text-muted py-4">
                      No matching records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              Showing 1 to {leaves.length} of {leaves.length} entries
            </div>
            <div className="d-flex gap-1">
              <button className="btn btn-sm btn-outline-secondary disabled">Previous</button>
              <button className="btn btn-sm btn-primary">1</button>
              <button className="btn btn-sm btn-outline-secondary disabled">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedLeave;