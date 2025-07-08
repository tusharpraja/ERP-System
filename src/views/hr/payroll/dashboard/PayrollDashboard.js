// import React from 'react';
// import { ReactComponent as CalendarIcon } from './icons/calendar.svg';
// import { ReactComponent as ArrowRightIcon } from './icons/arrow-right.svg';
// import { ReactComponent as WarningIcon } from './icons/warning.svg';
// import { ReactComponent as ExpandIcon } from './icons/expand.svg';
// import { ReactComponent as ActivityIcon } from './icons/activity.svg';
// import { ReactComponent as WifiIcon } from './icons/wifi.svg';
// import { ReactComponent as BrowserIcon } from './icons/browser.svg';
// import { ReactComponent as DeviceIcon } from './icons/device.svg';

// const PayrollDashboard = () => {
//   // Sample data
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
//   const monthNames = ["January", "February", "March", "April", "May", "June", 
//                      "July", "August", "September", "October", "November", "December"];
  
//   const payrollData = {
//     netPay: 10701.00,
//     employeesCount: 16,
//     status: "Approved",
//     salaryCreated: true,
//     paymentDate: "7th June, 2025",
//     spending: 60285.00,
//     spendingChange: 100.00,
//   };

//   const employees = [
//     { id: 1, name: "Admin Admin", salary: 0.00, status: "Proceed", avatar: "http://res.cloudinary.com/dv8c2pofx/image/upload/v1734088853/pln6cmnbiufewjfqlecz.gif" },
//     { id: 2, name: "Hr Manager", salary: 2764.00, status: "Proceed", avatar: "http://res.cloudinary.com/dv8c2pofx/image/upload/v1741721783/dhc7rhowf682tyfq6l0g.jpg" },
//     { id: 3, name: "Demo Manager", salary: 1936.00, status: "Proceed", avatar: "http://res.cloudinary.com/dv8c2pofx/image/upload/v1741182655/yie0goj65hk9e9egp6tx.png" },
//     { id: 4, name: "Demo Emp", salary: 824.00, status: "Proceed", avatar: "http://res.cloudinary.com/dv8c2pofx/image/upload/v1742800046/jpjrtn9pv1omzi1wgsn1.png" },
//     { id: 5, name: "Amar kumar", salary: 969.00, status: "Proceed", avatar: "http://res.cloudinary.com/dv8c2pofx/image/upload/v1741589839/h1jguizgcalg0qg1jynz.png" },
//   ];

//   const taxData = [
//     { name: "Employee's State Insurance (ESI)", amount: 0.00, dueDate: "15th June, 2025" },
//     { name: "Employee's Provident Fund (EPF)", amount: 0.00, dueDate: "15th June, 2025" },
//     { name: "Tax Deducted at Source (TDS)", amount: 0.00, dueDate: "7th June, 2025" },
//   ];

//   return (
//     <div className="mainbar-grid">
//       <div className="pb-4" style={{ overflow: 'auto' }}>
//         <div className="container-fluid" style={{ color: 'rgb(0, 0, 0)' }}>
//           {/* Header */}
//           <div className="d-flex align-items-center justify-content-between">
//             <div className="my-auto mt-2">
//               <div className="d-flex align-items-center gap-2">
//                 <h5 className="m-0 p-0 text-capitalize" style={{ fontWeight: 500, color: 'var(--PrimaryColorDark)' }}>
//                   Payroll Dashboard
//                 </h5>
//               </div>
//               <p className="m-0" style={{ color: 'var(--Subtittles)' }}>You can view payroll details</p>
//             </div>
//             <div className="d-flex align-items-center gap-2">
//               <span className="d-flex align-items-center gap-2" style={{ whiteSpace: 'pre' }}>
//                 <CalendarIcon style={{ height: '1em', width: '1em' }} /> Pay Period
//               </span>
//               <select className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder" style={{ width: 'fit-content' }}>
//                 {Array.from({ length: 10 }, (_, i) => currentYear - i).map(year => (
//                   <option key={year} value={year}>{year}</option>
//                 ))}
//               </select>
//               <select className="form-select ms-0 ms-md-auto rounded-2 bg-light text-dark border dark-placeholder" style={{ width: 'fit-content' }}>
//                 {monthNames.map((month, index) => (
//                   <option 
//                     key={month} 
//                     value={index + 1} 
//                     disabled={index + 1 > currentMonth && currentYear === new Date().getFullYear()}
//                   >
//                     {month}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="row mx-auto mt-2">
//             {/* Left Column */}
//             <div className="col-12 col-lg-9 p-0">
//               <div className="pr-0 pr-lg-2">
//                 {/* Payroll Processing Card */}
//                 <div className="p-3 rounded-2" style={{ background: 'rgba(187, 184, 184, 0.2)' }}>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <div className="d-flex align-items-center gap-2">
//                         <h6 className="m-0" style={{ fontSize: '1.4rem', fontStyle: 'normal', fontWeight: 500, lineHeight: '1.6rem', letterSpacing: '3.007px' }}>
//                           Process Payroll for: {monthNames[currentMonth - 1]} {currentYear}
//                         </h6>
//                         <span className="badge-success py-1 px-2">{payrollData.status}</span>
//                       </div>
//                       <p className="m-0">1 {monthNames[currentMonth - 1]} {currentYear} - {new Date(currentYear, currentMonth, 0).getDate()} {monthNames[currentMonth - 1]} {currentYear}</p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between gap-2 py-2">
//                     <div className="d-flex align-items-center justify-content-between gap-2 py-2">
//                       <p className="py-1 m-0 px-2 bg-primary rounded-2 text-white" style={{ width: 'fit-content' }}>
//                         ₹ {payrollData.netPay.toLocaleString('en-IN')}
//                       </p>
//                       <span className="badge-warning">
//                         {payrollData.salaryCreated ? 'Salary Created' : 'Salary Not Created'}
//                       </span>
//                     </div>
//                     <a className="btn btn-primary d-flex align-items-center gap-1" href={`/hr/Payroll_Processing?year=${currentYear}&month=${currentMonth}`}>
//                       Create Payroll <ArrowRightIcon style={{ height: '1em', width: '1em' }} />
//                     </a>
//                   </div>
                  
//                   {/* Payroll Summary */}
//                   <div className="p-2 rounded-2" style={{ background: 'rgb(255, 255, 255)' }}>
//                     <div className="row mx-0 rounded-3 p-2" style={{ 
//                       background: 'linear-gradient(90deg, rgb(249, 254, 241) 0%, rgb(255, 255, 255) 100%)', 
//                       borderLeft: '4px solid green' 
//                     }}>
//                       <div className="col-12 col-md-10 p-2 rounded-2 d-flex">
//                         <div className="p-2" style={{ flex: '1 1 0%', borderRight: '1px solid rgba(185, 180, 180, 0.34)' }}>
//                           <p>Net Pay</p>
//                           <h3 className="fw-bold" style={{ 
//                             fontSize: '2.5rem', 
//                             fontWeight: 700, 
//                             lineHeight: '2rem', 
//                             letterSpacing: '0.1rem', 
//                             flex: '1 1 0%' 
//                           }}>
//                             ₹ {(payrollData.netPay / 1000).toFixed(1)}K
//                           </h3>
//                         </div>
//                         <div className="p-2" style={{ flex: '1 1 0%', borderRight: '1px solid rgba(185, 180, 180, 0.34)' }}>
//                           <p>Salaries On Hold</p>
//                           <h3>
//                             <span className="fs-5 badge-success">No Salary is on Hold</span>
//                           </h3>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-2 p-2 d-flex align-items-start justify-content-center flex-column">
//                         <span style={{ 
//                           fontSize: '1.5rem', 
//                           fontWeight: 700, 
//                           lineHeight: '2rem', 
//                           letterSpacing: '0.1rem' 
//                         }}>
//                           {payrollData.employeesCount} Nos.
//                         </span>
//                         <p style={{ 
//                           color: 'rgb(124, 122, 122)', 
//                           fontWeight: 500, 
//                           lineHeight: '1.2rem', 
//                           letterSpacing: '2px' 
//                         }}>
//                           Active Employee in Payroll
//                         </p>
//                       </div>
//                     </div>
                    
//                     {/* Payroll Details */}
//                     <div className="row mx-0 p-2">
//                       <div className="col-6 col-md-4 p-0">
//                         <p className="p-0 m-0" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgb(124, 122, 122)' }}>
//                           Actual Pay
//                         </p>
//                         <h5 style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: '2rem', letterSpacing: '0.1rem' }}>
//                           ₹ {payrollData.netPay.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//                         </h5>
//                       </div>
//                       <div className="col-6 col-md-4 p-2">
//                         <p className="p-0 m-0" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgb(124, 122, 122)' }}>
//                           Bonus & Incentive
//                         </p>
//                         <h5 style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: '2rem', letterSpacing: '0.1rem' }}>
//                           ₹ 0.00
//                         </h5>
//                       </div>
//                       <div className="col-6 col-md-4 p-2">
//                         <p className="p-0 m-0" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgb(124, 122, 122)' }}>
//                           Arrears
//                         </p>
//                         <h5 style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: '2rem', letterSpacing: '0.1rem' }}>
//                           ₹ 0.00
//                         </h5>
//                       </div>
//                       <div className="col-6 col-md-4 p-2">
//                         <p className="p-0 m-0" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgb(124, 122, 122)' }}>
//                           Advance
//                         </p>
//                         <h5 style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: '2rem', letterSpacing: '0.1rem' }}>
//                           ₹ 0.00
//                         </h5>
//                       </div>
//                       <div className="col-6 col-md-4 p-2">
//                         <p className="p-0 m-0" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgb(124, 122, 122)' }}>
//                           Reimbursement
//                         </p>
//                         <h5 style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: '2rem', letterSpacing: '0.1rem' }}>
//                           ₹ 0.00
//                         </h5>
//                       </div>
//                       <div className="col-6 col-md-4 p-2">
//                         <p className="p-0 m-0" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgb(124, 122, 122)' }}>
//                           Payment Date
//                         </p>
//                         <h4>{payrollData.paymentDate}</h4>
//                       </div>
//                     </div>
                    
//                     {/* Notification */}
//                     <div>
//                       <div className="d-flex align-items-center gap-2 py-1 px-2 rounded-2" style={{ 
//                         background: 'rgba(173, 170, 170, 0.1)', 
//                         width: 'fit-content' 
//                       }}>
//                         <WarningIcon style={{ 
//                           color: 'rgba(238, 216, 22, 0.94)', 
//                           fontSize: '1.5rem', 
//                           opacity: 1 
//                         }} />
//                         <p className="p-0 m-0" style={{ color: 'rgba(83, 81, 81, 0.65)' }}>
//                           Total payroll for this month has been created.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Tax Cards */}
//                 <div className="row my-2">
//                   {taxData.map((tax, index) => (
//                     <div key={index} className="col-12 col-md-4 p-2 rounded-2">
//                       <div className="p-2 px-3 rounded-2" style={{ background: 'rgba(187, 184, 184, 0.2)' }}>
//                         <div className="p-2 px-3 rounded-2 d-flex flex-column align-items-center" style={{ background: 'rgba(255, 255, 255, 0.94)' }}>
//                           <p className="my-0">{tax.name}</p>
//                           <div className="d-flex align-items-end gap-2 my-2">
//                             <h5 className="m-0" style={{ 
//                               color: 'gold', 
//                               fontSize: '2rem', 
//                               fontStyle: 'normal', 
//                               fontWeight: 600, 
//                               lineHeight: '2.2rem', 
//                               letterSpacing: '0.05rem', 
//                               padding: '0px' 
//                             }}>
//                               ₹ {tax.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//                             </h5>
//                           </div>
//                           <div className="d-flex align-items-center justify-content-between w-100">
//                             <span>Last Date to Deposit</span>
//                             <span>{tax.dueDate}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* Spending Overview */}
//                 <div className="py-3 px-3 rounded-2" style={{ background: 'rgba(187, 184, 184, 0.2)' }}>
//                   <div className="d-flex align-items-center pb-2 justify-content-between">
//                     <h5>Overview</h5>
//                     <span className="d-none fs-3 d-lg-flex" style={{ cursor: 'pointer' }}>
//                       <ExpandIcon style={{ height: '1em', width: '1em' }} />
//                     </span>
//                   </div>
//                   <div className="p-2 rounded-2" style={{ background: 'rgba(230, 227, 227, 0.59)' }}>
//                     <p>Spending over the year</p>
//                     <h4>₹ {payrollData.spending.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h4>
//                     <div className="row row-gap-3 align-items-center justify-content-between pr-2">
//                       <div className="col-12 col-md-3 d-flex align-items-center gap-2">
//                         <span className="rounded-5 d-flex gap-2 align-items-center p-2 badge-success" style={{ width: 'fit-content', fontWeight: 500 }}>
//                           <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"></path>
//                           </svg>
//                           {payrollData.spendingChange}%
//                         </span>
//                         vs Last Year
//                       </div>
//                       <div className="col-12 col-md-9 d-flex align-items-center justify-content-start justify-content-md-end gap-4">
//                         <div className="d-flex align-items-center gap-1">
//                           <div style={{ height: '0.5rem', width: '0.5rem', background: 'rgb(63, 200, 228)', rotate: '45deg' }}></div>
//                           Current Year
//                         </div>
//                         <div className="d-flex align-items-center gap-1">
//                           <div style={{ height: '0.5rem', width: '0.5rem', background: 'rgb(86, 84, 212)', rotate: '45deg' }}></div>
//                           Previous Year
//                         </div>
//                         <div className="d-flex align-items-center gap-1">
//                           <div style={{ height: '0.8rem', width: '0.8rem', background: 'green', borderRadius: '50%', border: '1px solid white' }}></div>
//                           Current Month
//                         </div>
//                       </div>
//                     </div>
//                     {/* Chart placeholder */}
//                     <div className="px-2 my-2 rounded-2" style={{ background: 'rgba(243, 243, 243, 0.34)' }}>
//                       <div className="py-3 my-3" style={{ width: '100%', overflowX: 'auto', padding: '0.5rem', position: 'relative', whiteSpace: 'nowrap' }}>
//                         {/* Chart implementation would go here */}
//                         <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                           <p>Chart visualization would be implemented here</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Column */}
//             <div className="col-12 col-lg-3 p-0">
//               <div className="p-3 rounded-2" style={{ background: 'rgba(187, 184, 184, 0.2)', height: 'fit-content', color: 'black' }}>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <h5>Salaries</h5>
//                   <a className="btn btn-light d-flex align-items-center gap-1 px-2 py-1 btn-light" href="/hr/salary_Slips_All" style={{ width: 'fit-content' }}>
//                     See All <ArrowRightIcon style={{ height: '1em', width: '1em' }} />
//                   </a>
//                 </div>
//                 <div className="d-flex rounded-5 my-2" style={{ background: 'rgba(245, 245, 245, 0.49)' }}>
//                   <div className="p-1" style={{ flex: '1 1 0%', textAlign: 'center', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '20px 0px 0px 20px', background: 'rgb(63, 200, 228)', fontWeight: 600, cursor: 'pointer' }}>
//                     All
//                   </div>
//                   <div className="p-1" style={{ flex: '1 1 0%', textAlign: 'center', border: '1px solid rgba(0, 0, 0, 0.1)', background: 'transparent', fontWeight: 'normal', cursor: 'pointer' }}>
//                     Proceed
//                   </div>
//                   <div className="p-1" style={{ flex: '1 1 0%', textAlign: 'center', border: '1px solid rgba(0, 0, 0, 0.1)', background: 'transparent', fontWeight: 'normal', cursor: 'pointer' }}>
//                     Hold
//                   </div>
//                   <div className="p-1" style={{ flex: '1 1 0%', textAlign: 'center', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '0px 20px 20px 0px', background: 'transparent', fontWeight: 'normal', cursor: 'pointer' }}>
//                     Paid
//                   </div>
//                 </div>
//                 <div className="p-2 rounded-2" style={{ height: '50vh', overflow: 'auto', background: 'rgba(255, 255, 255, 0.74)' }}>
//                   <table className="table">
//                     <tbody>
//                       {employees.map(employee => (
//                         <tr key={employee.id}>
//                           <td style={{ verticalAlign: 'middle', background: 'none' }}>
//                             <div className="d-flex align-items-center gap-3 mx-2">
//                               <div style={{ 
//                                 height: '30px', 
//                                 width: '30px', 
//                                 backgroundColor: 'rgb(204, 204, 204)', 
//                                 borderRadius: '50%', 
//                                 fontSize: '1rem', 
//                                 fontWeight: 'bold', 
//                                 color: 'rgb(255, 255, 255)', 
//                                 display: 'flex', 
//                                 alignItems: 'center', 
//                                 justifyContent: 'center' 
//                               }}>
//                                 {employee.avatar ? (
//                                   <img 
//                                     src={employee.avatar} 
//                                     alt={employee.name} 
//                                     style={{ 
//                                       height: '100%', 
//                                       width: '100%', 
//                                       borderRadius: '50%', 
//                                       objectFit: 'cover' 
//                                     }} 
//                                   />
//                                 ) : (
//                                   employee.name.charAt(0)
//                                 )}
//                               </div>
//                               <div style={{ display: 'flex', flexDirection: 'column' }}>
//                                 <span className="badge-primary" style={{ margin: '0px 0px 0px -0.2rem', width: 'fit-content', padding: '1px' }}>
//                                   ₹ {employee.salary.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//                                 </span>
//                                 <span className="text-capitalize" style={{ fontSize: '1rem', margin: '0px', color: 'black' }}>
//                                   {employee.name}
//                                 </span>
//                               </div>
//                             </div>
//                           </td>
//                           <th className="text-end" style={{ verticalAlign: 'middle', background: 'none' }}>
//                             <span className="py-1 px-2 badge-warning">{employee.status}</span>
//                           </th>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
              
//               {/* Activity Section */}
//               <div className="pl-0 pl-lg-2 mt-3">
//                 <div className="p-3 rounded-2" style={{ height: 'fit-content', background: 'rgba(187, 184, 184, 0.2)' }}>
//                   <h5 className="mb-3 d-flex align-items-center justify-content-between">
//                     Activity 
//                     <div style={{ 
//                       height: '2rem', 
//                       width: '2rem', 
//                       fontSize: '1.2rem', 
//                       background: 'rgba(194, 183, 183, 0.6)', 
//                       borderRadius: '50%', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center' 
//                     }}>
//                       0
//                     </div>
//                   </h5>
//                   <div className="p-2 rounded-2" style={{ height: 'fit-content', background: 'rgba(255, 255, 255, 0.74)' }}>
//                     <div className="d-flex align-items-center rounded-2 flex-column justify-content-center gap-4" style={{ height: '100%', width: '100%' }}>
//                       <ActivityIcon style={{ height: '20vh', width: 'auto' }} />
//                       <span>No activity found for this month</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <div className="HrPannelFooter bg-dark w-100 text-white" style={{ zIndex: 50, position: 'absolute', bottom: 0 }}>
//         <div className="d-flex justify-content-center align-items-center gap-5 p-2" style={{ backgroundColor: 'var(--primaryDashMenuColor)', color: 'var(--primaryDashColorDark)' }}>
//           <span className="d-none d-md-flex">
//             <span className="text-capitalize">
//               {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}, {new Date().toLocaleTimeString()}
//             </span>
//           </span>
//           <span className="d-flex align-items-center gap-2">
//             <WifiIcon style={{ height: '1em', width: '1em' }} />
//             <span className="d-none d-md-flex">Connected</span>
//           </span>
//           <span>
//             <BrowserIcon style={{ height: '1em', width: '1em' }} /> Chrome
//           </span>
//           <span title="IP Address" className="d-flex align-items-center gap-1">
//             <DeviceIcon style={{ height: '1em', width: '1em' }} /> 122.161.52.228
//           </span>
//           <div>Unable to retrieve your location.</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayrollDashboard;
