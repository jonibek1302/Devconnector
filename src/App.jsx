//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
 import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import CreateProfile from './Pages/Create-profile';
import Posts from './Pages/Posts';
import Developers from './Pages/Developers';
import Viewprofile from './Pages/Viewprofile';
import AddEducation from './Pages/AddEducation';
import AddExperience from './Pages/AddExperience';
import Otherpages from './Pages/Otherpages';
import Comments from './Pages/Comments';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/viewprofile/:id" element={<Viewprofile />} />
        <Route path="/Edit-profile" element={<CreateProfile />} />
        <Route path="/Create-profile" element={<CreateProfile />} />
        <Route path="/addeducation" element={<AddEducation />} />
        <Route path="/addexperience" element={<AddExperience />} />
        <Route path="/comments/:post_id" element={<Comments />} />
        <Route path="/*" element={<Otherpages/>} />
      </Routes>
    </div>
  );
}

export default App
