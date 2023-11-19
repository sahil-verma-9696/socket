import React, { useEffect, useState } from 'react';
import './style.scss'; // Importing a SCSS file for styling

const Response = ({ response }) => {
    const [status, setStatus] = useState("");

    const setClass = () => {
       // Update status when the response prop changes
       if (response && response.response) {
        setStatus("green"); // Set to "green" if response.response exists
    } else {
        setStatus("red"); // Set to "red" otherwise
    }
    }

    useEffect(setClass, [response]);
    return (
        <div className="response_component">
            <h1 className={status}>{response?.message}</h1>
        </div>
    );
};

export default Response;
