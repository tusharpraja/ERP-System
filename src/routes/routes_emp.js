import { element } from 'prop-types'
import React from 'react'


const Dashboard = React.lazy(() => import('../views/employee/dashboard/Dashboard'))
// profile
const Profile = React.lazy(() => import('../views/employee/profile/Profile'))
// attendance
const Attendance = React.lazy(() => import('../views/employee/attendance/Attendance'))
// leave
const Leave =  React.lazy(() => import('../views/employee/leave/Leave'))
// salary
const Salary =  React.lazy(() => import('../views/employee/salary/Salary'))

// Base
const Task = React.lazy(() => import('../views/employee/task/Task'))
const Report = React.lazy(() => import('../views/employee/Reports/Report'))




//  Ticket
const Ticket = React.lazy(() => import('../views/employee/ticket/createticket/Createticket'))
const Myticket = React.lazy(() => import('../views/employee/ticket/myticket/Myticket'))
const Closedticket = React.lazy(() => import('../views/employee/ticket/closedticket/ClosedTicket'))




//Forms


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/profile', name: 'Profile', element: Profile },
  {path: '/attendance', name: 'Attendance', element: Attendance},
  { path: '/leave', name: 'Leave', element: Leave},
  { path: '/salary', name: 'Salary', element: Salary},

  { path: '/tickets/create', name: 'Create Ticket', element: Ticket },
  { path: '/tickets/my', name: 'My Tickets', element: Myticket },
  { path: '/tickets/closed', name: 'Closed Ticket', element: Closedticket },


  { path: '/task', name: 'Task', element: Task },
  { path: '/Report', name: 'Report', element: Report },



  

]

export default routes