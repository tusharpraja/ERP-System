import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilClock, cilCalendar, cilMoney, cilTask, cilSettings, cilUser, cilFile, cilBell, cilBuilding, cilFolder, cilBriefcase, cilList } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/hr/Hrdashboard',  // Updated path for HR Dashboard
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Employee',
    to: '/hr/employee',  // Updated path for HR Dashboard
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,

  },
  {
    component: CNavItem,
    name: 'Salary',
    to: '/hr/salary',  // Updated path for HR Dashboard
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,


  },

//   // Attendance
  {
    component: CNavGroup,
    name: 'Attendance',
    icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'My Attendance', to: '/hr/attendance/myAttendance' },
      { component: CNavItem, name: 'Attendance Register', to: '/hr/attendance/attendanceRegister' },
      { component: CNavItem, name: 'Today\'s Attendance', to: '/hr/attendance/todayAttendance' },
      { component: CNavItem, name: 'View Attendance', to: '/hr/attendance/viewAttendance' },
      { component: CNavItem, name: 'Update Attendance', to: '/hr/attendance/updateAttendance' },
      { component: CNavItem, name: 'Shift Management', to: '/hr/attendance/shiftManage' },
      { component: CNavItem, name: 'NCNS & Sandwich', to: '/hr/attendance/ncnsSandwich' },
    ],
  },

//   // Leave Management
  {
    component: CNavGroup,
    name: 'Leave Management',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Apply Leave', to: '/hr/leaveManagement/apply' },
      { component: CNavItem, name: 'Pending', to: '/hr/leaveManagement/pending' },
      { component: CNavItem, name: 'Accepted', to: '/hr/leaveManagement/accepted' },
      { component: CNavItem, name: 'Rejected', to: '/hr/leaveManagement/rejected' },
      { component: CNavItem, name: 'Assign Leave', to: '/hr/leaveManagement/assign' },
      { component: CNavItem, name: 'Emp Leave Balance', to: '/hr/leaveManagement/balance' },
      { component: CNavItem, name: 'Leave Register', to: '/hr/leaveManagement/leaveRegister' },
    ],
  },

//   // Payroll
  {
    component: CNavGroup,
    name: 'Payroll',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Payroll Dashboard', to: '/hr/payroll/dashboard' },
      { component: CNavItem, name: 'Run Payroll', to: '/hr/payroll/run' },
      { component: CNavItem, name: 'Employee Salary Slips', to: '/hr/payroll/slips' },
      { component: CNavItem, name: 'My Salary Slip', to: '/hr/payroll/mySlip' },
    ],
  },

//   // Management Unit
  {
    component: CNavGroup,
    name: 'Management Unit',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Roles', to: '/hr/managementUnit/roles' },
      { component: CNavItem, name: 'Positions', to: '/hr/managementUnit/positions' },
      { component: CNavItem, name: 'Departments', to: '/hr/managementUnit/departments' },
    ],
  },

//   // Company
  {
    component: CNavItem,
    name: 'Company',
    to: '/hr/company',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  },

//   // Notice
  {
    component: CNavItem,
    name: 'Notice',
    to: '/hr/notice',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'My Request',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Raise Request', to: '/hr/myRequest/raise' },
      { component: CNavItem, name: 'Open Request', to: '/hr/myRequest/open' },
      { component: CNavItem, name: 'Closed Request', to: '/hr/myRequest/Closed' },
    ],
  },
  {
    component: CNavGroup,
    name: 'Team Request',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Open Request', to: '/hr/teamRequest/open' },
      { component: CNavItem, name: 'Closed Request', to: '/hr/teamRequest/closed' },
    ],
  },
  {
    component: CNavItem,
    name: 'Holiday',
    to: '/hr/holiday',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/hr/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Weekend Setting',
    to: '/hr/weekend',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  
]

export default _nav
