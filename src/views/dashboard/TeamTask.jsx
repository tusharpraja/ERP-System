import React from 'react';
import styles from './TeamTask.module.css';

const TeamTask = () => {
  return (
    <div className="col-12 p-2">
      <div 
        className="p-2 px-3 shadow-sm rounded-2 d-flex flex-column gap-2" 
        style={{ 
          width: '100%', // Changed to 100% to be responsive
          maxWidth: '396px', // Maximum width
          height: '300px', 
          marginTop: '50px',
          overflow: 'auto', 
          background: 'rgb(245, 245, 246)', 
          border: '1px solid rgba(223, 220, 220, 0.95)', 
          boxSizing: 'border-box'
        }}
      >
        <div 
          className="d-flex align-items-center justify-content-between" 
          style={{ height: '3vh', minHeight: '30px' }}
        >
          <span 
            className="d-flex align-items-center gap-2" 
            style={{ 
              color: 'rgb(60, 60, 60)', 
              fontWeight: '600', 
              fontSize: '1rem' 
            }}
          >
            <svg 
              stroke="currentColor" 
              fill="currentColor" 
              strokeWidth="0" 
              viewBox="0 0 24 24" 
              className="fs-5" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M22 5.18L10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45A10.02 10.02 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"></path>
            </svg> 
            Team Task
          </span>
          <a href="/employee/task">
            <span 
              className="d-flex align-items-center py-1 badge-primary" 
              style={{ cursor: 'pointer' }}
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 320 512" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </span>
          </a>
        </div>
        
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div 
            className="d-flex align-items-center gap-3 py-2" 
            style={{ 
              height: '100%', 
              overflowX: 'auto', 
              overflowY: 'hidden',
              whiteSpace: 'nowrap', 
              cursor: 'grab',
              scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none' // For IE
            }}
          >
            {/* Hide scrollbar for Chrome/Safari */}
            <style dangerouslySetInnerHTML={{ __html: `
              ::-webkit-scrollbar { display: none; }
            ` }} />
            
            {/* Task Card 1 */}
            <div 
              className="shadow-sm rounded-3 d-flex flex-column justify-content-between p-2" 
              style={{ 
                height: '100%', 
                minHeight: '13rem', 
                width: '25rem', 
                minWidth: '25rem', 
                overflow: 'hidden', 
                background: 'rgba(255, 255, 255, 0.737)', 
                border: '1px solid rgba(180, 176, 176, 0.55)',
                display: 'inline-block',
                marginRight: '1rem'
              }}
            >
              {/* Card content remains the same */}
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="m-0 text-capitalize" style={{ color: 'black' }}>CDFD</h6>
                  <span 
                    className="p-1 px-2 d-flex align-items-center gap-1 rounded-2" 
                    style={{ 
                      background: 'rgba(225, 234, 47, 0.294)', 
                      color: 'rgba(19, 20, 20, 0.945)', 
                      fontSize: '0.8rem' 
                    }}
                  >
                    Pending
                  </span>
                </div>
                
                <div className="d-flex align-items-center gap-3" style={{ fontSize: '0.8rem' }}>
                  <div className="my-1">
                    <span 
                      className="p-1 px-2 d-flex align-items-center gap-1 rounded-2" 
                      style={{ 
                        width: 'fit-content', 
                        background: 'rgba(162, 246, 128, 0.29)', 
                        color: 'rgba(32, 104, 13, 0.77)' 
                      }}
                    >
                      <svg 
                        stroke="currentColor" 
                        fill="none" 
                        strokeWidth="1.5" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true" 
                        height="1em" 
                        width="1em" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                      </svg> 
                      6 March 2025
                    </span>
                  </div>
                  
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg" 
                    style={{ color: 'black' }}
                  >
                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd"></path>
                  </svg>
                  
                  <div>
                    <span 
                      className="p-1 px-2 d-flex align-items-center gap-1 rounded-2" 
                      style={{ 
                        width: 'fit-content', 
                        background: 'rgba(246, 161, 128, 0.286)', 
                        color: 'rgba(104, 31, 13, 0.77)' 
                      }}
                    >
                      <svg 
                        stroke="currentColor" 
                        fill="none" 
                        strokeWidth="1.5" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true" 
                        height="1em" 
                        width="1em" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                      </svg> 
                      8 March 2025
                    </span>
                  </div>
                </div>
                
                <div className="border-bottom mb-3 pb-3">
                  <div className="text-start flex-wrap d-flex">
                    <p>DFDSFDSF</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="d-flex align-items-center gap-3 justify-content-between p-1">
                  <div className="rounded-5" style={{ minHeight: '0.3rem', height: '0.3rem', maxHeight: '0.3rem', width: '100%', background: 'rgba(120, 120, 128, 0.33)' }}>
                    <div className="rounded-5" style={{ height: '100%', width: '0%', background: 'rgb(0, 122, 255)' }}></div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'black' }}>0.00%</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'black' }}>Last Update : 12 days ago</p>
              </div>
            </div>
            
            {/* Task Card 2 */}
            <div 
              className="shadow-sm rounded-3 d-flex flex-column justify-content-between p-2" 
              style={{ 
                height: '100%', 
                minHeight: '13rem', 
                width: '25rem', 
                minWidth: '25rem', 
                overflow: 'hidden', 
                background: 'rgba(255, 255, 255, 0.737)', 
                border: '1px solid rgba(180, 176, 176, 0.55)',
                display: 'inline-block',
                marginRight: '1rem'
              }}
            >
              {/* Card content remains the same */}
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="m-0 text-capitalize" style={{ color: 'black' }}>fddfdfdf</h6>
                  <span 
                    className="p-1 px-2 d-flex align-items-center gap-1 rounded-2" 
                    style={{ 
                      background: 'rgba(225, 234, 47, 0.294)', 
                      color: 'rgba(19, 20, 20, 0.945)', 
                      fontSize: '0.8rem' 
                    }}
                  >
                    Pending
                  </span>
                </div>
                
                <div className="d-flex align-items-center gap-3" style={{ fontSize: '0.8rem' }}>
                  <div className="my-1">
                    <span 
                      className="p-1 px-2 d-flex align-items-center gap-1 rounded-2" 
                      style={{ 
                        width: 'fit-content', 
                        background: 'rgba(162, 246, 128, 0.29)', 
                        color: 'rgba(32, 104, 13, 0.77)' 
                      }}
                    >
                      <svg 
                        stroke="currentColor" 
                        fill="none" 
                        strokeWidth="1.5" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true" 
                        height="1em" 
                        width="1em" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                      </svg> 
                      8 March 2025
                    </span>
                  </div>
                  
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg" 
                    style={{ color: 'black' }}
                  >
                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd"></path>
                  </svg>
                  
                  <div>
                    <span 
                      className="p-1 px-2 d-flex align-items-center gap-1 rounded-2" 
                      style={{ 
                        width: 'fit-content', 
                        background: 'rgba(246, 161, 128, 0.286)', 
                        color: 'rgba(104, 31, 13, 0.77)' 
                      }}
                    >
                      <svg 
                        stroke="currentColor" 
                        fill="none" 
                        strokeWidth="1.5" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true" 
                        height="1em" 
                        width="1em" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                      </svg> 
                      8 March 2025
                    </span>
                  </div>
                </div>
                
                <div className="border-bottom mb-3 pb-3">
                  <div className="text-start flex-wrap d-flex">
                    <p>sdsdsd</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="d-flex align-items-center gap-3 justify-content-between p-1">
                  <div className="rounded-5" style={{ minHeight: '0.3rem', height: '0.3rem', maxHeight: '0.3rem', width: '100%', background: 'rgba(120, 120, 128, 0.33)' }}>
                    <div className="rounded-5" style={{ height: '100%', width: '0%', background: 'rgb(0, 122, 255)' }}></div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'black' }}>0.00%</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'black' }}>Last Update : 17 Mar 2025, 14:22</p>
              </div>
            </div>
            
            {/* Task Card 3 */}
            <div 
              className="shadow-sm rounded-3 d-flex flex-column justify-content-between p-2" 
              style={{ 
                height: '100%', 
                minHeight: '13rem', 
                width: '25rem', 
                minWidth: '25rem', 
                overflow: 'hidden', 
                background: 'rgba(255, 255, 255, 0.737)', 
                border: '1px solid rgba(180, 176, 176, 0.55)',
                display: 'inline-block'
              }}
            >
              {/* Card content remains the same */}
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="m-0 text-capitalize" style={{ color: 'black' }}>demo2</h6>
                  <span 
                    className="p-1 px-2 d-flex align-items-center gap-1 rounded-2" 
                    style={{ 
                      background: 'rgba(225, 234, 47, 0.294)', 
                      color: 'rgba(19, 20, 20, 0.945)', 
                      fontSize: '0.8rem' 
                    }}
                  >
                    Pending
                  </span>
                </div>
                
                <div className="d-flex align-items-center gap-3" style={{ fontSize: '0.8rem' }}>
                  <div className="my-1">
                    <span 
                      className="p-1 px-2 d-flex align-items-center gap-1 rounded-2" 
                      style={{ 
                        width: 'fit-content', 
                        background: 'rgba(162, 246, 128, 0.29)', 
                        color: 'rgba(32, 104, 13, 0.77)' 
                      }}
                    >
                      <svg 
                        stroke="currentColor" 
                        fill="none" 
                        strokeWidth="1.5" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true" 
                        height="1em" 
                        width="1em" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                      </svg> 
                      9 March 2025
                    </span>
                  </div>
                  
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg" 
                    style={{ color: 'black' }}
                  >
                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd"></path>
                  </svg>
                  
                  <div>
                    <span 
                      className="p-1 px-2 d-flex align-items-center gap-1 rounded-2" 
                      style={{ 
                        width: 'fit-content', 
                        background: 'rgba(246, 161, 128, 0.286)', 
                        color: 'rgba(104, 31, 13, 0.77)' 
                      }}
                    >
                      <svg 
                        stroke="currentColor" 
                        fill="none" 
                        strokeWidth="1.5" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true" 
                        height="1em" 
                        width="1em" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                      </svg> 
                      10 March 2025
                    </span>
                  </div>
                </div>
                
                <div className="border-bottom mb-3 pb-3">
                  <div className="text-start flex-wrap d-flex">
                    <p>gbgfhtfh</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="d-flex align-items-center gap-3 justify-content-between p-1">
                  <div className="rounded-5" style={{ minHeight: '0.3rem', height: '0.3rem', maxHeight: '0.3rem', width: '100%', background: 'rgba(120, 120, 128, 0.33)' }}>
                    <div className="rounded-5" style={{ height: '100%', width: '0%', background: 'rgb(0, 122, 255)' }}></div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'black' }}>0.00%</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'black' }}>Last Update : 28 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTask;