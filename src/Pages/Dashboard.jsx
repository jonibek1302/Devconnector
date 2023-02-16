import React, { useEffect, useState }  from 'react'
import HeaderIn from '../Components/HeaderIn'

// import DashboardCreated from './../Components/DashboardCreated';
import DashboardMain from '../Components/DashboardMain';
import DashboardCreated from '../Components/DashboardCreated';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Dashboard = () => {


let [name, setName] = useState();
const navigate = useNavigate();
useEffect(() => {
  let token = localStorage.getItem("token");

  if (!token) return navigate("/login");

  async function getMe() {
    try {
      let { data } = await axios.get("/profile/me");

      setName(data);
    } catch (error) {
       toast("Error", { type: "error" });;
    }
  }
  getMe();
}, []);






  return (
    <div>
      <HeaderIn />
      {name ? <DashboardCreated /> : <DashboardMain />}
     
    </div>
  );
}

export default Dashboard
