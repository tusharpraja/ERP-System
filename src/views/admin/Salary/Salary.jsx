import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import './Salary.css' // Import custom CSS for Salary component

const Salary = () => {
  const [salaries, setSalaries] = useState([
    {
      id: 1,
      code: 'DEMO0002',
      name: 'Hr Manager',
      designation: 'HR Manager',
      basic: 39439,
      hra: 34784,
      conveyance: 8000,
      other: 3484,
    },
    {
      id: 2,
      code: 'DEMO0003',
      name: 'Demo Manager',
      designation: 'Digital Marketing',
      basic: 30000,
      hra: 15000,
      conveyance: 5000,
      other: 10000,
    },
    {
      id: 3,
      code: 'DEMO0004',
      name: 'Demo Emp',
      designation: 'Digital Marketing',
      basic: 45000,
      hra: 1230,
      conveyance: 4850,
      other: 14,
    },
    {
      id: 4,
      code: 'DEMO0005',
      name: 'Amar Kumar',
      designation: 'Digital Marketing',
      basic: 16000,
      hra: 10000,
      conveyance: 2000,
      other: 2000,
    },
    {
      id: 5,
      code: 'DEMO0006',
      name: 'AMAR Demo',
      designation: 'Digital Marketing',
      basic: 15000,
      hra: 1200,
      conveyance: 9000,
      other: 900,
    },
    {
      id: 6,
      code: 'DEMO0009',
      name: 'Akash Singh',
      designation: 'Digital Marketing',
      basic: 32500,
      hra: 15200,
      conveyance: 35124,
      other: 21533,
    },
    {
      id: 7,
      code: 'DEMO0010',
      name: 'Demo Emp2',
      designation: 'Digital Marketing',
      basic: 10000,
      hra: 5000,
      conveyance: 6000,
      other: 2000,
    },
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const perPage = 7

  const filteredSalaries = salaries.filter(
    (salary) =>
      salary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      salary.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      salary.designation.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatINR = (x) => {
    return '₹' + x.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  const renderTable = () => {
    const start = (currentPage - 1) * perPage
    const end = Math.min(start + perPage, filteredSalaries.length)

    return filteredSalaries.slice(start, end).map((s) => {
      const total = s.basic + s.hra + s.conveyance + s.other
      return (
        <tr key={s.id} className="hover-effect">
          <td className="text-center text-muted">{String(s.id).padStart(2, '0')}</td>
          <td>
            <div className="d-flex align-items-center">
              <div
                className="avatar bg-gradient-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{ width: '40px', height: '40px', fontSize: '14px', fontWeight: '600' }}
              >
                {s.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()}
              </div>
              <div>
                <div className="text-primary fw-semibold">{s.code}</div>
                <div className="text-dark fw-medium">{s.name}</div>
              </div>
            </div>
          </td>
          <td className="text-capitalize fw-medium">{s.designation}</td>
          <td className="text-end text-success fw-medium">{formatINR(s.basic)}</td>
          <td className="text-end text-info fw-medium">{formatINR(s.hra)}</td>
          <td className="text-end text-warning fw-medium">{formatINR(s.conveyance)}</td>
          <td className="text-end text-secondary fw-medium">{formatINR(s.other)}</td>
          <td className="text-end text-dark fw-bold">{formatINR(total)}</td>
          <td className="text-center action-icons">
            <button className="action-button">
              <FaEye /> {/* View Icon */}
            </button>
            <button className="action-button">
              <FaEdit /> {/* Edit Icon */}
            </button>
            <button className="action-button">
              <FaTrash /> {/* Delete Icon */}
            </button>
          </td>
        </tr>
      )
    })
  }

  const updatePagination = () => {
    const max = Math.ceil(filteredSalaries.length / perPage)
    const startIndex = (currentPage - 1) * perPage + 1
    const endIndex = Math.min(currentPage * perPage, filteredSalaries.length)

    const pageBtn = {
      backgroundColor: '#f0f0f0',
      padding: '8px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    }

    const pageNum = (isActive) => ({
      ...pageBtn,
      backgroundColor: isActive ? '#007bff' : '#f0f0f0',
      color: isActive ? '#fff' : '#000',
    })

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          backgroundColor: '#e1d7d7',
          padding: '12px 16px',
          borderRadius: '6px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '14px', color: '#4b5563' }}>
          Showing {startIndex} to {endIndex} of {filteredSalaries.length} results
        </span>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button
            style={pageBtn}
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          >
            <FaChevronLeft /> Previous
          </button>

          {/* Pagination Buttons */}
          {[...Array(max)].map((_, index) => (
            <button
              key={index}
              style={pageNum(currentPage === index + 1)}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            style={pageBtn}
            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, max))}
          >
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    )
  }

  const addSalary = () => {
    const code = prompt('Employee Code')
    if (!code) return
    const name = prompt('Employee Name')
    const designation = prompt('Designation') || 'Employee'
    const basic = parseFloat(prompt('Basic Salary')) || 0
    const hra = parseFloat(prompt('HRA')) || 0
    const conveyance = parseFloat(prompt('Conveyance')) || 0
    const other = parseFloat(prompt('Other Allowances')) || 0

    const newSalary = {
      id: salaries.length + 1,
      code,
      name,
      designation,
      basic,
      hra,
      conveyance,
      other,
    }
    setSalaries([...salaries, newSalary])
  }

  return (
    <div className="custom-container">
      <div className="card border-0 shadow-lg">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="header-left">
              <h4 className="mb-1 fw-bold text-dark">Salary Management</h4>
              <p className="text-muted mb-0">
                Comprehensive employee salary records and compensation details
              </p>
            </div>
            <div className="header-right d-flex gap-3">
              <input
                type="text"
                className="search-input"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-info" onClick={() => alert('Exporting PDF...')}>
                <i className="fas fa-file-pdf me-2"></i>PDF
              </button>
              <button className="btn btn-success" onClick={() => alert('Exporting Excel...')}>
                <i className="fas fa-file-excel me-2"></i>Excel
              </button>
              <button className="btn btn-primary" onClick={addSalary}>
                <i className="fas fa-plus me-2"></i>Add Salary
              </button>
            </div>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-container">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="text-center text-muted fw-semibold py-3" style={{ width: '5%' }}>
                    ID
                  </th>
                  <th className="text-muted fw-semibold py-3" style={{ width: '20%' }}>
                    Employee
                  </th>
                  <th className="text-muted fw-semibold py-3" style={{ width: '15%' }}>
                    Designation
                  </th>
                  <th className="text-end text-muted fw-semibold py-3" style={{ width: '12%' }}>
                    Basic
                  </th>
                  <th className="text-end text-muted fw-semibold py-3" style={{ width: '12%' }}>
                    HRA
                  </th>
                  <th className="text-end text-muted fw-semibold py-3" style={{ width: '12%' }}>
                    Conveyance
                  </th>
                  <th className="text-end text-muted fw-semibold py-3" style={{ width: '12%' }}>
                    Other
                  </th>
                  <th className="text-end text-muted fw-semibold py-3" style={{ width: '12%' }}>
                    Total
                  </th>
                  <th className="text-center text-muted fw-semibold py-3" style={{ width: '10%' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>

      {updatePagination()}
    </div>
  )
}

export default Salary
