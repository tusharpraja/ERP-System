import React, { useState } from 'react';
import {
  CCard, CCardBody, CCardText, CCardTitle, CBadge, CButton,
  CRow, CCol, CAvatar, CModal, CModalHeader, CModalBody, CModalTitle
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilUser, cilClock } from '@coreui/icons';
 
const ClosedRequests = () => {
  const [visible, setVisible] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
 
  const closedTickets = [
    {
      id: 'TKT0019',
      email: 'demo.emp@munc.in',
      you: true,
      subject: 'Solve Bugs',
      date: '24 Mar 2025, 13:25',
      updatedAt: '24 Mar 2025, 13:27',
      priority: 'High',
      to: ['demo.manager@munc.in'],
      cc: [
        'demo.admin@munc.in',
        'demo.hr@munc.in',
        'demoemp2@munc.in',
        'deepak@gmail.com'
      ],
      request: 'yyuiioo',
      updates: [
        {
          user: 'demo.emp@munc.in',
          message: 'hellloooo',
          time: '24 Mar 2025, 13:27'
        }
      ]
    },
 
    {
        id: 'TKT0020',
        email: 'demo.emp@munc.in',
        you: true,
        subject: 'Solve Bugs 2',
        date: '25 Mar 2025, 13:25',
        updatedAt: '25 Mar 2025, 13:27',
        priority: 'High',
        to: ['demo.manager@munc.in'],
        cc: [
          'demo.admin@munc.in',
          'demo.hr@munc.in',
          'demoemp2@munc.in',
          'deepak@gmail.com'
        ],
        request: 'yyuiioo',
        updates: [
          {
            user: 'demo.emp@munc.in',
            message: 'hellloooo',
            time: '25 Mar 2025, 13:27'
          }
        ]
      },
 
      {
        id: 'TKT0021',
        email: 'demo.emp@munc.in',
        you: true,
        subject: 'Solve Bugs',
        date: '22 Mar 2025, 11:25',
        updatedAt: '22 Mar 2025, 11:27',
        priority: 'High',
        to: ['demo.manager@munc.in'],
        cc: [
          'demo.admin@munc.in',
          'demo.hr@munc.in',
          'demoemp2@munc.in',
          'deepak@gmail.com'
        ],
        request: 'yyuiioo',
        updates: [
          {
            user: 'demo.emp@munc.in',
            message: 'hellloooo',
            time: '22 Mar 2025, 11:27'
          }
        ]
      },
 
      {
        id: 'TKT0022',
        email: 'demo.emp@munc.in',
        you: true,
        subject: 'Solve Bugs',
        date: '2 apr 2025, 13:00',
        updatedAt: '2 Apr 2025, 13:03',
        priority: 'High',
        to: ['demo.manager@munc.in'],
        cc: [
          'demo.admin@munc.in',
          'demo.hr@munc.in',
          'demoemp2@munc.in',
          'deepak@gmail.com'
        ],
        request: 'yyuiioo',
        updates: [
          {
            user: 'demo.emp@munc.in',
            message: 'hellloooo',
            time: '2 Apr 2025, 13:03'
          }
        ]
      },
 
      {
        id: 'TKT0023',
        email: 'demo.emp@munc.in',
        you: true,
        subject: 'Solve Bugs',
        date: '24 Mar 2025, 13:25',
        updatedAt: '24 Mar 2025, 13:27',
        priority: 'High',
        to: ['demo.manager@munc.in'],
        cc: [
          'demo.admin@munc.in',
          'demo.hr@munc.in',
          'demoemp2@munc.in',
          'deepak@gmail.com'
        ],
        request: 'yyuiioo',
        updates: [
          {
            user: 'demo.emp@munc.in',
            message: 'hellloooo',
            time: '24 Mar 2025, 13:27'
          }
        ]
      },
 
      {
        id: 'TKT0024',
        email: 'demo.emp@munc.in',
        you: true,
        subject: 'Solve Bugs',
        date: '29 Mar 2025, 13:25',
        updatedAt: '24 Mar 2025, 13:27',
        priority: 'High',
        to: ['demo.manager@munc.in'],
        cc: [
          'demo.admin@munc.in',
          'demo.hr@munc.in',
          'demoemp2@munc.in',
          'deepak@gmail.com'
        ],
        request: 'yyuiioo',
        updates: [
          {
            user: 'demo.emp@munc.in',
            message: 'hellloooo',
            time: '29 Mar 2025, 13:27'
          }
        ]
      },
    // Add other tickets here
  ];
 
  const getPriorityBadge = (priority) => {
    const map = {
      Urgent: { color: 'danger', label: 'Urgent' },
      High: { color: 'warning', label: 'High' },
      Medium: { color: 'info', label: 'Medium' }
    };
    return (
      <CBadge color={map[priority].color} className="ms-2">
        {map[priority].label}
      </CBadge>
    );
  };
 
  const openModal = (ticket) => {
    setSelectedTicket(ticket);
    setVisible(true);
  };
 
  return (
    <>
      <h5>
        Closed Request’s <CBadge color="primary">{closedTickets.length}</CBadge>
      </h5>
      <p className="text-muted">You can view all your team’s closed Request’s here</p>
 
      <CRow className="g-3">
        {closedTickets.map((ticket, index) => (
          <CCol key={index} xs={12} sm={6} md={4} lg={3}>
            <CCard onClick={() => openModal(ticket)} style={{ cursor: 'pointer' }}>
              <CCardBody>
                <div className="d-flex justify-content-between mb-2">
                  <CBadge color="primary">{ticket.id}</CBadge>
                  <div className="text-info">
                    <CIcon icon={cilClock} className="me-1" />
                    {ticket.date}
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <CAvatar icon={cilUser} size="sm" className="me-2" />
                  <small>
                    {ticket.email} {ticket.you && <strong>( You )</strong>}
                  </small>
                </div>
                <CCardTitle className="fw-bold">Subject :</CCardTitle>
                <CCardText className="mb-3">{ticket.subject}</CCardText>
 
                <div className="d-flex gap-2">
                  <CButton color="danger" size="sm">Close</CButton>
                  {getPriorityBadge(ticket.priority)}
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
 
      {selectedTicket && (
        <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
          <CModalHeader>
            <CModalTitle>
              <CBadge color="primary">{selectedTicket.id}</CBadge>
              <CButton color="danger" size="sm" className="ms-2">Close</CButton>
              {getPriorityBadge(selectedTicket.priority)}
              <CBadge color="info" className="ms-2">Created At : {selectedTicket.date}</CBadge>
              <CBadge color="warning" className="ms-2 text-dark">Last Updated At : {selectedTicket.updatedAt}</CBadge>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <h6 className="fw-bold">Subject:</h6>
            <p>{selectedTicket.subject}</p>
            <hr />
            <div>
              <p><strong>From:</strong> {selectedTicket.email} <span className="text-muted">({selectedTicket.date})</span></p>
              <p><strong>To:</strong> {selectedTicket.to.join(', ')}</p>
              <p><strong>CC:</strong> {selectedTicket.cc.join(', ')}</p>
            </div>
            <hr />
            <h6 className="fw-bold">Request</h6>
            <p>{selectedTicket.request}</p>
            <h6 className="fw-bold mt-4">Request Updates</h6>
            {selectedTicket.updates.map((update, idx) => (
              <div key={idx} className="d-flex align-items-start mb-3">
                <CAvatar icon={cilUser} size="md" className="me-3" />
                <div>
                  <CBadge color="info" className="mb-1">{update.message}</CBadge><br />
                  <span className="fw-bold text-primary">{update.user}</span> <span className="text-muted">{update.time}</span>
                </div>
              </div>
            ))}
            <div>
              <h6 className="fw-bold">Remark</h6>
              <input className="form-control" placeholder="Add a remark..." />
            </div>
          </CModalBody>
        </CModal>
      )}
    </>
  );
};
 
export default ClosedRequests;