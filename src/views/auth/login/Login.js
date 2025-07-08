import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Corrected import
import { Link } from 'react-router-dom'; // Added Link import

import './Login.css';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Corrected

  // Dummy users data
  const dummyUsers = [
    { username: 'admin', password: 'password123', role: 'HR' },
    { username: 'employee', password: 'password123', role: 'Employee' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if entered credentials are correct
    const user = dummyUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Redirect based on the role of the user
      if (user.role === 'HR') {
        navigate('/hr-dashboard'); // Corrected to use navigate
      } else if (user.role === 'Employee') {
        navigate('/employee-dashboard'); // Corrected to use navigate
      }
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center min-vh-100">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} lg={5}>
            <CCard>
              <CCardBody className="p-4">
                <div className="text-center mb-4">
                  <img
                    src="src/assets/images/EPC logo.jpg"
                    alt="Company Logo"
                    style={{ width: '120px' }}
                  />
                </div>

                <CForm onSubmit={handleLogin}>
                  <h2 className="text-center mb-3">Sign In</h2>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="username"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                  </CInputGroup>

                  <CRow>
                    <CCol xs={6}>
                      <CButton color="primary" className="px-4 w-100" type="submit">
                        Login
                      </CButton>
                    </CCol>
                    <CCol xs={6} className="text-right d-flex align-items-center justify-content-end">
                      <Link to="/reset-password">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </Link>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
