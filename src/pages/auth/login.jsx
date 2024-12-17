import { useContext, useState } from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'

export default function Login(){

  const {setToken} = useContext(AppContext)
  const navigate = useNavigate()

  const[formData, setFormData] = useState({
      email: '',
      password: '',
  })



  const [errors, setErrors] = useState({})

  async function handleLogin(e){
      e.preventDefault()
      const res = await fetch("/api/login",{
          method: 'post',
          body: JSON.stringify(formData),
      });
      const data = await res.json()
      console.log(data)
      if (data.errors) {
          setErrors(data.errors)
      } else {
          localStorage.setItem('token', data.token)
          localStorage.setItem('userID',data.userid)
          setToken(data.token)
          //navigate("/")
      }
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>HealthWave</h1>
        <p>Hospital Management System</p>
      </div>
      
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input type="text" placeholder="E-mail"
                value={formData.email} 
                onChange={(e) =>setFormData({...formData,email: e.target.value})}/>
                {errors.email && <p className="error">{errors.email[0]}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password"
                value={formData.password} 
                onChange={(e) =>setFormData({...formData,password: e.target.value})}/>
                {errors.password && <p className="error">{errors.password[0]}</p>}
        </div>

        <button type="submit" className="login-button">
          Log In
        </button>
      </form>

      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  )
}

