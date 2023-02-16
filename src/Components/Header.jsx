import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark py-2 shadow sticky-top">
      <nav className="containerr d-flex align-items-center justify-content-between">
        <Link className="text-light text-decoration-none fs-4" to="/">
          <i className="fa-solid fa-code"></i> DevConnector
        </Link>

        <ul className="list-unstyled d-flex align-items-center gap-3 m-0">
          <li>
            <Link className="text-light btn border-none fs-5" to="/Developers">
              Developers
            </Link>
          </li>
          <li>
            <Link className="text-light btn border-none fs-5" to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className="text-light btn border-none fs-5" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
