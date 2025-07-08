import React, { useState } from 'react'
import { CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CRow, CButton } from '@coreui/react'
import { Link } from 'react-router-dom'
import './changepass.css'

const ChangePass = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword) {
      setPasswordMatch(true)
      // Call API or logic for password change
      console.log('Password changed successfully')
    } else {
      setPasswordMatch(false)
    }
  }

  return (
    <div className="change-bg d-flex justify-content-center align-items-center min-vh-100">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} xs={12}>
            <CCard className="p-4" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
              <CCardBody>
                {/* ✅ Logo Section */}
                <div className="text-center mb-4">
                  <img
                    src="src/assets/images/EPC logo.jpg"
                    alt="Company Logo"
                    style={{ height: '90px' }}
                  />
                </div>

                <h2 className="mb-4 text-center">Change Password</h2>

                <CForm>
                  {/* New Password Field */}
                  <CFormInput
                    type="password"
                    placeholder="Enter your new password"
                    className="mb-3"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />

                  {/* Confirm Password Field */}
                  <CFormInput
                    type="password"
                    placeholder="Confirm your new password"
                    className="mb-3"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />

                  {/* Password Match Error Message */}
                  {!passwordMatch && (
                    <div className="text-danger mb-3">Passwords do not match</div>
                  )}

                  <CButton color="primary" className="w-100 mb-3" onClick={handlePasswordChange}>
                    Change Password
                  </CButton>

                  <div className="text-left">
                    <Link to="/login">
                      <CButton color="secondary" variant="outline">
                        Back to Login
                      </CButton>
                    </Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ChangePass
