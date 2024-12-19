import { PrescriptionsList } from './PrescriptionList' 
import './Prescriptions.css'

export function Prescriptions() {
  return (
    <div className="container">
      <main className="prescriptions-content">
        <h2 className="prescriptions-title">Prescriptions</h2>
        <PrescriptionsList />
      </main>
    </div>
  )
}