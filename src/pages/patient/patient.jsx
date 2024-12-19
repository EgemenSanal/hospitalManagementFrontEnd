import './patient.css'

function MenuItem({ title, description, onClick }) {
  return (
    <div className="menu-item" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Patient() {
  const handleMenuClick = (action) => {
    console.log(`${action} clicked`)
  }

  const menuItems = [
    { title: 'Payments', description: 'Make payments' },
    { title: 'Insurance', description: 'Edit insurance' },
    { title: 'History', description: 'Patient history' },
    { title: 'Profile', description: 'Check profile' },
    { title: 'Prescriptions', description: 'Check prescription' },
    { title: 'Appointments', description: 'Make appointment' },
    { title: 'Payment save', description: 'Save payment method' }
  ]

  return (
    <div className="container">
      <header>
        <div className="auth-buttons">
          <button className="btn">Sign in</button>
          <button className="btn">Register</button>
        </div>
        <h1>HEALTH WAVE</h1>
        <p className="subtitle">website</p>
      </header>

      <main>
        <h2>Menu</h2>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
              onClick={() => handleMenuClick(item.title)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Patient