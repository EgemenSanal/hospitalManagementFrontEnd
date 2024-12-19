import { DoctorsList } from './DoctorsList'
import { BackButton } from '../common/BackButton'
import './DoctorsPage.css'

export function DoctorsPage() {
  return (
    <div className="container">
      <main className="doctors-content">
        <DoctorsList />
        <BackButton />
      </main>
    </div>
  )
}