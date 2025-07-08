import React, { useState } from 'react';

const OpenRequest = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Sample ticket data
  const tickets = [
    {
      id: 'TKT0020',
      subject: 'Request for Office Supply Replenishment',
      status: 'Pending',
      priority: 'Medium',
      createdBy: 'demo.hr@munc.in (You)',
      createdAt: '15 days ago',
      lastUpdated: '15 days ago',
      to: 'demo.admin@munc.in',
      cc: 'demoemp2@munc.in',
      request: 'Kindly arrange for the replenishment of basic office supplies such as pens, notepads, and printer paper for the HR department. Current stock is running low, and we\'d appreciate if the items could be delivered by end of the week. Thank you!',
      image: 'http://res.cloudinary.com/dv8c2pofx/image/upload/v1741721783/dhc7rhowf682tyfq6l0g.jpg'
    },
    {
      id: 'TKT0012',
      subject: 'rtyut',
      status: 'Pending',
      priority: 'High',
      createdBy: 'demo.hr@munc.in (You)',
      createdAt: '10 Mar 2025, 10:45',
      lastUpdated: '10 Mar 2025, 10:45',
      to: 'demo.admin@munc.in',
      cc: '',
      request: '',
      image: 'http://res.cloudinary.com/dv8c2pofx/image/upload/v1741721783/dhc7rhowf682tyfq6l0g.jpg'
    }
  ];

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  return (
    <div className="mainbar-grid">
      <div className="pb-4" style={{ overflow: 'auto' }}>
        <div className="container-fluid py-2" style={{ height: '90vh', overflow: 'hidden', position: 'relative' }}>
          <div style={{ height: '88vh', overflow: 'auto' }}>
            <div className="my-auto mt-2">
              <div className="d-flex align-items-center gap-2">
                <h5 className="m-0 p-0 text-capitalize" style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>Pending Request's</h5>
                <p className="my-0 d-flex align-items-center justify-content-center bg-primary text-white rounded-5 px-2" style={{ fontWeight: 400 }}>{tickets.length}</p>
              </div>
              <p className="m-0" style={{ color: 'var(--Subtittles)' }}>You can view all your pending Request's here</p>
            </div>

            <div style={{ height: '86vh', overflow: 'auto' }}>
              <div className="row row-gap-3 pt-3 pb-3">
                {tickets.map((ticket, index) => (
                  <div className="col-12 col-md-6 col-lg-3" key={index}>
                    <div 
                      className="card border-0 shadow-sm" 
                      role="button" 
                      style={{ backgroundColor: 'white', color: 'black' }}
                      onClick={() => setSelectedTicket(ticket)}
                    >
                      <div className="p-2">
                        <div className="d-flex flex-column gap-2">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge-primary">{ticket.id}</span>
                            <p className="d-flex align-items-center gap-2 m-0 badge-info">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                              </svg>
                              {ticket.createdAt}
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <img className="rounded-circle me-2" src={ticket.image} alt="" style={{ height: '30px', width: '30px' }} />
                            <span>{ticket.createdBy}</span>
                          </div>
                          <div className="d-flex flex-column gap-1 p-2 rounded-2 bg-light text-dark">
                            <h6 className="m-0">Subject:</h6>
                            <p className="ellipsis m-0">{ticket.subject}</p>
                          </div>
                          <div className="d-flex align-items-center gap-2 my-1">
                            <span className="badge-success">{ticket.status}</span>
                            <span className={`badge-${ticket.priority === 'High' ? 'Semidanger' : 'primary'}`}>
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd"></path>
                              </svg>
                              {ticket.priority}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <div className="rounded-3 shadow p-3 border" style={{ 
          height: '70vh', 
          overflow: 'auto', 
          width: '90%', 
          backgroundColor: 'white', 
          color: 'black', 
          position: 'absolute', 
          top: '10%', 
          left: '50%', 
          transform: 'translate(-50%)',
          zIndex: 1000
        }}>
          <div className="p-2">
            <div className="d-flex align-items-center py-2 py-3 justify-content-between gap-2" style={{ position: 'sticky', top: '-1rem', zIndex: 1, background: 'white' }}>
              <div className="d-flex align-items-center gap-3">
                <span className="badge-primary">{selectedTicket.id}</span>
                <span className="badge-success">{selectedTicket.status}</span>
                <span className="badge-primary">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd"></path>
                  </svg>
                  {selectedTicket.priority}
                </span>
                <p className="d-flex align-items-center gap-2 m-0 badge-info">
                  Created At: 
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                  </svg>
                  {selectedTicket.createdAt}
                </p>
                <p className="badge-warning d-flex align-items-center gap-2 m-0">Last Updated At: {selectedTicket.lastUpdated}</p>
              </div>
              <span style={{ cursor: 'pointer' }} onClick={handleCloseModal}>Close ( X )</span>
            </div>

            <div className="d-flex flex-column gap-1 p-2 rounded-2 bg-light text-dark">
              <h6 className="m-0">Subject:</h6>
              <p className="text-capitalize m-0">{selectedTicket.subject}</p>
            </div>
            <p className="text-capitalize my-2 mx-1">Last Updated At: {selectedTicket.lastUpdated}</p>
            <hr />

            <div className="d-flex align-items-center">
              <img className="rounded-circle me-2" src={selectedTicket.image} alt="" style={{ height: '30px', width: '30px' }} />
              <div className="d-flex flex-column">
                <span>{selectedTicket.createdBy}</span>
                <p className="mb-1">Created At: {selectedTicket.createdAt}</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 mt-2">
              <div className="d-flex align-items-center justify-content-center rounded-3 shadow-sm" style={{ height: '1.8rem', width: '1.8rem' }}>To</div>
              <p className="m-0">{selectedTicket.to}</p>
            </div>

            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="d-flex align-items-center justify-content-center rounded-3 shadow-sm" style={{ height: '1.8rem', width: '1.8rem' }}>CC</div>
              <p className="m-0">{selectedTicket.cc || 'None'}</p>
            </div>

            <div>
              <div>
                <span style={{ fontWeight: 600 }}>Request</span>
                <p>{selectedTicket.request || 'No request details available'}</p>
              </div>
            </div>

            <hr />

            <div className="text-start mt-3">
              <div className="d-flex flex-column gap-2">
                <div>
                  <form>
                    <div>
                      <label className="form-label" htmlFor="remark">Your Message</label>
                      <textarea 
                        rows="3" 
                        placeholder="Enter your message here..." 
                        id="remark" 
                        className="form-control rounded-2 bg-light text-dark border dark-placeholder form-control"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div>
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="HrPannelFooter bg-dark w-100 text-white" style={{ zIndex: 50, position: 'absolute', bottom: '0px' }}>
        <div className="d-flex justify-content-center align-items-center gap-5 p-2" style={{ backgroundColor: 'var(--primaryDashMenuColor)', color: 'var(--primaryDashColorDark)' }}>
          <span className="d-none d-md-flex">
            <span className="text-capitalize">Friday, 05/02/2025, 03:58:58 PM</span>
          </span>
          <span className="d-flex align-items-center gap-2">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
            <span className="d-none d-md-flex">Connected</span>
          </span>
          <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
            </svg>
            Chrome
          </span>
          <span title="IP Address" className="d-flex align-items-center gap-1">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-8a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h8zm-4 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1 -12h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" strokeWidth="0" fill="currentColor"></path>
            </svg>
            122.161.52.228
          </span>
          <div>Unable to retrieve your location.</div>
        </div>
      </div>
    </div>
  );
};

export default OpenRequest;