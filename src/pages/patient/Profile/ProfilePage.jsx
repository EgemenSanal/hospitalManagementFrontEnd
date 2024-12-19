import { Header } from '../Header/Header'
import { ProfileForm } from './ProfileForm'
import './ProfilePage.css'

export function ProfilePage() {
  return (
    <div className="container">
      <Header />
      <main className="profile-content">
        <h2 className="profile-title">Profile information</h2>
        <ProfileForm />
      </main>
    </div>
  )
}