import React , { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios  from 'axios';
import { toast } from 'react-toastify';


const DashboardMain = () => {







  
let [nameme, setName] = useState();
const navigate = useNavigate();
useEffect(() => {
  let token = localStorage.getItem("token");

  if (!token) return navigate("/login");

  async function getMe() {
    try {
      let { data } = await axios.get("/auth");
     
      setName(data);
    } catch (error) {
      toast("Error", { type: "error" });
    }
  }
  getMe();
}, []);

  return (
    <div className="my-5 px-5 mx-5">
      <h1 className="text-info fw-bold my-4">Dashboard</h1>
      <h3 className="my-4">
        <i className="fa-solid fa-user mx-2"></i>Welcome {nameme?.name}
      </h3>
      <p>You have not yet setup a profile, please add some info</p>
      <Link className="  text-light btn btn-info  fs-5" to="/create-profile">
        Create Profile
      </Link>
     
     
    </div>
  );
}

export default DashboardMain
