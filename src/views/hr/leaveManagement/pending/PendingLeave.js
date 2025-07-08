import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaBell, FaSync, FaInfoCircle } from 'react-icons/fa';
import './PendingLeave.css';

const PendingLeave = () => {
  const [pendingLeaves, setPendingLeaves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPendingCheck, setNextPendingCheck] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);

  // Simulate fetching pending leaves
  useEffect(() => {
    const fetchPendingLeaves = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - replace with actual API call
        const mockData = []; // Empty for demonstration
        
        setPendingLeaves(mockData);
        setLastChecked(new Date());
        
        // Set next expected pending leaves (simulating data from backend)
        const nextCheckDate = new Date();
        nextCheckDate.setHours(nextCheckDate.getHours() + 2); // Example: next check in 2 hours
        setNextPendingCheck(nextCheckDate);
      } catch (error) {
        console.error("Error fetching pending leaves:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPendingLeaves();
  }, []);

  const handleRefresh = () => {
    // Implement actual refresh logic here
    window.location.reload(); // Simple refresh for demo
  };

  const formatTime = (date) => {
    if (!date) return "N/A";
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    return date.toLocaleDateString();
  };

  return (
    <div className="container-fluid pending-leave-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="page-title">Pending Leave Applications</h4>
          <p className="page-subtitle">
            {isLoading ? "Checking for pending leaves..." :
             pendingLeaves.length > 0 ? "Review and approve/reject leave requests" :
             "No pending leave applications currently"}
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="last-checked-info">
            <FaInfoCircle className="me-1" />
            <small>
              Last checked: {formatTime(lastChecked)} on {formatDate(lastChecked)}
            </small>
          </div>
          <button 
            className="btn btn-outline-primary d-flex align-items-center"
            onClick={handleRefresh}
            disabled={isLoading}
          >
            <FaSync className={isLoading ? "me-2 spin" : "me-2"} />
            Refresh
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="card shadow-sm">
          <div className="card-body text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 mb-0">Checking for pending leaves...</p>
          </div>
        </div>
      ) : pendingLeaves.length > 0 ? (
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
                    <th>Applied On</th>
                    <th>Reason</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingLeaves.map((leave) => (
                    <tr key={leave.id}>
                      <td>{leave.employee}</td>
                      <td>{leave.leaveType}</td>
                      <td>{leave.from}</td>
                      <td>{leave.to}</td>
                      <td>{leave.days}</td>
                      <td>{leave.appliedOn}</td>
                      <td className="reason-cell">
                        <div className="reason-text">{leave.reason}</div>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <button className="btn btn-sm btn-success">Approve</button>
                          <button className="btn btn-sm btn-danger">Reject</button>
                          <button className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                Showing 1 to {pendingLeaves.length} of {pendingLeaves.length} entries
              </div>
              <div className="d-flex gap-1">
                <button className="btn btn-sm btn-outline-secondary disabled">Previous</button>
                <button className="btn btn-sm btn-primary">1</button>
                <button className="btn btn-sm btn-outline-secondary disabled">Next</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card shadow-sm">
          <div className="card-body text-center py-5">
            <FaBell className="text-muted mb-3" size={48} />
            <h5 className="text-muted">No Pending Leaves Currently</h5>
            
            {nextPendingCheck && (
              <div className="alert alert-info mt-3 d-inline-block">
                Next expected pending leaves around {formatTime(nextPendingCheck)}
              </div>
            )}
            
            <div className="mt-4">
              <p>New leave applications may appear when:</p>
              <ul className="text-start list-unstyled mx-auto" style={{ maxWidth: '400px' }}>
                <li className="mb-2">• Employees submit new leave requests</li>
                <li className="mb-2">• System processes batch submissions</li>
                <li className="mb-2">• Managers delegate approvals to you</li>
                <li>• Scheduled leave periods begin</li>
              </ul>
            </div>
            
            <button 
              className="btn btn-primary mt-4 d-flex align-items-center mx-auto"
              onClick={handleRefresh}
            >
              <FaSync className="me-2" />
              Check Again Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingLeave;