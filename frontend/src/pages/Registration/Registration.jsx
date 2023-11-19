import Response from "../../Components/Response/Response";
import "./style.scss"
import React, { useEffect, useState } from 'react'
function Registration() {

  const [response, setResponse] = useState({});

  const getFormData = () => {
      const form = document.querySelector("form");
      const formData = new FormData(form);
      const formObject = {};

      for (const [key, value] of formData.entries()) {
        formObject[key] = value;
      }
      return formObject;
    }

  const transporter = async (url, formData) => {

      const transport = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }

      const response = await fetch(url, transport);
      const data = await response.json();

      return { response, data };
    }

  const handelSubmit = async (event) => {
      event.preventDefault();

      const url = `http://localhost:4000/registration`;
      const fromData = getFormData();

      const { response, data } = await transporter(url, fromData);
      console.log(response.ok)
      setResponse({ response: response, message: data.message });
    }



  return(
    <div className = 'page' >
      <Response response={response} />
      <div className="container">
        <div className="registrationSection">
          <h1>Registration</h1>
          <form>
            <input type="text" name='username' placeholder='User-Name' />
            <input type="text" name='fullname' placeholder='Full-Name' />
            <input type="password" name="password" placeholder='Password' />
            <input className="btn" onClick={event => handelSubmit(event)} type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div >
  )
}

export default Registration
