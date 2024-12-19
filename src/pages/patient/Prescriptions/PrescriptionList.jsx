import { PrescriptionItem } from './PrescriptionItem'
import './Prescriptionlist.css'

const prescriptions = [
  {
    id: 1,
    medication: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Twice daily',
    startDate: '2024-01-15',
    endDate: '2024-01-30'
  },
  {
    id: 2,
    medication: 'Ibuprofen',
    dosage: '400mg',
    frequency: 'As needed',
    startDate: '2024-01-15',
    endDate: '2024-01-22'
  }
]

export function PrescriptionsList() {
  return (
    <div className="prescriptions-list">
      {prescriptions.map(prescription => (
        <PrescriptionItem 
          key={prescription.id} 
          prescription={prescription} 
        />
      ))}
    </div>
  )
}