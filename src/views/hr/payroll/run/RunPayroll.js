import React from 'react';
import './RunPayroll.css';

const RunPayroll = () => {
  const payrollData = [
    {
      name: 'Payroll Mar',
      employees: 13,
      paid: 0,
      inProcess: 13,
      onHold: 0,
      period: 'March 2025',
      status: 'inprogress',
      amount: '₹ 60,285.00',
      created: '07/03/2025, 11:11:10 PM',
      processed: '23/03/2025, 10:45:15 AM'
    },
    {
      name: 'Payroll Apr',
      employees: 15,
      paid: 0,
      inProcess: 15,
      onHold: 0,
      period: 'April 2025',
      status: 'inprogress',
      amount: '₹ 78,062.00',
      created: '08/04/2025, 12:55:09 PM',
      processed: '30/04/2025, 03:50:18 PM'
    },
    {
      name: 'Payroll May',
      employees: 16,
      paid: 0,
      inProcess: 16,
      onHold: 0,
      period: 'May 2025',
      status: 'inprogress',
      amount: '₹ 6,77,99,589.00',
      created: '01/05/2025, 01:35:53 PM',
      processed: '02/05/2025, 11:25:37 AM'
    },
    {
      name: 'Payroll Apr',
      employees: 1,
      paid: 0,
      inProcess: 1,
      onHold: 0,
      period: 'April 2025',
      status: 'inprogress',
      amount: '₹ 0.00',
      created: '01/05/2025, 02:58:10 PM',
      processed: '01/05/2025, 02:58:10 PM'
    }
  ];

  return (
    <div className="mainbar-grid">
      <div className="pb-4" style={{ overflow: 'auto' }}>
        <div className="container-fluid text-black">
          <div className="my-auto mt-2">
            <div className="d-flex align-items-center gap-2">
              <h5 className="m-0 p-0 text-capitalize" style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>
                Run Payroll
              </h5>
            </div>
            <p className="m-0" style={{ color: 'var(--Subtittles)' }}>
              Review your employee's
            </p>
          </div>

          <div className="d-flex align-items-center my-4 gap-4 p-0" style={{ borderBottom: 'var(--borderLight)' }}>
            <div className="d-flex align-items-center gap-4">
              <span
                className="d-flex align-items-center gap-2 rounded-0 p-0 pb-1 px-1"
                style={{ borderBottom: '2px solid blue', cursor: 'pointer' }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path>
                </svg>
                Payroll List
              </span>
              <span
                className="d-flex align-items-center gap-2 rounded-0 p-0 pb-1 px-1"
                style={{ borderBottom: '2px solid transparent', cursor: 'pointer' }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                  ></path>
                </svg>
                Payroll Setting
              </span>
            </div>
          </div>

          <div>
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="my-0">01 Total Payroll</h6>
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{ position: 'relative', height: '2.5rem', width: '200px' }}>
                  <input
                    placeholder="Search by Payroll Name..."
                    type="search"
                    className="form-control ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder"
                    style={{ position: 'absolute', top: '0px', height: '100%', width: '100%' }}
                  />
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="fs-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      color: 'gray',
                      position: 'absolute',
                      right: '0.5rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      opacity: '0.5'
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <button className="btn border d-flex align-items-center gap-2 text-black">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4l-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z"></path>
                  </svg>
                  Export
                </button>
              </div>
            </div>

            <div
              className="scroller mb-2 rounded-2"
              style={{
                height: 'fit-content',
                maxHeight: '75vh',
                overflow: 'auto',
                position: 'relative',
                border: 'var(--borderLight)'
              }}
            >
              <table className="table mt-0 mb-0 table-hover">
                <thead>
                  <tr>
                    <th
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      Payroll Name
                    </th>
                    <th
                      className="text-end"
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      No's of Employee
                    </th>
                    <th
                      className="text-end"
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      Paid
                    </th>
                    <th
                      className="text-end"
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      In Process
                    </th>
                    <th
                      className="text-end"
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      On Hold
                    </th>
                    <th
                      className="text-end"
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      Period
                    </th>
                    <th
                      className="text-end"
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      Status
                    </th>
                    <th
                      className="text-end"
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      Total Amount
                    </th>
                    <th
                      className="text-end"
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      Date Created
                    </th>
                    <th
                      className="text-end"
                      style={{
                        verticalAlign: 'middle',
                        whiteSpace: 'pre',
                        background: 'rgb(238, 238, 238)',
                        color: 'rgb(83, 88, 98)',
                        border: 'none',
                        position: 'sticky',
                        top: '0rem',
                        zIndex: 2
                      }}
                    >
                      Processed Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {payrollData.map((payroll, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        <a
                          href={`/hr/Payroll_Processing?year=2025&month=${payroll.period.split(' ')[0]}`}
                          style={{ textDecoration: 'none', fontWeight: 500 }}
                        >
                          {payroll.name}
                        </a>
                      </td>
                      <td
                        className="text-end"
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {payroll.employees}
                      </td>
                      <td
                        className="text-end"
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {payroll.paid}
                      </td>
                      <td
                        className="text-end"
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {payroll.inProcess}
                      </td>
                      <td
                        className="text-end"
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {payroll.onHold}
                      </td>
                      <td
                        className="text-end"
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {payroll.period}
                      </td>
                      <td
                        className="text-end"
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        <div className="d-flex align-items-center justify-content-end">
                          <span className="badge-warning">{payroll.status}</span>
                        </div>
                      </td>
                      <td
                        className="text-end"
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {payroll.amount}
                      </td>
                      <td
                        className="text-end text-uppercase"
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {payroll.created}
                      </td>
                      <td
                        className="text-end text-uppercase"
                        style={{
                          verticalAlign: 'middle',
                          whiteSpace: 'pre',
                          background: 'transparent',
                          color: 'var(--secondaryDashColorDark)',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {payroll.processed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="HrPannelFooter bg-dark w-100 text-white" style={{ zIndex: 50, position: 'absolute', bottom: '0px' }}>
        <div
          className="d-flex justify-content-center align-items-center gap-5 p-2"
          style={{ backgroundColor: 'var(--primaryDashMenuColor)', color: 'var(--primaryDashColorDark)' }}
        >
          <span className="d-none d-md-flex">
            <span className="text-capitalize">Friday, 05/02/2025, 12:28:11 PM</span>
          </span>
          <span className="d-flex align-items-center gap-2">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>{' '}
            <span className="d-none d-md-flex">Connected</span>
          </span>
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
            </svg>{' '}
            Chrome
          </span>
          <span title="IP Address" className="d-flex align-items-center gap-1">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-8a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h8zm-4 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1 -12h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>{' '}
            122.161.52.228
          </span>
          <div>Unable to retrieve your location.</div>
        </div>
      </div>
    </div>
  );
};

export default RunPayroll;