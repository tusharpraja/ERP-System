import React, { useState } from 'react';

const ShiftManagement = () => {
  // Form state
  const [shiftData, setShiftData] = useState({
    name: '',
    startTime: '',
    endTime: '',
    minLoginHours: '',
    minLoginMinutes: ''
  });

  // List of created shifts
  const [shifts, setShifts] = useState([
    { id: 1, name: 'Morning Shift', startTime: '09:00', endTime: '17:00', minLoginHours: 8, minLoginMinutes: 0 },
    { id: 2, name: 'Night Shift', startTime: '20:00', endTime: '04:00', minLoginHours: 8, minLoginMinutes: 0 }
  ]);

  const [activeTab, setActiveTab] = useState('create');
  const [editMode, setEditMode] = useState(false);
  const [currentShiftId, setCurrentShiftId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShiftData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editMode) {
      // Update existing shift
      setShifts(shifts.map(shift => 
        shift.id === currentShiftId ? { ...shiftData, id: currentShiftId } : shift
      ));
      setEditMode(false);
    } else {
      // Create new shift
      const newShift = {
        ...shiftData,
        id: Date.now(),
        minLoginHours: shiftData.minLoginHours || 0,
        minLoginMinutes: shiftData.minLoginMinutes || 0
      };
      setShifts([...shifts, newShift]);
    }

    // Reset form
    setShiftData({
      name: '',
      startTime: '',
      endTime: '',
      minLoginHours: '',
      minLoginMinutes: ''
    });
  };

  const handleEdit = (shift) => {
    setShiftData({
      name: shift.name,
      startTime: shift.startTime,
      endTime: shift.endTime,
      minLoginHours: shift.minLoginHours,
      minLoginMinutes: shift.minLoginMinutes
    });
    setEditMode(true);
    setCurrentShiftId(shift.id);
    setActiveTab('create');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this shift?')) {
      setShifts(shifts.filter(shift => shift.id !== id));
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="card">
        <div className="card-header">
          <h5 style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>Shift Management</h5>
          <p style={{ color: 'var(--Subtittles)' }}>Create and manage work shifts for your organization</p>
          
          <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'create' ? 'active' : ''}`}
                onClick={() => setActiveTab('create')}
              >
                {editMode ? 'Edit Shift' : 'Create Shift'}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'view' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('view');
                  setEditMode(false);
                  setShiftData({
                    name: '',
                    startTime: '',
                    endTime: '',
                    minLoginHours: '',
                    minLoginMinutes: ''
                  });
                }}
              >
                View Shifts
              </button>
            </li>
          </ul>
        </div>

        <div className="card-body">
          {activeTab === 'create' ? (
            <form 
              onSubmit={handleSubmit} 
              className="p-3 my-2 rounded-2 text-black" 
              style={{ background: 'var(--primaryDashMenuColor)' }}
            >
              <div className="form-group mb-3">
                <label htmlFor="name">Shift Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter shift name"
                  className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                  value={shiftData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="startTime">Start Time</label>
                  <input
                    name="startTime"
                    type="time"
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    value={shiftData.startTime}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="endTime">End Time</label>
                  <input
                    name="endTime"
                    type="time"
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    value={shiftData.endTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="minLoginHours">Minimum Login Hours</label>
                  <input
                    name="minLoginHours"
                    type="number"
                    placeholder="Enter minimum login hours"
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    value={shiftData.minLoginHours}
                    onChange={handleChange}
                    min="0"
                    max="24"
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label htmlFor="minLoginMinutes">Minimum Login Minutes</label>
                  <input
                    name="minLoginMinutes"
                    type="number"
                    placeholder="Enter minimum login minutes"
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    value={shiftData.minLoginMinutes}
                    onChange={handleChange}
                    min="0"
                    max="59"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                {editMode ? 'Update Shift' : 'Create Shift'}
              </button>
              {editMode && (
                <button 
                  type="button" 
                  className="btn btn-outline-secondary mt-3 ms-2"
                  onClick={() => {
                    setEditMode(false);
                    setShiftData({
                      name: '',
                      startTime: '',
                      endTime: '',
                      minLoginHours: '',
                      minLoginMinutes: ''
                    });
                  }}
                >
                  Cancel
                </button>
              )}
            </form>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Shift Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Min. Duration</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {shifts.map(shift => (
                    <tr key={shift.id}>
                      <td>{shift.name}</td>
                      <td>{shift.startTime}</td>
                      <td>{shift.endTime}</td>
                      <td>{shift.minLoginHours}h {shift.minLoginMinutes}m</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-primary me-2"
                          onClick={() => handleEdit(shift)}
                        >
                          Edit
                        </button>
                        <button 
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(shift.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShiftManagement;