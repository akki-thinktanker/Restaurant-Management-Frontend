import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginForm from './Components/User/LoginForm.jsx'
import RegisterForm from './Components/User/RegisterForm.jsx'
import ForgotPassword from './Components/User/ForgotPassword.jsx'
import ResetPassword from './Components/User/ResetPassword.jsx'
import VerifyOTP from './Components/User/VerifyOTP.jsx'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProfileComponent from './Components/User/ProfileComponent.jsx'
import Dashboard from './Components/User/Dashboard.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App />}>
      <Route path='login' element={<LoginForm />} />
      <Route path='register' element={<RegisterForm />} />
      <Route path='forgotpassword' element={<ForgotPassword />} />
      <Route path='resetpassword' element={<ResetPassword />} />
      <Route path='verify-otp' element={<VerifyOTP />} />
      <Route path='profile' element={<ProfileComponent />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ToastContainer />
    <RouterProvider router={router} />

  </React.StrictMode>,
)
