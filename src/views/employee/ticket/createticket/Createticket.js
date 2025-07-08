import React, { useState } from 'react'
import './Createticket.css'

const Createticket = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    priority: '',
    department: '',
    file: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
    // You can add API call here to send form data to backend
  }

  return (
    <div className="ticket-container">
      <h2>Create Support Ticket</h2>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter subject"
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your issue"
          required
        ></textarea>

        <label>Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          required
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Admin">Admin</option>
        </select>

        <label>Attach File (optional)</label>
        <input type="file" name="file" onChange={handleChange} />

        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  )
}

export default Createticket
