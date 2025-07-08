import React from 'react'

// Lazy Imports
const Dashboard = React.lazy(() => import('../views/hr/HRdashboard/Dashboard'))
// Employee
const MyEmployee =  React.lazy(()=> import('../views/hr/employee/Employee'))
// salary
const Salary =  React.lazy(()=> import('../views/hr/salary/Salary'))

const MyAttendance = React.lazy(() => import('../views/hr/attendance/myAttendance/My'))
const AttendanceRegister = React.lazy(() => import('../views/hr/attendance/attendanceRegister/AttendanceRegister'))
const TodaysAttendance = React.lazy(() => import('../views/hr/attendance/todayAttendance/TodayAttendance'))
const ViewAttendance = React.lazy(() => import('../views/hr/attendance/viewAttendance/ViewAttendance'))
const UpdateAttendance = React.lazy(() => import('../views/hr/attendance/updateAttendance/UpdateAttendance'))
const ShiftManage = React.lazy(() => import('../views/hr/attendance/shiftManage/ShiftManagement'))

const NCNSSandwich = React.lazy(() => import('../views/hr/attendance/ncnsSandwich/NcnsSandwich'))


const ApplyLeave = React.lazy(() => import('../views/hr/leaveManagement/apply/ApplyLeave'))
const PendingLeave = React.lazy(() => import('../views/hr/leaveManagement/pending/PendingLeave'))
const AcceptedLeave = React.lazy(() => import('../views/hr/leaveManagement/accepted/AccepetLeave'))
const RejectedLeave = React.lazy(() => import('../views/hr/leaveManagement/rejected/RejectedLeave'))
const AssignLeave = React.lazy(() => import('../views/hr/leaveManagement/assign/AssignLeave'))
const LeaveBalance = React.lazy(() => import('../views/hr/leaveManagement/balance/LeaveBalance'))
const LeaveRegister = React.lazy(() => import('../views/hr/leaveManagement/leaveRegister/LeaveRegister'))

const PayrollDashboard = React.lazy(() => import('../views/hr/payroll/dashboard/PayrollDashboard'))
const RunPayroll = React.lazy(() => import('../views/hr/payroll/run/RunPayroll'))
const SalarySlips = React.lazy(() => import('../views/hr/payroll/slips/SalarySlips'))
const MySalarySlip = React.lazy(() => import('../views/hr/payroll/mySlip/MySalarySlip'))

const Roles = React.lazy(() => import('../views/hr/managementUnit/roles/Roles'))
const Positions = React.lazy(() => import('../views/hr/managementUnit/positions/Positions'))
const Departments = React.lazy(() => import('../views/hr/managementUnit/departments/Departments'))

const Company = React.lazy(() => import('../views/hr/company/Company'))
const Notice = React.lazy(() => import('../views/hr/notice/Notice'))

const Raise = React.lazy(() => import('../views/hr/myRequest/raise/RaiseRequest'))
const Open = React.lazy(() => import('../views/hr/myRequest/open/OpenRequest'))
const Closed = React.lazy(() => import('../views/hr/myRequest/closed/ClosedRequest'))

const Holiday = React.lazy(() => import('../views/hr/holiday/Holiday'))


const Profile = React.lazy(() => import('../views/hr/profile/Profile'))

const ClosedTeamRequest = React.lazy(() => import('../views/hr/teamRequest/closed/ClosedRequest'))

const Weekend = React.lazy(() => import('../views/hr/weekend/Weekend'))


const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/HRdashboard', name: 'Dashboard', element: Dashboard },
  { path: '/employee', name: 'Employee', element: MyEmployee}, 
  { path: '/salary', name: 'Salary', element: Salary}, 


  // Attendance
  { path: '/attendance/myAttendance', name: 'My Attendance', element: MyAttendance },
  { path: '/attendance/attendanceRegister', name: 'Attendance Register', element: AttendanceRegister },
  { path: '/attendance/todayAttendance', name: 'Today\'s Attendance', element: TodaysAttendance },
  { path: '/attendance/viewAttendance', name: 'View Attendance', element: ViewAttendance },
  { path: '/attendance/updateAttendance', name: 'Update Attendance', element: UpdateAttendance },
  { path: '/attendance/shiftManage', name: 'Shift Management', element: ShiftManage },
  { path: '/attendance/ncnsSandwich', name: 'NCNS & Sandwich', element: NCNSSandwich },

  // // Leave Management
  { path: '/leaveManagement/apply', name: 'Apply Leave', element: ApplyLeave },
  { path: '/leaveManagement/pending', name: 'Pending Leave', element: PendingLeave },
  { path: '/leaveManagement/accepted', name: 'Accepted Leave', element: AcceptedLeave },
  { path: '/leaveManagement/rejected', name: 'Rejected Leave', element: RejectedLeave },
  { path: '/leaveManagement/assign', name: 'Assign Leave', element: AssignLeave },
  { path: '/leaveManagement/balance', name: 'Emp Leave Balance', element: LeaveBalance },
  { path: '/leaveManagement/leaveRegister', name: 'Leave Register', element: LeaveRegister },

  // // Payroll
  { path: '/payroll/dashboard', name: 'Payroll Dashboard', element: PayrollDashboard },
  { path: '/payroll/run', name: 'Run Payroll', element: RunPayroll },
  { path: '/payroll/slips', name: 'Employee Salary Slips', element: SalarySlips },
  { path: '/payroll/mySlip', name: 'My Salary Slip', element: MySalarySlip },

  // // Management
  { path: '/managementUnit/roles', name: 'Roles', element: Roles },
  { path: '/managementUnit/positions', name: 'Positions', element: Positions },
  { path: '/managementUnit/departments', name: 'Departments', element: Departments },

  // // Company & Notice
  { path: '/company', name: 'Company', element: Company },
  { path: '/notice', name: 'Notice', element: Notice },

  { path: '/myRequest/open', name: 'Open Request', element: Open },
  { path: '/myRequest/raise', name: 'Raise Request', element: Raise },
  { path: '/myRequest/closed', name: 'Closed Request', element: Closed },

  { path: '/holiday', name: 'Holiday', element: Holiday },

  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/weekend', name: 'Weekend Setting', element: Weekend },





  { path: '/teamRequest/closed', name: 'Closed Request', element: ClosedTeamRequest },





]

export default routes
