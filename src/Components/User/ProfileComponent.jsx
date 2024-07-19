import React, { useEffect, useState } from 'react';
import { getCookie } from '../../utils/cookieUtils';

const ProfileComponent = () => {
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const token = getCookie('jwtToken');
    if (token) {
      setJwtToken(token);
    }
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {jwtToken ? <p>Token: {jwtToken}</p> : <p>No token found</p>}
    </div>
  );
};

export default ProfileComponent;