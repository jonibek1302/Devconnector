import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "./../Components/Header";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, []);

  async function handleLogin(e) {
    e.preventDefault();

    // Validations ...

    try {
      // Login
      let {
        data: { token, message },
      } = await axios.post("/auth", values);

      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-auth-token"] = `${token}`;

      toast("Successfully", { type: "success" });

      navigate("/dashboard");
    } catch (error) {
      toast("User Undifiend", { type: "error" });
   
    }
  }

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div>
      <Header />
      <main className="min-vh-100 d-flex align-items-center">
        <form onSubmit={handleLogin} className="w-75 mx-auto  p-5">
          <h1 className="display-2 fw-3 fw-bolder text-info ">Sign In</h1>
          <p className=" fw-3 text-dark fs-3 ">
            <i className="fa-solid fa-user mx-2"></i>Sign Into Your Account
          </p>

          <div className="my-4">
            <label htmlFor="phone" className="form-label"></label>
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
          <div className="my-3">
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
          <button className="my-2 btn  btn-info">Login</button>
          <p className="text-left">
            Don't have an account? <Link to="/register"> Sign Up</Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
