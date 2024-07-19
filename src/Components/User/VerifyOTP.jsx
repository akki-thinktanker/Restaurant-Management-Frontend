import React, {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function VerifyOTP() {
  const [otp, setOTP] = useState('')
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const api = 'http://localhost:3000/api/v1/users/login';
    const apiTirth = 'https://tragedy-dumb-programmes-involved.trycloudflare.com/api/verify-otp';

     try {
      const response = await axios.post(apiTirth, {
        otp
      });
      console.log(response)
      if(response.status !== 200)
      {
        toast.error('OTP failed to verify!');
        console.log('OTP failed to verify', response.data);
        throw new Error(response?.message)
      }
      console.log('OTP Verified successful', response.data);
      toast.success('OTP verified successfully!', response.data.message);
      console.log(otp)
      navigate('/resetpassword', {state: {otp:otp}});
      return response?.data
    } catch (error) {
      toast.error('OTP failed to verify!');
      console.error('OTP failed to verify', error.response ? error.response.data : error.message);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter OTP
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Enter OTP
              </label>
              <div className="mt-2">
                <input
                  type="text" value={otp} onChange={(e) => setOTP(e.target.value)}
                  id="email"
                  name="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>  
    </>
  )
}

export default VerifyOTP