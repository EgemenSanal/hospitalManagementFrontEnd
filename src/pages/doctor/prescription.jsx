import { useState } from 'react'
import './doctor.css'

export default function Prescription() {
  const [formData, setFormData] = useState({
    medicineName: '',
    patientName: '',
    dosage: '',
    frequency: '',
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Prescription Data:', formData)
    // Handle form submission here
  }

  return (
    <div className="prescription-container">
      <h1>Prescription</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="medicineName"
            value={formData.medicineName}
            onChange={handleChange}
            placeholder="Medicine Name"
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Patient Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            placeholder="Dosage"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            placeholder="Frequency"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Notes"
            rows="3"
          />
          <button type="submit" className="submit-btn">
          Save & Continue
        </button>
        </div>

        
      </form>
    </div>
  )
}
