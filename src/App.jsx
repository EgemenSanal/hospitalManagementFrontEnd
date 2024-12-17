import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Login from './pages/auth/login'
import Layout from './pages/layout'
import Register from './pages/auth/register'
import Profile from './pages/profile/profile'
import RegisterWorkers from './pages/registerworkers'
import AdminPanel from './pages/admin/adminpanel'
import ManageUser from './pages/admin/manageuser'
import DoctorPanel from './pages/doctor/doctorpanel'
import Prescription from './pages/doctor/prescription'
import Symptoms from './pages/doctor/symptoms'
import Refer from './pages/doctor/refer'
import GoogleFit from './pages/doctor/googlefit'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'


export default function App() {
  const {user} = useContext(AppContext)

    return <BrowserRouter>

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element= {<Home/>} />
        <Route path='/login' element={user ? <Home /> : <Login />}/>
        <Route path='/register' element={user ? <Home /> : <Register />}/>
        
        <Route path='/registerworker' element={<RegisterWorkers/>}/>
        <Route path='/adminpanel' element={<AdminPanel/>}/>
        <Route path='/manageuser' element={user?.role === 'A' ? <ManageUser /> : <Home />}/>
        <Route path='/doctorpanel' element={<DoctorPanel/>}/>
        <Route path='/prescription' element={<Prescription/>}/>
        <Route path='/symptoms' element={<Symptoms/>}/>
        <Route path='/refer' element={<Refer/>}/>
        <Route path='/googlefit' element={<GoogleFit/>}/>





      </Route>
    </Routes>
    
    
    </BrowserRouter>
  
}

