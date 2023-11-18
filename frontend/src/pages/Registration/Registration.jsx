import "./style.scss"
import React from 'react'
function Registration() {

  return (
    <div className='page'>
      <div className="container">
        <h1>Registration</h1>
        <form action="http://localhost:4000/registration" method='POST'>
          <input type="text" name='username' placeholder='User-Name' />
          <input type="text" name='fullname' placeholder='Full-Name' />
          <input type="password" name="password" placeholder='Password' />
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Registration
