import { useState } from 'react'
import './admin.css'
import { Link } from 'react-router-dom'

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState(null)

  const handleSectionClick = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="admin-container">
      <header className="header">
        <h1>Hospital Management</h1>
        <p className="subtitle">Admin Panel</p>
      </header>

      <div className="admin-banner">
        <h2>ADMIN</h2>
      </div>

      <section className="admin-panel">
        <h3>Admin Panel</h3>
        <p className="section-subtitle">Operations</p>

        <div className="admin-grid">
          <Link to= "/manageuser"
            className="admin-card"
          >
            User Management
          </Link>

          <Link
            className="admin-card"
          >
            Emergency Response
          </Link>

          <Link to="/registerworker"
            className="admin-card"
          >
            Register Workers
          </Link>

          <Link 
            className="admin-card"
          >
            Manage Hospital Facilities
          </Link>

          <Link 
            className="admin-card"
          >
            Feedbacks
          </Link>

          <Link 
            className="admin-card"
          >
            Admin Profile
          </Link>
        </div>
      </section>
    </div>
  )
}
