import { useState } from 'react'
import './doctor.css'

export default function Symptoms() {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfAdmission: '',
    symptomDescription: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to a server
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
      <h1>Patient Symptoms</h1>
      <form className='formsymptoms' onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="Patient Name"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <input
              type="date"
              name="dateOfAdmission"
              value={formData.dateOfAdmission}
              onChange={handleChange}
              placeholder="Date of admission"
              className="form-input"
            />
          </div>
        </div>
        <div className="input-group">
          <textarea
            name="symptomDescription"
            value={formData.symptomDescription}
            onChange={handleChange}
            placeholder="Patient Symptom Description"
            className="form-textarea"
          />
        </div>
        <button type="submit" className="submit-button">
          Save
        </button>
      </form>
    </div>
  )
}
