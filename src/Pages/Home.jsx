import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom';

const home = () => {
  const navigate = useNavigate();

   useEffect(() => {
  let token = localStorage.getItem("token");  
  if (token) return navigate("/dashboard");
   } ,[])



   
  return (
    <div className='home'>
      <Header />
      <div className="min-vh-100 home-all d-flex justify-content-center align-items-center">
        <div className="home-main text-center">
          <h1 className="fw-bold ">Developer Connector</h1>
          <p>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <Link className=" home-btn text-light btn btn-info  fs-5" to="/register">
            Sign Up
          </Link>
          <Link className=" home-btn text-dark btn btn-light  fs-5" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default home
