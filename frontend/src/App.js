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

function App() {
  const [user, setUser] = useState(false);

  //* create Login Funtion
  const login = () => {
    setUser(true);
  }

  //* create logout Funtion
  const logout = () => {
    setUser(false);
  }


  return (
    <>
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
    </>
  )
}

export default App

//* Create Protected Route Function 
