import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import './NewPassword.css'

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    alert('Password updated successfully!')
    navigate('/login')
  }

  return (
    <div className="reset-bg">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} xs={12}>
            <CCard className="p-4" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
              <CCardBody>
                <h2 className="mb-4 text-center">Set New Password</h2>

                <CForm onSubmit={handleSubmit}>
                  <CFormInput
                    type="password"
                    placeholder="Enter new password"
                    className="mb-3"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <CFormInput
                    type="password"
                    placeholder="Confirm new password"
                    className="mb-3"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <CButton type="submit" color="primary" className="w-100 mb-3">
                    Update Password
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default NewPassword
