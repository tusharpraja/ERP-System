import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CButton,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import './ResetPassword.css'

const ResetPassword = () => {
  return (
    <div className="reset-bg d-flex justify-content-center align-items-center min-vh-100">

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

                <h2 className="mb-4 text-center">Reset Password</h2>

                <CForm>
                  <CFormInput
                    type="email"
                    placeholder="Enter your registered email"
                    className="mb-3"
                    required
                  />
                  <div>
                    <Link to="/otpvalidation">
                    <CButton color="primary" className="w-100 mb-3">
                    Send Reset OTP
                  </CButton>
                    </Link>
                  </div>

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

export default ResetPassword
