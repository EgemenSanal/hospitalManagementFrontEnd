import { DoctorCard } from './DoctorsCard'
import './DoctorsList.css'

const doctors = [
  {
    id: 1,
    name: 'Doctor name',
    information: 'Information about doctor.'
  },
  {
    id: 2,
    name: 'Doctor name',
    information: 'Information about doctor.'
  }
]

export function DoctorsList() {
  return (
    <div className="doctors-list">
      {doctors.map(doctor => (
        <DoctorCard 
          key={doctor.id}
          doctor={doctor}
        />
      ))}
    </div>
  )
}