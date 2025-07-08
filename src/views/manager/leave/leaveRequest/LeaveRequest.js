import React, { useState } from 'react';
import { FaSearch, FaCalendarCheck, FaFilePdf, FaTrash, FaPen } from 'react-icons/fa';
import LeaveRequestEdit from './LeaveRequestEdit';
 
const LeaveRequest = () => {
  const initialLeaves = [
    {
      id: 1,
      empId: 'EMP001',
      employee: 'John Doe',
      leaveType: 'Casual Leave',
      from: '2023-06-15',
      to: '2023-06-17',
      days: 3,
      status: 'Pending',
      approvedOn: '2023-06-10',
      approvedBy: 'Manager Name',
      reason: 'casual work',
    },
  ];
 
  const [leaves, setLeaves] = useState(initialLeaves);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingLeave, setEditingLeave] = useState(null);
 
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
 
  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this leave request?');
    if (confirmed) {
      setLeaves((prevLeaves) => prevLeaves.filter((leave) => leave.id !== id));
    }
  };
 
  const handleUpdate = (updatedLeave) => {
    setLeaves((prevLeaves) =>
      prevLeaves.map((leave) => (leave.id === updatedLeave.id ? updatedLeave : leave))
    );
    setEditingLeave(null);
  };
 
  // 👉 Show only the editor if editing
  if (editingLeave) {
    return (
      <LeaveRequestEdit
        leave={editingLeave}
        onCancel={() => setEditingLeave(null)}
        onSubmit={handleUpdate}
      />
    );
  }
 
  return (
    <div className="container-fluid accepted-leave-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="d-flex align-items-center gap-2">
            Leaves Request
            <span className="badge bg-primary">{leaves.length}</span>
          </h4>
          <p>You can see all new leave requests here</p>
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
                  <th>Employee Name</th>
                  <th>Emp ID</th>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Created On</th>
                  <th>Days</th>
                  <th>Approved By</th>
                  <th>Status</th>
                  <th>Remarks</th>
                  <th>Action</th>
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
                      <td>{leave.approvedBy}</td>
                      <td>
                        <span className="badge bg-warning">
                          <FaCalendarCheck className="me-1" />
                          {leave.status}
                        </span>
                      </td>
                      <td>
                        <input type="text" className="form-control form-control-sm" value={leave.reason} readOnly />
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <button className="btn btn-sm btn-outline-primary" onClick={() => setEditingLeave(leave)}>
                            <FaPen />
                          </button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(leave.id)}>
                            <FaTrash />
                          </button>
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
        .avatar-circle {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #e0e0e0;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};
 
export default LeaveRequest;