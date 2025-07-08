import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilClock, cilCalendar, cilMoney, cilTask, cilSettings, cilUser, cilFile,
  cilPeople, cilListRich, cilCalendarCheck, cilCash, cilChartLine,
  cilBriefcase, cilLocationPin, cilSpreadsheet, cilEnvelopeOpen
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/adminDashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Employees',
    to: '/admin/employee',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Salary',
    to: '/admin/salary',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Attendance',
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Attendance',
        to: '/admin/attendance/my-attendance',
      },
      {
        component: CNavItem,
        name: 'Today\'s Attendance',
        to: '/admin/attendance/todays-attendance',
      },
      {
        component: CNavItem,
        name: 'View Attendance',
        to: '/admin/attendance/view',
      },
      {
        component: CNavItem,
        name: 'Attendance Register',
        to: '/admin/attendance/register',
      },
      {
        component: CNavItem,
        name: 'Update Attendance',
        to: '/admin/attendance/update',
      },
      {
        component: CNavItem,
        name: 'Shift Management',
        to: '/admin/attendance/shifts',
      },
      {
        component: CNavItem,
        name: 'NCNS & Sandwich',
        to: '/admin/attendance/ncns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Leave',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Leave Requests',
        to: '/admin/leave/requests',
      },
      {
        component: CNavItem,
        name: 'Approve Leave',
        to: '/admin/leave/approve',
      },
      {
        component: CNavItem,
        name: 'Rejected Leave',
        to: '/admin/leave/rejected',
      },
      {
        component: CNavItem,
        name: 'Leave Register',
        to: '/admin/leave/register',
      },
      {
        component: CNavItem,
        name: 'Leave Assign',
        to: '/admin/leave/assign',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Payroll',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Payroll Dashboard',
        to: '/admin/payroll/dashboard',
      },
      {
        component: CNavItem,
        name: 'Run Payroll',
        to: '/admin/payroll/run',
      },
      {
        component: CNavItem,
        name: 'Employee Salary Slips',
        to: '/admin/payroll/slips',
      },
      {
        component: CNavItem,
        name: 'My Salary Slip',
        to: '/admin/payroll/my-slip',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Tasks',
    to: '/admin/tasks',
    icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Reports',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Daily Report',
        to: '/admin/reports/daily',
      },
      {
        component: CNavItem,
        name: 'Marketing Report',
        to: '/admin/reports/marketing',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Management',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Roles',
        to: '/admin/management/roles',
      },
      {
        component: CNavItem,
        name: 'Positions',
        to: '/admin/management/positions',
      },
      {
        component: CNavItem,
        name: 'Departments',
        to: '/admin/management/departments',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Company',
    to: '/admin/company',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Locations',
    icon: <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Countries',
        to: '/admin/locations/countries',
      },
      {
        component: CNavItem,
        name: 'States',
        to: '/admin/locations/states',
      },
      {
        component: CNavItem,
        name: 'Cities',
        to: '/admin/locations/cities',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Notices',
    to: '/admin/notices',
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Requests',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Open Requests',
        to: '/admin/requests/open',
      },
      {
        component: CNavItem,
        name: 'Closed Requests',
        to: '/admin/requests/closed',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Holidays',
    to: '/admin/holidays',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Projects',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Project Bidding',
        to: '/admin/projects/bidding',
      },
      {
        component: CNavItem,
        name: 'Project Master',
        to: '/admin/projects/master',
      },
    ],
  },
]

export default _nav