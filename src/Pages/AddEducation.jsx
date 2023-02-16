import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import HeaderIn from "../Components/HeaderIn";
import  axios  from 'axios';
import { toast } from "react-toastify";

const AddEducation = () => {
    
  const navigate = useNavigate();
  const [values, setValues] = useState({
    school:"",
    degree:"",
    fieldofstudy:"",
    from:"",
  });
 
  async function handleCreate(e) {
    e.preventDefault();
    //  //create
    try {
      let { data } = await axios.put("/profile/education", values);
      toast("Added Education", { type: "success" });
      
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
            Add Your Education
          </h1>
          <p className=" fw-3 text-dark fs-3 ">
            <i className="fas fa-code-branch mx-2"></i> Add any school or
            bootcamp that you have attended
          </p>
          <p className="small disable">* = required field</p>
          <div className="my-3 school">
            <input
              required
              type="text"
              name="school"
              id="school"
              placeholder="* School or Bootcamp"
              className="form-control"
              value={values.school}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-3 degree">
            <input
              required
              type="text"
              name="degree"
              id="degree"
              placeholder="* Degree or Certificate"
              className="form-control"
              value={values.degree}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-3 fieldstudy">
            <input
              type="text"
              name="fieldofstudy"
              id="fieldstudy"
              placeholder="Field of Study "
              className="form-control"
              value={values.fieldofstudy}
              onChange={handleInputChange}
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
                placeholder="Programm Description"
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
};

export default AddEducation;
