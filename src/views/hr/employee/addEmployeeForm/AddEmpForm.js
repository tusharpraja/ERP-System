import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmpForm = ({ onClose, onSubmit, employee }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    accountAccess: '3',
    role: '',
    gender: 'male',
    firstName: '',
    lastName: '',
    dob: '',
    contact: '',
    department: '',
    position: '',
    dateOfJoining: '',
    profileImage: null,
    reportingManager: '',
    reportingHr: '',
    shift: '',
    bankName: '',
    bankAccountNumber: '',
    ifscCode: '',
    uanNumber: '',
    panNumber: '',
    locationType: 'On Sight'
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        email: employee.email || '',
        password: '',
        accountAccess: employee.account === 'HR' ? '2' : employee.account === 'Manager' ? '4' : '3',
        role: employee.position || '',
        gender: 'male',
        firstName: employee.name ? employee.name.split(' ')[0] : '',
        lastName: employee.name ? employee.name.split(' ').slice(1).join(' ') : '',
        dob: '',
        contact: employee.contact || '',
        department: employee.department || '',
        position: employee.position || '',
        dateOfJoining: '',
        profileImage: employee.profileImage || null,
        reportingManager: '',
        reportingHr: '',
        shift: '',
        bankName: '',
        bankAccountNumber: '',
        ifscCode: '',
        uanNumber: '',
        panNumber: '',
        locationType: 'On Sight'
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`,
      account: formData.accountAccess === '2' ? 'HR' : formData.accountAccess === '4' ? 'Manager' : 'Employee',
      status: 'active'
    };
    onSubmit(employeeData);
  };

  return (
    <div className="mainbar-grid">
      <div className="pb-4" style={{ overflow: 'auto' }}>
        <div className="container-fluid py-3">
          <div className="my-auto mt-2">
            <div className="d-flex align-items-center gap-2">
              <h5 className="m-0 p-0 text-capitalize" style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>
                {employee ? 'Edit Employee' : 'Create New Employee'}
              </h5>
            </div>
            <p className="m-0" style={{ color: 'var(--Subtittles)' }}>
              {employee ? 'You can edit employee details here.' : 'You can create new user here.'}
            </p>
          </div>
          
          <div className="my-2">
            <form className="row mt-3 row-gap-2 m-0" encType="multipart/form-data" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Email <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              {!employee && (
                <div className="col-12 col-md-6 col-lg-4">
                  <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                    Password <sup className="text-danger fs-6">*</sup>
                  </label>
                  <div className="form-input position-relative">
                    <input
                      className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className="fs-5 text-muted my-0"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-55%)',
                        right: '3%',
                        cursor: 'pointer',
                      }}
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 15 15"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              )}

              {/* Account Access */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Account access <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <select
                    className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    name="accountAccess"
                    value={formData.accountAccess}
                    onChange={handleChange}
                    required
                  >
                    <option value="2">HR</option>
                    <option value="3">Employee</option>
                    <option value="4">Manager</option>
                  </select>
                </div>
              </div>

              {/* Role */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Role <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <select
                    className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option disabled value="">Select your option</option>
                    <option value="67c68d65a06d030b252016be">Digital Marketing Intern</option>
                    <option value="67c68e6aa06d030b2520194d">HR Manager</option>
                    <option value="67c6fee9a06d030b25216bb7">hr</option>
                    <option value="67c804b5a06d030b25266312">Software Enginner</option>
                    <option value="67c81996a06d030b2526d44d">Office Assistant</option>
                    <option value="67d7dfe6eaef720b2d445d77">UI/UX</option>
                    <option value="6805f547d2d0180a381dbcf9">w</option>
                  </select>
                </div>
              </div>

              {/* Gender */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Gender <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-flex align-items-center gap-2 form-check form-check-inline"
                    style={{ color: 'var(--secondaryDashColorDark)' }}
                  >
                    <input 
                      name="gender" 
                      type="radio" 
                      className="form-check-input" 
                      value="male" 
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                    />
                    <label title="" className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div
                    className="d-flex align-items-center gap-2 form-check form-check-inline"
                    style={{ color: 'var(--secondaryDashColorDark)' }}
                  >
                    <input 
                      name="gender" 
                      type="radio" 
                      className="form-check-input" 
                      value="female" 
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                    />
                    <label title="" className="form-check-label">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              {/* First Name */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  First Name <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Last Name <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* DOB */}
              <div className="col-12 col-md-6 col-lg-4" style={{ position: 'relative' }}>
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  DOB <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="date"
                    name="dob"
                    placeholder="DOB"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Contact No */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Contact No <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <div className="form-input">
                    <input
                      className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                      type="text"
                      name="contact"
                      maxLength="10"
                      placeholder="Contact No"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Department */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Department <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <select
                    className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select your option
                    </option>
                    <option value="66ebb1f330112f29b4c0abc7">Digital Marketing</option>
                    <option value="67c68e9aa06d030b252019c2">Human Resource</option>
                    <option value="67c80508a06d030b252664bf">Software</option>
                    <option value="67df9a6ad2d0180a38033bd8">sales</option>
                    <option value="67fdd913d2d0180a38153138">Research and Development</option>
                  </select>
                </div>
              </div>

              {/* Position */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Position <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <select
                    className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select your option
                    </option>
                    <option value="67c68d76a06d030b252016e9">Digital Marketing Intern</option>
                    <option value="67c68e77a06d030b25201972">HR Manager</option>
                    <option value="67c6fefda06d030b25216c1b">hr</option>
                    <option value="67c7e55ca06d030b252583d8">employee</option>
                    <option value="67c7fd0c20c167c6d50e6af3">Admin</option>
                    <option value="67c804e1a06d030b252663fb">Office Assistant</option>
                    <option value="67fce70bd2d0180a38142cc7">Business Manager</option>
                  </select>
                </div>
              </div>

              {/* Date Of Joining */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Date Of Joining <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="date"
                    name="dateOfJoining"
                    placeholder="Date Of Joining"
                    value={formData.dateOfJoining}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Profile Image */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>Profile Image</label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="file"
                    name="profileImage"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Reporting Manager */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>Reporting Manager</label>
                <div className="form-input">
                  <select
                    className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    name="reportingManager"
                    value={formData.reportingManager}
                    onChange={handleChange}
                  >
                    <option value="">Select your option</option>
                  </select>
                </div>
              </div>

              {/* Reporting Hr */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>Reporting Hr</label>
                <div className="form-input">
                  <select
                    className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    name="reportingHr"
                    value={formData.reportingHr}
                    onChange={handleChange}
                  >
                    <option value="">Select your option</option>
                  </select>
                </div>
              </div>

              {/* Shift */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>Shift</label>
                <div className="form-input">
                  <select
                    className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    name="shift"
                    value={formData.shift}
                    onChange={handleChange}
                  >
                    <option value="">Select Shift</option>
                    <option value="67c693eea06d030b25202766">Demo Shift → 9:30 AM → 6:30 PM</option>
                    <option value="67c81cfba06d030b2526ef45">Demo Shift 2 → 4:30 PM → 1:00 AM</option>
                    <option value="67c82704a06d030b25272343">Afternoon Shift → 12:00 PM → 9:00 PM</option>
                    <option value="67ce6e637958c20b965c6183">,lkjnj → 12:20 PM → 7:20 PM</option>
                    <option value="67ce70d27958c20b965c6b57">MUN-C → 12:24 AM → 9:24 PM</option>
                    <option value="67ce76c27958c20b965d058e">UK → 1:50 PM → 10:50 PM</option>
                  </select>
                </div>
              </div>

              {/* Bank Name */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Bank Name <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="text"
                    name="bankName"
                    placeholder="Please enter bank name"
                    value={formData.bankName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Bank Account Number */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Bank Account Number <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="number"
                    name="bankAccountNumber"
                    placeholder="Please enter bank account number"
                    value={formData.bankAccountNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* IFSC Code */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  IFSC Code <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="text"
                    name="ifscCode"
                    placeholder="Please enter IFSC code"
                    value={formData.ifscCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* UAN Number */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  UAN Number <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="text"
                    name="uanNumber"
                    placeholder="Please enter UAN number"
                    value={formData.uanNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Pan Number */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Pan Number <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <input
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    type="text"
                    name="panNumber"
                    placeholder="Please enter Pan number"
                    value={formData.panNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Location Type */}
              <div className="col-12 col-md-6 col-lg-4">
                <label style={{ color: 'var(--secondaryDashColorDark)' }}>
                  Location Type <sup className="text-danger fs-6">*</sup>
                </label>
                <div className="form-input">
                  <select
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    name="locationType"
                    value={formData.locationType}
                    onChange={handleChange}
                    required
                  >
                    <option value="On Sight">on-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybread">Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="form-group col-12 d-flex gap-5" id="form-submit-button">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{
                    backgroundColor: 'var(--primaryDashColorDark)',
                    color: 'var(--primaryDashMenuColor)',
                    border: 'none',
                    outline: 'none',
                    borderRadius: '12px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--primaryDashColorLight)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--primaryDashColorDark)';
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path>
                  </svg>
                  {employee ? 'Update' : 'Submit'}
                </button>

                <button
                  className="btn btn-danger"
                  type="button"
                  style={{ backgroundColor: 'red', color: 'white', border: 'none', outline: 'none' }}
                  onClick={onClose}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path>
                  </svg>{' '}
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="HrPannelFooter bg-dark w-100 text-white"
        style={{ zIndex: 50, position: 'absolute', bottom: '0px' }}
      >
        <div
          className="d-flex justify-content-center align-items-center gap-5 p-2"
          style={{
            backgroundColor: 'var(--primaryDashMenuColor)',
            color: 'var(--primaryDashColorDark)',
          }}
        >
          <span className="d-none d-md-flex">
            <span className="text-capitalize">Monday, 05/05/2025, 01:07:37 PM</span>
          </span>
          <span className="d-flex align-items-center gap-2">
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
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>{' '}
            <span className="d-none d-md-flex">Connected</span>
          </span>
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
            </svg>{' '}
            Chrome
          </span>
          <span title="IP Address" className="d-flex align-items-center gap-1">
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
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-8a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h8zm-4 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1 -12h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>{' '}
            122.161.49.223
          </span>
          <div>Unable to retrieve your location.</div>
        </div>
      </div>
    </div>
  );
};

export default AddEmpForm;