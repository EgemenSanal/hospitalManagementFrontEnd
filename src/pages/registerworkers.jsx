import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function RegisterWorkers() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
      name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  async function handleRegister(e){
    e.preventDefault()
    const res = await fetch("/api/register",{
        method: 'post',
        body: JSON.stringify(formData),
    });
    const data = await res.json()
    if (data.errors) {
        setErrors(data.errors)
    } else {
        navigate("/")
    console.log(data)
    }
}

  return (
    <div className="register-container">
      <h1>Register Worker</h1>
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Worker's Name and Surname</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>setFormData({...formData,name: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Worker's E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>setFormData({...formData,email: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={(e) =>setFormData({...formData,role: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>setFormData({...formData,password: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password_confirm"
            name="password_confirm"
            value={formData.password_confirmation}
            onChange={(e) =>setFormData({...formData,password_confirmation: e.target.value})}
            required
          />
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  )
}