import React, { useState } from 'react'
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
import '/src/views/auth/otpvalidation/OTPValidation.js'

const OTPValidation = () => {
  const [otp, setOtp] = useState('')

  const handleChange = (e) => {
    setOtp(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add OTP validation logic here
    alert('OTP submitted: ' + otp)
  }

  return (
    <div className="reset-bg d-flex justify-content-center align-items-center min-vh-100">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} xs={12}>
            <CCard className="p-4" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
              <CCardBody>
                {/* OTP Section */}
                <div className="text-center mb-4">
                  <h2 className="mb-4">Enter OTP</h2>
                </div>

                <CForm onSubmit={handleSubmit}>
                  <CFormInput
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={handleChange}
                    className="mb-3"
                    required
                  />

                  <div>
                    <Link to="/new-password">
                    <CButton color="primary" className="w-100 mb-3" type="submit">
                    Validate OTP
                  </CButton>
                    
                    </Link>
                  </div>
                  

                  <div className="text-left">
                    <Link to="/reset-password">
                      <CButton color="secondary" variant="outline">
                        Back to Reset Password
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

export default OTPValidation
