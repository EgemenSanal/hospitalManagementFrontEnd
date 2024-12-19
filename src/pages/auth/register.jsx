import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../Context/AppContext"

export default function Register(){

    const navigate = useNavigate()
    const {setToken} = useContext(AppContext)


    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role:'P'

    })
    


    const [errors, setErrors] = useState({})

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
            localStorage.setItem('token', data.token)
            setToken(data.token)
            navigate("/")
        console.log(data)
        }
    }

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>HealthWave</h1>
        <p>Hospital Management System</p>
      </div>
      
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Name" 
                value={formData.name} 
                onChange={(e) =>setFormData({...formData,name: e.target.value})}/>
                {errors.name && <p className="error">{errors.name[0]}</p>}
        </div>
        <div className="form-group">
          <label htmlFor>E-mail</label>
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password"
                value={formData.password_confirmation} 
                onChange={(e) =>setFormData({...formData,password_confirmation: e.target.value})}/>
        </div>

        <button type="submit" className="login-button">
          Register
        </button>
      </form>
    </div>
  )
}

