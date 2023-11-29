import "./App.css"
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home/Home';
import NavBar from './Components/NavBar/NavBar'
import Dashboard from './pages/Dashboard/Dashboard';
import Registration from './pages/Registration/Registration';
import IsUserLogin from './Authorization/IsUserLogin'
import Login from './pages/Login/Login';
import axios from "axios";

function App() {
  const [user, setUser] = useState(false);

  //* create Login Funtion
  const login = () => {
    setUser(true);
  }


  axios.defaults.withCredentials = true;
  //* create logout Funtion
  const logout = async () => {
    const url = `http://localhost:4000/logout`
    const response = await axios.post(url);
    console.log(response);
  }


  return (
    <div className='app_page'>
      <Router>
        <NavBar user={user} login={login} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={
            <IsUserLogin user={user} element={<Dashboard />} />
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App