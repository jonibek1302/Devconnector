import React from 'react'
import { Form } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import HeaderIn from '../Components/HeaderIn';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import  axios  from 'axios';
import { toast } from 'react-toastify';

const AddExperience = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    title:"",
    company: "",
    from:"",
  });

  async function handleCreate(e) {
    e.preventDefault();
    //  //create
    try {
      let { data } = await axios.put("/profile/experience", values);
      toast("Added Experience", { type: "success" });
     
      navigate("/dashboard");
    } catch (error) {
      toast("Error", { type: "error" });
    
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
      <HeaderIn />
      <main className="min-vh-100 d-flex align-items-center">
        <form
          onSubmit={handleCreate}
          className="w-75 mx-auto  p-5"
        >
          <h1 className="display-2 fw-3 fw-bolder text-info ">
            Add An Experience
          </h1>
          <p className=" fw-3 text-dark fs-3 ">
            <i className="fas fa-code-branch mx-2"></i> Add any
            developer/programming positions that you have had in the past
          </p>

          <p className="small disable">* = required field</p>

          <div className="my-3 jobtitle">
            <input
             
              type="text"
              name="title"
              id="jobtitle"
              placeholder="* Job Title"
              className="form-control"
              value={values.title}
              onChange={handleInputChange}
              
            />
          </div>

          <div className="my-3 companyadd">
            <input
              required
              type="text"
              name="company"
              id="company"
              placeholder="* Company"
              className="form-control"
              value={values.company}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-3 location">
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="form-control"
              // value={values.location}
              // onChange={handleInputChange}
            />
          </div>
          <div className="my-3 fromdate">
            <label className="fw-bold" htmlFor="fromdate">
              From Date
            </label>
            <input
              type="date"
              name="from"
              id="fromdate"
              placeholder="Date"
              className="form-control"
              value={values.from}
              onChange={handleInputChange}
              
            />
          </div>
          <div className="my-2 currentjob">
            <input className="mx-2" id="currentjob" type="checkbox" />
            <label htmlFor="currentjob">Current Job</label>
          </div>
          <div className="my-3 todate">
            <label className="fw-bold" htmlFor="todate">
              To Date
            </label>
            <input
              type="date"
              name="todate"
              id="todate"
              placeholder="Date"
              className="form-control"
              // value={values.location}
              // onChange={handleInputChange}
            />
          </div>

          <div className="my-3 ">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                name="decription"
                // value={values.bio}
                // onChange={handleInputChange}
                as="textarea"
                placeholder="Job Description"
                rows={5}
              />
            </Form.Group>
          </div>

          <button className="my-3 mx-2 btn  btn-info">Jo'natish</button>
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </main>
    </div>
  );
}

export default AddExperience
