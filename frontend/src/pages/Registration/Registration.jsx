import React from 'react'


function Registration() {
 
  return (
    <div>
      <h1>Registration</h1>
      <form action="http://localhost:4000/registration" method='POST'>
        <input type="text" name='username' placeholder='username' />
        <input type="text" name='fullname' placeholder='fullname' />
        <input type="password" name="password" placeholder='password' />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Registration
