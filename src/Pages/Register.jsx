import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { toast } from "react-toastify";



const Register = () => {
 const [values, setValues] = useState({
   name: "",
   email:"",
   password: "",
 });
 const navigate = useNavigate();

 useEffect (() => {
   let token = localStorage.getItem("token");
   if (token) navigate("/dashboard");
 }, [])


 async function handleRegister(e) {
   e.preventDefault();


  if (values.password !== values.confirmedPassword)
     return toast("Passwords do not match", { type: "error" });
 
 
 //register


try {
    let {
      data: { token, massage },
    } = await axios.post("/users", values);
    
    localStorage.setItem("token", token);
    axios.defaults.headers.common["x-auth-token"] = `${token}`;

    toast("Successfully", { type: "success" });

    navigate("/dashboard");
} catch (error) {
 toast("Not Found", { type: "error" });
  
}
}

function  handleInputChange(e){
  setValues((oldValues)=>({
    ...oldValues,[e.target.name]:e.target.value,
  }));
}

  return (
    <div>
      <Header />
      <main className="min-vh-100 d-flex align-items-center">
        <form onSubmit={handleRegister} className="w-75 mx-auto  p-5">
          <h1 className="display-2 fw-3 fw-bolder text-info ">Sign Up</h1>
          <p className=" fw-3 text-dark fs-3 ">
            <i className="fa-solid fa-user mx-2"></i>Create Your Account
          </p>
          <div className="my-3">
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Name "
              className="form-control"
              required
              min={13}
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-1">
            <input
              type="mail"
              name="email"
              id="email"
              placeholder="Email Address"
              className="form-control"
              required
              min={13}
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
          <p className="small disable">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </p>
          <div className="my-3 ">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control"
              required
              min={6}
              value={values.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-3 ">
            <input
              type="Confirmpassword"
              name="confirmedPassword"
              id="confirmedPassword"
              placeholder="Confirm Password"
              className="form-control"
              required
              min={6}
              value={values.confirmedPassword}
              onChange={handleInputChange}
            />
          </div>
          <button className="my-2 btn  btn-info">Register</button>
          <p className="text-left">
            Don't have an account?
            <Link className="linknnuj" to="/login">
              Sign In
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}

export default Register
