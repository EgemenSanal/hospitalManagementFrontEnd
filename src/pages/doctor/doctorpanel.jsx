import './doctor.css'

export default function DoctorPanel() {
  const handleButtonClick = (action) => {
    console.log(`${action} button clicked`)
  }

  return (
    <div className="doctor-panel">
      <h1>Doctor Panel</h1>
      <div className="button-grid">
        <button 
          className="panel-button"
          onClick={() => handleButtonClick('Lab Reports')}
        >
          Lab Reports
        </button>
        
        <button 
          className="panel-button"
          onClick={() => handleButtonClick('Patient')}
        >
          Patient
        </button>
        
        <button 
          className="panel-button"
          onClick={() => handleButtonClick('Edit Prescription')}
        >
          Edit Prescription
        </button>
        
        <button 
          className="panel-button"
          onClick={() => handleButtonClick('Google Fit Data')}
        >
          Google Fit Data
        </button>
        
        <button 
          className="panel-button"
          onClick={() => handleButtonClick('Assistants details')}
        >
          Assistants details
        </button>
        
        <button 
          className="panel-button"
          onClick={() => handleButtonClick('Referral')}
        >
          Referral
        </button>
      </div>
    </div>
  )
}

