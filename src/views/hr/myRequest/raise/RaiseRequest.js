import React from 'react';

const RaiseRequest = () => {
  return (
    <div className="mainbar-grid">
      <div className="pb-4" style={{ overflow: 'auto' }}>
        <div className="container-fluid py-2" style={{ color: 'var(--primaryDashColorDark)', maxHeight: '85vh', overflow: 'auto' }}>
          <div className="my-auto mt-2">
            <div className="d-flex align-items-center gap-2">
              <h5 className="m-0 p-0 text-capitalize" style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>Create Request</h5>
            </div>
            <p className="m-0" style={{ color: 'var(--Subtittles)' }}>You can create a new request here.</p>
          </div>

          <form className="py-4 rounded row">
            <div className="mb-3 col-12">
              <label htmlFor="to" className="form-label">To</label>
              <input
                type="text"
                className="form-control text-capitalize rounded-2 bg-light text-dark border dark-placeholder"
                id="to"
                name="to"
                required
                disabled
                value="demo.admin@munc.in"
              />
            </div>

            <div className="mb-3 col-12">
              <label htmlFor="cc" className="form-label">CC</label>
              <div className="css-b62m3t-container" id="cc">
                <span id="react-select-2-live-region" className="css-7pg0cj-a11yText"></span>
                <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" role="log" className="css-7pg0cj-a11yText"></span>
                <div className="text-capitalize rounded-2 bg-light text-dark border dark-placeholder__control css-13cymwt-control">
                  <div className="text-capitalize rounded-2 bg-light text-dark border dark-placeholder__value-container text-capitalize rounded-2 bg-light text-dark border dark-placeholder__value-container--is-multi css-hlgwow">
                    <div className="text-capitalize rounded-2 bg-light text-dark border dark-placeholder__placeholder css-1jqq78o-placeholder" id="react-select-2-placeholder">Select User</div>
                    <div className="text-capitalize rounded-2 bg-light text-dark border dark-placeholder__input-container css-19bb58m" data-value="">
                      <input
                        className="text-capitalize rounded-2 bg-light text-dark border dark-placeholder__input"
                        autoCapitalize="none"
                        autoComplete="off"
                        autoCorrect="off"
                        id="react-select-2-input"
                        spellCheck="false"
                        tabIndex="0"
                        type="text"
                        aria-autocomplete="list"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="combobox"
                        aria-activedescendant=""
                        aria-describedby="react-select-2-placeholder"
                        value=""
                        style={{ color: 'inherit', background: '0px center', opacity: 1, width: '100%', gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: '0px', margin: '0px', outline: '0px', padding: '0px' }}
                      />
                    </div>
                  </div>
                  <div className="text-capitalize rounded-2 bg-light text-dark border dark-placeholder__indicators css-1wy0on6">
                    <span className="text-capitalize rounded-2 bg-light text-dark border dark-placeholder__indicator-separator css-1u9des2-indicatorSeparator"></span>
                    <div className="text-capitalize rounded-2 bg-light text-dark border dark-placeholder__indicator text-capitalize rounded-2 bg-light text-dark border dark-placeholder__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true">
                      <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <input name="cc" type="hidden" value="" />
                </div>
              </div>
            </div>

            <div className="mb-3 col-12">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control text-capitalize rounded-2 bg-light text-dark border dark-placeholder"
                id="subject"
                name="subject"
                required
                value=""
              />
            </div>

            <div className="mb-3 col-12">
              <label htmlFor="remark" className="form-label">Remark</label>
              <textarea
                className="form-control text-capitalize rounded-2 bg-light text-dark border dark-placeholder"
                id="remark"
                name="remark"
                required
                placeholder="Please provide remarks"
              ></textarea>
            </div>

            <div className="mb-3 col-12">
              <label htmlFor="priority" className="form-label">Priority</label>
              <select
                id="priority"
                name="priority"
                className="form-select text-capitalize rounded-2 bg-light text-dark border dark-placeholder"
              >
                <option value="" disabled>Select Priority</option>
                <option value="Urgent">Urgent</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="d-flex align-items-center gap-3">
              <button type="submit" className="btn btn-primary">Raise Ticket</button>
            </div>
          </form>
        </div>
      </div>

      <div className="HrPannelFooter bg-dark w-100 text-white" style={{ zIndex: 50, position: 'absolute', bottom: '0px' }}>
        <div className="d-flex justify-content-center align-items-center gap-5 p-2" style={{ backgroundColor: 'var(--primaryDashMenuColor)', color: 'var(--primaryDashColorDark)' }}>
          <span className="d-none d-md-flex">
            <span className="text-capitalize">Friday, 05/02/2025, 03:57:07 PM</span>
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

export default RaiseRequest;