import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (formData.name.trim() === "" )  {
      document.getElementById("nameError").style.display = "block";
      valid = false;
    } else {
      document.getElementById("nameError").style.display = "none";
    }

    if (formData.email.trim() === "") {
      document.getElementById("emailError").style.display = "block";
      valid = false;
    } else {
      document.getElementById("emailError").style.display = "none";
    }

    if (formData.message.trim() === "") {
      document.getElementById("messageError").style.display = "block";
      valid = false;
    } else {
      document.getElementById("messageError").style.display = "none";
    }

    if (valid) {
      console.log(formData);
      fetch('http://localhost:8023/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        alert('Success: ' + data.message);
      })
      .catch(error => {
        alert('Error: ' + error.message);
      });
    
    
     
    
    
     
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Contact Form:</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span id="nameError" className="error">Please enter your name</span>
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span id="emailError" className="error">Please enter your email</span>
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          cols="30"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <span id="messageError" className="error">Please enter your message</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
    