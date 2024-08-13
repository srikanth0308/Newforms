import React, { useState } from 'react';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    photo: null,
    resume: null,
    state: '',
    district: '',
    remember: false
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    let value;

    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    } else if (e.target.type === 'file') {
      value = e.target.files[0];
    } else {
      value = e.target.value;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const Validation = (e) => {
    e.preventDefault();

    let isValid = true;

    // Hide all error messages initially
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach((errorMessage) => {
      errorMessage.style.display = 'none';
    });

    // Validation logic
    if (formData.firstname.trim() === "") {
      document.getElementById("firstname-error").style.display = "block";
      isValid = false;
    }

    if (formData.lastname.trim() === "") {
      document.getElementById("lastname-error").style.display = "block";
      isValid = false;
    }

    if (!formData.gender) {
      document.getElementById("gender-error").style.display = "block";
      isValid = false;
    }

    if (formData.dob.trim() === "") {
      document.getElementById("dob-error").style.display = "block";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === "" || !emailRegex.test(formData.email)) {
      document.getElementById("email-error").style.display = "block";
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (formData.phone.trim() === "" || !phoneRegex.test(formData.phone)) {
      document.getElementById("phone-error").style.display = "block";
      isValid = false;
    }

    if (!formData.photo) {
      document.getElementById("photo-error").style.display = "block";
      isValid = false;
    }

    if (!formData.resume) {
      document.getElementById("resume-error").style.display = "block";
      isValid = false;
    }

    if (formData.state.trim() === "") {
      document.getElementById("state-error").style.display = "block";
      isValid = false;
    }

    if (formData.district.trim() === "") {
      document.getElementById("district-error").style.display = "block";
      isValid = false;
    }

    if (!formData.remember) {
      document.getElementById("remember-error").style.display = "block";
      isValid = false;
    }

    // Submit form if valid
    if (isValid) {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      fetch('http://localhost:8112/Regi_job/insert', {
        method: 'POST',
        body: formDataToSend
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add Registration');
        }
        alert('Registration added successfully');
        setFormData({
          ...formData,
          firstname: '',
          lastname: '',
          gender: '',
          dob: '',
          email: '',
          phone: '',
          photo: null,
          resume: null,
          state: '',
          district: '',
          remember: false
        });
      })
      .catch(error => {
        console.error('Error adding Registration:', error);
        alert('Failed to add Registration. Please try again later');
      });
    }
  };

  return (
    <div>
      <form onSubmit={Validation} encType="multipart/form-data">
        <center><h1>Registration Form</h1></center>
        <ul>
          <li>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" name="firstname" id="firstname" placeholder="First Name" value={formData.firstname} onChange={handleInputChange} />
            <span className="error" id="firstname-error" >Please enter a valid first name</span>
          </li>
          <li>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleInputChange} />
            <span className="error" id="lastname-error" >Please enter a valid last name</span>
          </li>
          <li>
            <label>Gender:</label>
            <input type="radio" name="gender" id="male" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} />
            <label htmlFor="female">Female</label>
            <br />
            <span className="error" id="gender-error" >Please select a gender</span>
          </li>
          <li>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} />
            <span className="error" id="dob-error" >Please enter a valid date of birth</span>
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            <span className="error" id="email-error" >Please enter a valid email address</span>
          </li>
          <li>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" name="phone" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
            <span className="error" id="phone-error" >Please enter a valid phone number</span>
            </li>
          <li>
            <label htmlFor="photo">Photo:</label>
            <input type="file" name="photo" id="photo" onChange={handleInputChange} />
            <span className="error" id="photo-error" >Please upload a photo</span>
          </li>
          <li>
            <label htmlFor="resume">Resume:</label>
            <input type="file" name="resume" id="resume" onChange={handleInputChange} />
            <span className="error" id="resume-error" >Please upload a resume</span>
          </li>
          <li>
            <label htmlFor="state">State:</label>
            <select name="state" id="state" value={formData.state} onChange={handleInputChange}>
              <option value="">Select State</option>
              <option value="andhra_pradesh">Andhra Pradesh</option>
              <option value="karnataka">Karnataka</option>
              <option value="kerala">Kerala</option>
              <option value="tamil_nadu">Tamil Nadu</option>
              <option value="telangana">Telangana</option>
            </select>
            <span className="error" id="state-error" >Please select a state</span>
          </li>
          <li>
            <label htmlFor="district">District:</label>
            <select name="district" id="district" value={formData.district} onChange={handleInputChange}>
              <option value="">Select District</option>
              <option value="adilabad">Adilabad</option>
              <option value="bhadradri_kothagudem">Bhadradri Kothagudem</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="jagtial">Jagtial</option>
              <option value="jangaon">Jangaon</option>
              <option value="jayashankar_bhupalpally">Jayashankar Bhupalpally</option>
              <option value="jogulamba_gadwal">Jogulamba Gadwal</option>
              <option value="kamareddy">Kamareddy</option>
              <option value="karimnagar">Karimnagar</option>
              <option value="khammam">Khammam</option>
            </select>
            <span className="error" id="district-error" >Please select a district</span>
          </li>
          <li>
            <input type="checkbox" name="remember" id="remember" checked={formData.remember} onChange={handleInputChange} />
            <label htmlFor="remember">Remember me</label>
            <span className="error" id="remember-error" >Please agree to the terms</span>
          </li>
        </ul>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Registration;
