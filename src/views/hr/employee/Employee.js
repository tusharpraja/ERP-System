import React, { useState } from 'react';
import AddEmpForm from './addEmployeeForm/AddEmpForm';

const Employee = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [employees, setEmployees] = useState([
    {
      id: 'DEMO0002',
      name: 'Hr Manager',
      position: 'HR Manager',
      department: 'Human Resource',
      account: 'HR',
      status: 'active',
      email: 'demo.hr@munc.in',
      contact: '1234567890',
      profileImage: 'http://res.cloudinary.com/dv8c2pofx/image/upload/v1741721783/dhc7rhowf682tyfq6l0g.jpg'
    },
    // Add more employee data as needed
  ]);
  
  const handleAddButtonClick = () => {
    setShowAddForm(true);
    setEditingEmployee(null);
  };
  
  const handleFormClose = () => {
    setShowAddForm(false);
    setEditingEmployee(null);
  };

  const handleFormSubmit = (employeeData) => {
    if (editingEmployee) {
      // Update existing employee
      setEmployees(employees.map(emp => 
        emp.id === editingEmployee.id ? { ...emp, ...employeeData } : emp
      ));
    } else {
      // Add new employee
      const newEmployee = {
        ...employeeData,
        id: `DEMO${Math.floor(1000 + Math.random() * 9000)}`
      };
      setEmployees([...employees, newEmployee]);
    }
    setShowAddForm(false);
    setEditingEmployee(null);
  };

  const handleEditClick = (employee) => {
    setEditingEmployee(employee);
    setShowAddForm(true);
  };

  const handleViewClick = (employee) => {
    // Handle view logic - could be a modal or separate view page
    console.log('Viewing employee:', employee);
    alert(`Viewing employee: ${employee.name}\nEmail: ${employee.email}`);
  };

  const handleDeleteClick = (employeeId) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter(emp => emp.id !== employeeId));
    }
  };

  return (
    <div className="container-fluid">
      {showAddForm ? (
        <div className="mb-4">
          <AddEmpForm 
            onClose={handleFormClose} 
            onSubmit={handleFormSubmit}
            employee={editingEmployee}
          />
        </div>
      ) : (
        <>
          <div className="my-auto py-2 mx-1" style={{ position: 'sticky', top: '0px', zIndex: 3 }}>
            <div className="row m-auto row-gap-4 px-0">
              <div className="col-7 col-md-4 d-flex px-1 px-md-2 gap-2">
                <div className="my-auto mt-2">
                  <div className="d-flex align-items-center gap-2">
                    <h5 className="m-0 p-0 text-capitalize" style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>Employees List</h5>
                    <p className="my-0 d-flex align-items-center justify-content-center bg-primary text-white rounded-5 px-2" style={{ fontWeight: 400 }}>{employees.length}</p>
                  </div>
                  <p className="m-0" style={{ color: 'var(--Subtittles)' }}>You can view and manage employee's from here</p>
                </div>
              </div>
              <div className="col-5 col-md-4 d-flex position-relative rounded-2">
                <input 
                  className="form-control my-auto ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder" 
                  type="text" 
                  placeholder="Search by name, id, email, contact number" 
                  value="" 
                  style={{ width: '100%', height: 'fit-content', paddingLeft: '0.5rem', paddingRight: '2.5rem' }}
                />
                <svg 
                  stroke="currentColor" 
                  fill="none" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  height="1em" 
                  width="1em" 
                  xmlns="http://www.w3.org/2000/svg" 
                  style={{ 
                    color: 'black', 
                    position: 'absolute', 
                    top: '50%', 
                    right: '1.5rem', 
                    height: '1.2rem', 
                    width: '1.2rem', 
                    transform: 'translateY(-50%)', 
                    opacity: 0.4 
                  }}
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <div className="col-12 col-md-4 d-flex align-items-center justify-content-end gap-2">
                <button title="Export to Pdf" className="btn fw-bold rounded-2 bg-light text-dark border dark-placeholder">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="fs-6 align-items-center text-danger" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path>
                  </svg>
                </button>
                <select className="form-select rounded-2 bg-light text-dark border dark-placeholder" style={{ width: '8rem' }}>
                  <option value="">All</option>
                  <option value="active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <button title="Export to Xlsx" className="btn fw-bold rounded-2 bg-light text-dark border">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="fs-6 align-items-center text-success" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z"></path>
                  </svg>
                </button>
                <div className="rounded-2 border" style={{ position: 'relative' }}>
                  <span className="btn border-0 rounded-2 bg-light text-dark border">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path>
                    </svg>
                    <div className="px-2 shadow flex-column py-2 shadow rounded-2 border bg-light text-dark border" style={{ position: 'absolute', zIndex: 1, right: '0px', top: '95%', width: '150px', display: 'none' }}>
                      <div className="d-flex flex-nowrap justify-content-between" style={{ cursor: 'pointer' }}>All <span>0</span></div>
                      <div className="d-flex flex-nowrap justify-content-between" style={{ cursor: 'pointer' }}>HR <span>2</span></div>
                      <div className="d-flex flex-nowrap justify-content-between" style={{ cursor: 'pointer' }}>Manager <span>2</span></div>
                      <div className="d-flex flex-nowrap justify-content-between" style={{ cursor: 'pointer' }}>Employee <span>7</span></div>
                    </div>
                  </span>
                </div>
                <button title="Sort" className="btn fw-bold rounded-2 bg-light text-dark border">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" className="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polygon fill="#546E7A" points="38,33 38,5 34,5 34,33 28,33 36,43 44,33"></polygon>
                    <g fill="#2196F3">
                      <path d="M19.2,20H9v-2l4.8-5.1c0.4-0.4,0.7-0.8,0.9-1.1c0.2-0.3,0.5-0.6,0.6-0.9c0.2-0.3,0.3-0.5,0.3-0.8 c0.1-0.2,0.1-0.5,0.1-0.7c0-0.7-0.2-1.2-0.5-1.6c-0.3-0.4-0.8-0.6-1.4-0.6c-0.3,0-0.7,0.1-0.9,0.2c-0.3,0.1-0.5,0.3-0.7,0.5 c-0.2,0.2-0.3,0.5-0.4,0.8s-0.1,0.6-0.1,1h-3c0-0.7,0.1-1.3,0.4-1.9c0.2-0.6,0.6-1.1,1-1.6c0.5-0.4,1-0.8,1.6-1.1 c0.6-0.3,1.4-0.4,2.2-0.4c0.8,0,1.5,0.1,2.1,0.3c0.6,0.2,1.1,0.5,1.5,0.8s0.7,0.8,0.9,1.3c0.2,0.5,0.3,1.1,0.3,1.8 c0,0.5-0.1,1-0.2,1.4s-0.4,0.9-0.7,1.4s-0.6,0.9-1,1.4c-0.4,0.5-0.9,1-1.4,1.5l-2.6,2.8h6.4V20z"></path>
                      <path d="M16.2,43h-3V31.6l-3.5,1.1v-2.4l6.2-2.2h0.3V43z"></path>
                    </g>
                  </svg>
                </button>
                <button 
                  className="btn fw-bold rounded-2 bg-light text-dark border" 
                  title="Add Employee"
                  onClick={handleAddButtonClick}
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="fs-5 align-items-center text-success" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="clear-both"></div>
          <div>
            <div className="rounded-2 Scroller_scroller__4F4jf" style={{ height: 'fit-content', maxHeight: '75vh', overflow: 'auto', position: 'relative', border: 'var(--borderLight)' }}>
              <table className="table mb-0 table-hover">
                <thead>
                  <tr>
                    <th style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>#</th>
                    <th style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>User Profile</th>
                    <th style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Position</th>
                    <th style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Department</th>
                    <th style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Account</th>
                    <th className="text-center" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Status</th>
                    <th style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Email</th>
                    <th style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Contact No</th>
                    <th className="text-end" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'rgb(238, 238, 238)', color: 'rgb(83, 88, 98)', border: 'none', position: 'sticky', top: '0rem', zIndex: 2 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={employee.id}>
                      <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>{index + 1}</td>
                      <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                        <div className="d-flex align-items-center gap-3 mx-2">
                          <div style={{ height: '30px', width: '30px', backgroundColor: 'rgb(204, 204, 204)', borderRadius: '50%', fontSize: '1rem', fontWeight: 'bold', color: 'rgb(255, 255, 255)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={employee.profileImage} alt={employee.name} style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="badge-primary" style={{ margin: '0px 0px 0px -0.2rem', width: 'fit-content', padding: '1px' }}>{employee.id}</span>
                            <span className="text-capitalize" style={{ fontSize: '1rem', margin: '0px', color: 'black' }}>{employee.name}</span>
                          </div>
                        </div>
                      </td>
                      <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>{employee.position}</td>
                      <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>{employee.department}</td>
                      <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>{employee.account}</td>
                      <td className="text-success text-center py-2 text-capitalize" style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                        <span className="badge-success border">{employee.status}</span>
                      </td>
                      <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                        <span className="copy-button">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"></path>
                          </svg>
                        </span>
                        {employee.email}
                      </td>
                      <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>{employee.contact}</td>
                      <td style={{ verticalAlign: 'middle', whiteSpace: 'pre', background: 'transparent', color: 'var(--secondaryDashColorDark)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                        <div className="d-flex w-100 justify-content-end gap-2 align-items-center" style={{ width: 'fit-content' }}>
                          <button 
                            className="btn" 
                            style={{ color: 'black' }}
                            onClick={() => handleViewClick(employee)}
                          >
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path>
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"></path>
                            </svg>
                          </button>
                          <button 
                            className="btn" 
                            style={{ color: 'black' }}
                            onClick={() => handleEditClick(employee)}
                          >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
                            </svg>
                          </button>
                          <button 
                            className="btn" 
                            style={{ color: 'red' }}
                            onClick={() => handleDeleteClick(employee.id)}
                          >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cntainer-fluid d-flex flex-column-reverse gap-4 py-2 px-2 rounded-2 gap-md-0 flex-md-row w-100 justify-content-between align-items-center my-2" style={{ background: 'var(--primaryDashMenuColor)' }}>
              <div className="d-flex flex-column-reverse gap-4 py-1 px-2 rounded-2 gap-md-0 flex-md-row w-100 justify-content-between align-items-center" style={{ background: 'var(--secondaryDashMenuColor)' }}>
                <div className="my-auto" style={{ color: 'black' }}>Showing 1 to {employees.length} of {employees.length} results</div>
                <div className="d-flex align-items-center gap-1">
                  <button className="btn bg-light text-dark rounded-2 border shadow-sm mx-1 d-flex align-items-center gap-2" disabled="">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="my-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <polyline fill="none" strokeWidth="2" points="9 6 15 12 9 18" transform="matrix(-1 0 0 1 24 0)"></polyline>
                    </svg>
                    <span className="d-none d-md-flex">Previous</span>
                  </button>
                  <div className="pagination d-flex flex-nowrap gap-2">
                    <button className="bg-primary text-white border-0 rounded-2" style={{ border: 'none', height: '2.3rem', width: '2.3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</button>
                    {employees.length > 10 && (
                      <button className="bg-light text-dark border rounded-2" style={{ border: 'none', height: '2.3rem', width: '2.3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</button>
                    )}
                  </div>
                  <button className="btn bg-light text-dark rounded-2 border shadow-sm mx-1 d-flex align-items-center gap-2" disabled={employees.length <= 10}>
                    <span className="d-none d-md-flex">Next</span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="my-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <polyline fill="none" strokeWidth="2" points="9 6 15 12 9 18"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Employee;