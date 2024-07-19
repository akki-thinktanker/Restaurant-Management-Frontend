import React, {useEffect, useState} from 'react'
import axios from 'axios';


function Dashboard() {
    const apiTirth = 'https://tragedy-dumb-programmes-involved.trycloudflare.com/api/user/get-user';
    const [totalUser, setTotalUser] = useState(0)

     useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiTirth);
        console.log(response.data.count);
        setTotalUser(response.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiTirth]);

  return (
    <>
      <div>Dashboard</div>
      <p>Total User = {totalUser}</p>
    </>
  )
}

export default Dashboard