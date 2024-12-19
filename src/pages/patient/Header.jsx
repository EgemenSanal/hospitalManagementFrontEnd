import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="auth-buttons">
        <button className="btn">Sign in</button>
        <button className="btn">Register</button>
      </div>
      <h1>Health Wave</h1>
      <p className="subtitle">hospital website</p>
    </header>
  )
}