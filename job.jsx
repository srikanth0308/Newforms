import React, { useState } from 'react';
import './job.css';

function Job() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    resume: null,
    selectCountry: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const validation = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validation checks
    if (formData.name.trim() === '') {
      document.getElementById('nameErrors').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('nameErrors').style.display = 'none';
    }

    if (formData.gender.trim() === '') {
      document.getElementById('genderErrors').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('genderErrors').style.display = 'none';
    }

    if (formData.resume === null) {
      document.getElementById('resumeErrors').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('resumeErrors').style.display = 'none';
    }

    if (formData.selectCountry.trim() === '') {
      document.getElementById('countryErrors').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('countryErrors').style.display = 'none';
    }

    if (!formData.rememberMe) {
      document.getElementById('rememberMeErrors').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('rememberMeErrors').style.display = 'none';
    }

    if (isValid) {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      fetch('http://localhost:8023/jobpage/jobinsert', {
        method: 'post',
        body: data,
      })
        .then((response) => {
          if (response.ok) {
            alert('Success');
          }
        })
        .catch(() => {
          alert('Unsuccessful');
        });
    }
  };

  return (
    <div>
      <form action="" method="post" onSubmit={validation}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span id="nameErrors" className="error">Please enter a valid name</span>

        <label>Gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <span id="genderErrors" className="error">Please select your gender</span>

        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          name="resume"
          id="resume"
          onChange={handleChange}
        />
        <span id="resumeErrors" className="error">Please select your resume</span>

        <section>
          <label htmlFor="selectCountry">Country</label>
          <select
            name="selectCountry"
            id="selectCountry"
            value={formData.selectCountry}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>
          <span id="countryErrors" className="error">Please select your country</span>
        </section>
        
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        <label htmlFor="rememberMe">Remember Me</label>
        <span id="rememberMeErrors" className="error">Please accept terms and conditions</span>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Job;
