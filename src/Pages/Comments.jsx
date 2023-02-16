import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Comments = () => {

    
  const { post_id } = useParams();


  let [name, setName] = useState();
  const navigate = useNavigate();
  let test ={
    text:"test"
  }
  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) return navigate("/login");

    async function getMe() {
      try {
        let { data } = await axios.get(`/posts/${post_id}` );
       

        setName(data.comments);
      } catch (error) {
         toast("Error", { type: "error" });
      }
    }
    getMe();
  }, []);
   

//Comment///////////

  let [values, setValues] = useState({
    text: "",
  });

  function handleFormSubmit(e  ) {
    e.preventDefault();

    async function post() {
      let { data } = await axios.post(`/posts/comment/${post_id}`, {
        text: values.text,
      });
      values='';
     values.text = '';
     text='';
    
    }
   
    toast("Coment Sended", { type: "info" });
    post();
    
    e.target.value=""
    // resetForm({ values: " " });
  }
//Comment///////////


  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }
 
  return (
    <div className="container">
      <div className="d-flex border w-75 postlistcoment ">
        <Link className="w-25 user-img" to={`/viewprofile/`}>
          <img
            src="https://gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?d=mm&r=pg&s=200"
            alt="postuser"
          />
          <h4>John</h4>
        </Link>
        <div className="textpost">
          <h5 className="my-2 mb-3 ">test</h5>
          <p>Posted on </p>

          <button className="btn btn-secondary">
            <i className=" mx-1 fa-solid fa-thumbs-up"></i>
          </button>
          <button className="btn btn-secondary mx-1">
            <i className="mx-1 fa-solid fa-thumbs-down"></i>
          </button>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-comment">
          <Form.Group
            className="postlistcoment w-75 mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              name="text"
              value={values.text}
              onChange={handleInputChange}
              as="textarea"
              placeholder="Create a post"
              rows={3}
              className="mb-3"
            />
            <button
              className=" mb-4  text-light btn btn-info  fs-5"
              type="submit"
            >
              Submit
            </button>
          </Form.Group>
        </div>
      </form>
      {name?.map(({ name, text, date, avatar, user }) => (
        <div className="d-flex border w-75 postlistcoment ">
          <Link className="w-25 user-img" to={`/viewprofile/${user}`}>
            <img src={avatar} alt="postuser" />
            <h4>{name}</h4>
          </Link>
          <div className="textpost">
            <h5 className="my-2 mb-3 ">{text}</h5>
            <p>Posted on {date}</p>

            <button
              //   onClick={deletePost}
              className="btn btn-danger mx-1 fw-bold "
            >
              <i className=" fs-4   text-light fas fa-times"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments
