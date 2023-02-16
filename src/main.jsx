import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//Routes
import {BrowserRouter as Router} from "react-router-dom"
//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css";
import './index.scss';
import { ToastContainer } from 'react-toastify'
//

import axios from "axios";

// axios

axios.defaults.baseURL = " https://nt-devconnector.onrender.com/api";
axios.defaults.headers.common["Content-Type"] = "application/json";
let token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["x-auth-token"] =`${token}`;
//redux
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      <ToastContainer theme="colored" />
      </Provider>
    </Router>
  </React.StrictMode>
);
