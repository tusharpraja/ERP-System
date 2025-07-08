import React from 'react'
import './Myticket.css'

const Myticket = () => {
  const tickets = [
    {
      id: 1,
      subject: 'Login Issue',
      department: 'IT',
      priority: 'High',
      status: 'Open',
      createdOn: '2025-04-15',
    },
    {
      id: 2,
      subject: 'Salary not credited',
      department: 'Finance',
      priority: 'Medium',
      status: 'In Progress',
      createdOn: '2025-04-12',
    },
    {
      id: 3,
      subject: 'ID Card Missing',
      department: 'Admin',
      priority: 'Low',
      status: 'Resolved',
      createdOn: '2025-04-10',
    },
  ]

  return (
    <div className="myticket-container">
      <h2>My Tickets</h2>
      <div className="ticket-table-wrapper">
        <table className="ticket-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Department</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created On</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.department}</td>
                <td>{ticket.priority}</td>
                <td>
                  <span className={`status-badge ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Myticket
