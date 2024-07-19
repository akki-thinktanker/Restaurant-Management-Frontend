import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCookie } from '../../utils/cookieUtils';
import  LogoutComponent  from '../User/LogoutComponent';

export default function Header() {
    const jwtToken = getCookie('jwtToken')
    return (
        <>
        <div  className='flex flex-row justify-between'>

            <div>LOGO</div>
            <div className='flex flex-row'>

            <ul className='flex flex-row gap-4 '>
                {jwtToken ? 
                <li><LogoutComponent /></li>
                // <li><Link to="/logout"><LogoutComponent /></Link></li>
                 :
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                }
                {/* <li><Link to="/forgotpassword">Forgot Password</Link></li> */}
                {/* <li><Link to="/verify-otp">Verify OTP</Link></li> */}
                {/* <li><Link to="/resetpassword">Reset Password</Link></li> */}
            </ul>
            </div>
        </div>

        </>
    );
}

