import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import Cookies from 'js-cookie';

import { setCookie } from '../../utils/cookieUtils';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function LoginForm() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    let jwtToken = Cookies.get('jwtToken') 
        console.log(jwtToken)
        if(jwtToken){
            navigate('/profile')
          }
  }, [])

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const api = 'http://localhost:3000/api/v1/users/login';
    const apiTirth = 'https://tragedy-dumb-programmes-involved.trycloudflare.com/api/login';
    const apiKathan = 'https://onion-una-sodium-manufacturer.trycloudflare.com/userRouter/login';

     try {
      const response = await axios.post(apiKathan, {
        email: username, // tirth
        // username: username, // akash
        password
      });

      const jwtToken = response.data.data.Atoken

       setCookie('jwtToken', jwtToken, 7); // Set cookie to expire in 7 days
      console.log('Cookie set:', jwtToken);

      
        if(jwtToken){
            navigate('/dashboard')
          }
     

      console.log(jwtToken)
      console.log(response.headers)

      


      toast.success(response.data.message);
      console.log('Login successful', response.data);
    } catch (error) {
      toast.error(error.message);
      console.error('Login failed', error.response ? error.response.data : error.message);
      // console.error('Login failed', error.response.data.Message );
    }
  }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Email address or username
              </label>
              <div className="mt-2">
                <input
                  type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  name="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a> */}
                  <Link  className="font-semibold text-indigo-600 hover:text-indigo-500" to="/forgotpassword">Forgot password?</Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                   value={password} onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

         
        </div>
      </div>
    </>
  )
}
