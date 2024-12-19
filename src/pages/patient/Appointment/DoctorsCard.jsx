import './DoctorsCard.css'

export function DoctorCard({ doctor }) {
  const { name, information } = doctor

  const handleAppointment = () => {
    // Handle appointment booking
    console.log('Booking appointment with:', name)
  }

  return (
    <div className="doctor-card">
      <h3 className="doctor-name">{name}</h3>
      <p className="doctor-info">{information}</p>
      <button 
        className="appointment-button"
        onClick={handleAppointment}
      >
        Make an appointment
      </button>
    </div>
  )
}