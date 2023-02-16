import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DashboardCreated = () => {

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
       toast("Error", { type: "error" });
    }
  }
  getMe();
}, []);


const compny = name?.company
const datecompany = name?.date


function hendleclickdelete() {

  async function getMe() {
    try {
      await axios.delete(`profile`);
       localStorage.removeItem("token");
      navigate("/register");
    } catch (error) {
     
         toast("Error", { type: "error" }); 
    }
  }
  getMe();
}


  return (
    <div>
      <div className="my-5 px-5 mx-5">
        <h1 className="text-info fw-bold my-4">Dashboard</h1>
        <h3 className="my-4">
          <i className="fa-solid fa-user mx-2"></i>Welcome Jonibek
        </h3>
        <div className="my-2">
          <Link className="btnedit btn border mx-2 fs-5" to="/Edit-profile">
            <i className="fas text-primary fa-user-circle "></i> Edit Profile
          </Link>
          <Link className="btnedit btn border mx-2 fs-5" to="/addexperience">
            <i className="fab text-primary fa-black-tie "></i> Add Expirience
          </Link>
          <Link className="btnedit btn border mx-2 fs-5" to="/addeducation">
            <i className="fas fa-graduation-cap text-primary"></i> Add Education
          </Link>
        </div>
        <h2 className="my-4">Experience Credentials</h2>

        <table className=" w-50 table table-bordered  ">
          <thead className="table-active">
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Title</th>
              <th scope="col">Years</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {name?.experience[0] ? 
              <tr>
                <th scope="row">{compny}</th>
                <td>{name?.experience[0]?.title}</td>
                <td>{name?.experience[0]?.from}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
             : 
              ""
            }
          </tbody>
        </table>
        <h2 className="my-4">Education Credentials</h2>

        <table className=" w-50 table table-bordered  ">
          <thead className="table-active">
            <tr>
              <th scope="col">School</th>
              <th scope="col">Degree</th>
              <th scope="col">Years</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {name?.education[0] ? (
              <tr>
                <th scope="row">{name?.education[0]?.school} </th>
                <td>{name?.education[0]?.degree}</td>
                <td>{name?.education[0]?.from} - 27.02.2023</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>

        <button
           onClick={hendleclickdelete}
          className="  text-light btn btn-danger  fs-5"
        >
          Delete my Accaunt
        </button>
          
      




      </div>
    </div>
  );
};

export default DashboardCreated
