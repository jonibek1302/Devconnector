//import { axios } from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


 
const HeaderIn = () => {
const navigate = useNavigate();
function handleLogout() {
  toast("Logged out", { type: "info" });
   localStorage.removeItem("token");
 // delete axios.defaults.headers.common["x-auth-token"];

  navigate("/login");
}

  return (
    <header className="bg-for-nav py-2 shadow sticky-top">
      <nav className="containerr d-flex align-items-center justify-content-between">
        <Link className="text-light text-decoration-none fs-4" to="/dashboard">
          <i className="fa-solid fa-code"></i> DevConnector
        </Link>

        <ul className="list-unstyled d-flex align-items-center gap-3 m-0">
          <li>
            <Link className="text-light btn border-none fs-5" to="/Developers">
              Developers
            </Link>
          </li>
          <li>
            <Link className="text-light btn border-none fs-5" to="/posts">
              Posts
            </Link>
          </li>
          <li>
            <Link className="text-light btn border-none fs-5" to="/dashboard">
              <i className="fa-solid fa-user mx-2"></i> Dashboard
            </Link>
            <button
               onClick={handleLogout}
              className="text-light btn border-none fs-5"
              
            >
              <i className="mx-2 fa-solid fa-right-from-bracket"></i> LogeOut
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderIn
