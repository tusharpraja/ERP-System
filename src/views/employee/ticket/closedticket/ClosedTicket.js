import React from 'react';
import { CCard, CCardHeader, CCardBody, CTable, CBadge, CButton } from '@coreui/react';

const ClosedTicket = () => {
  // Sample data for closed tickets
  const closedTickets = [
    {
      id: 'TKT-001',
      subject: 'Login issues',
      closedDate: '2023-05-15',
      status: 'Resolved',
      priority: 'Medium',
      assignedTo: 'Support Team'
    },
    {
      id: 'TKT-002',
      subject: 'Payment gateway error',
      closedDate: '2023-05-14',
      status: 'Completed',
      priority: 'High',
      assignedTo: 'Dev Team'
    },
    {
      id: 'TKT-003',
      subject: 'Dashboard not loading',
      closedDate: '2023-05-13',
      status: 'Resolved',
      priority: 'Low',
      assignedTo: 'Support Team'
    },
    {
      id: 'TKT-004',
      subject: 'Password reset problem',
      closedDate: '2023-05-12',
      status: 'Completed',
      priority: 'Medium',
      assignedTo: 'Admin Team'
    },
  ];

  const getBadgeColor = (status) => {
    switch(status) {
      case 'Resolved': return 'success';
      case 'Completed': return 'primary';
      default: return 'secondary';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <CCard>
      <CCardHeader>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Closed Tickets</h5>
          <div>
            <CButton color="primary" size="sm">Export</CButton>
          </div>
        </div>
      </CCardHeader>
      <CCardBody>
        <CTable striped hover responsive>
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Subject</th>
              <th>Closed Date</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {closedTickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.closedDate}</td>
                <td>
                  <CBadge color={getBadgeColor(ticket.status)}>
                    {ticket.status}
                  </CBadge>
                </td>
                <td>
                  <CBadge color={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </CBadge>
                </td>
                <td>{ticket.assignedTo}</td>
                <td>
                  <CButton color="info" size="sm">View</CButton>
                  <CButton color="secondary" size="sm" className="ms-2">Reopen</CButton>
                </td>
              </tr>
            ))}
          </tbody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default ClosedTicket;