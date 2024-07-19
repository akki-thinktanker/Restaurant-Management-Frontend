import React from 'react';
import { removeCookie } from '../../utils/cookieUtils';
import { useNavigate } from 'react-router-dom';

const LogoutComponent = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeCookie('jwtToken');
    console.log('Cookie removed');
    navigate('login')
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutComponent;