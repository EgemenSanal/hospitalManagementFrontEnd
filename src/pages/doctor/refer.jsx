import { useState } from 'react'
import './doctor.css'

export default function Refer() {
  const [formData, setFormData] = useState({
    doctorName: '',
    availableTime: '',
    patientName: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <div className="form-container">
      <h1 className='h1class'>Refer a Doctor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-groups">
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            placeholder="Doctor Name"
            required
          />
        </div>
        <div className="form-groups">
          <input
            type="text"
            name="availableTime"
            value={formData.availableTime}
            onChange={handleChange}
            placeholder="Available Time"
            required
          />
        </div>
        <div className="form-groups">
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Patient Name"
            required
          />
        </div>
        <button type="submit" className='buttonclass'>Submit</button>
      </form>
    </div>
  )
}
