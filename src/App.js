import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import './scss/examples.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const HrLayout = React.lazy(() => import('./layout/HrLayout'))
const AdminLayout = React.lazy(() => import('./layout/AdminLayout (1)'))
const MgrLayout = React.lazy(() => import('./layout/MgrLayout'))

const LogIn = React.lazy(() => import('./views/auth/login/Login'))

// Pages
const ResetPassword = React.lazy(() => import('./views/auth/reset/ResetPassword'))
const ChangePassword = React.lazy(() => import('./views/auth/changepassword/ChangePass'))
const OtpValidation = React.lazy(() => import('./views/auth/otpvalidation/OTPValidation'))
const NewPassword = React.lazy(() => import('./views/auth/newpass/NewPassword'))
const Register = React.lazy(() => import('./views/auth/register/Register'))
const Page404 = React.lazy(() => import('./views/auth/page404/Page404'))
const Page500 = React.lazy(() => import('./views/auth/page500/Page500'))

// HR Components
const MyEmployee = React.lazy(() => import('./views/hr/employee/Employee'))
const AddEmpForm = React.lazy(() => import('./views/hr/employee/addEmployeeForm/AddEmpForm'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          {/* Auth Pages */}
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/otpvalidation" element={<OtpValidation />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/404" element={<Page404 />} />
          <Route exact path="/500" element={<Page500 />} />

          {/* HR Routes */}
          <Route path="/hr/*" element={<HrLayout />}>
            {/* Employee Routes */}
            <Route path="employee" element={<MyEmployee />} />
            <Route path="employee/add" element={<AddEmpForm />} />
            
            {/* Other HR routes can be added here */}
          </Route>

          {/* Other Layout Routes */}
          <Route path="/*" element={<DefaultLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/manager/*" element={<MgrLayout />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App