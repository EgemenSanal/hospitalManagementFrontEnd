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
import Feedbacks from './pages/admin/feedback'
import EmergencyResponse from './pages/admin/emergencyresponse'
import MapComponent from './pages/admin/saveadress'
import { ProfileForm } from './pages/patient/Profile/ProfileForm'
import { DoctorsPage } from './pages/patient/Appointment/DoctorsPage'
import { PatientHistory } from './pages/patient/PatientHistory/PatientHistory'
import { PaymentMethod } from './pages/patient/PaymentMethod/PaymentMethod'
import { Prescriptions } from './pages/patient/Prescriptions/Prescriptions'


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
        <Route path='/feedbacks' element={user?.role === 'A' ? <Feedbacks /> : <Home />}/>
        <Route path='/emergencyresponse' element={user?.role === 'A' ? <EmergencyResponse /> : <Home />}/>

        <Route path='/doctorpanel' element={user?.role === 'D' ? <DoctorPanel /> : <Home />}/>
        <Route path='/prescription' element={user?.role === 'D' ? <Prescription /> : <Home />}/>
        <Route path='/symptoms' element={user?.role === 'D' ? <Symptoms /> : <Home />}/>
        <Route path='/refer' element={user?.role === 'D' ? <Refer /> : <Home />}/>
        <Route path='/googlefit' element={user?.role === 'D' ? <GoogleFit /> : <Home />}/>

        <Route path='/save-address' element={<MapComponent/>}/>
        <Route path='/patientprofile' element={<ProfileForm/>}/>
        <Route path='/appointment' element={<DoctorsPage/>}/>
        <Route path='/history' element={<PatientHistory/>}/>
        <Route path='/payment' element={<PaymentMethod/>}/>
        <Route path='/patientprescriptions' element={<Prescriptions/>}/>





      </Route>
    </Routes>
    
    
    </BrowserRouter>
  
}

