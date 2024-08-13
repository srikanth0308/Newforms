import React, { useState } from 'react';
import './Jobpostingform.css';

function JobSeekerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    resume: null,
    desired_job_title: '',
  industry:'',
    location: '',
    salary_expectation: '',
    skills: '',
    work_experience: '',
    education: '',
    additional_info: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handlefileChange = (event) => {
    setFormData({
      ...formData,
      resume: event.target.files[0]
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true; // Set isValid to false at the beginning of the function

    if (formData.name.trim() === "") {
        document.getElementById("Name_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Name_error").style.display = "none";
    }

    if (formData.phone.trim() === "") {
        document.getElementById("Phone_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Phone_error").style.display = "none";
    }

    if (formData.address.trim() === "") {
        document.getElementById("Address_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Address_error").style.display = "none";
    }

    if (formData.location.trim() === "") {
        document.getElementById("Location_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Location_error").style.display = "none";
    }

    if (formData.resume === null) {
        document.getElementById("Resume_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Resume_error").style.display = "none";
    }

    if (formData.salary_expectation.trim() === "") {
        document.getElementById("Salary_expectation_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Salary_expectation_error").style.display = "none";
    }

    if (formData.skills.trim() === "") {
        document.getElementById("Skills_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Skills_error").style.display = "none";
    }

    if (formData.education.trim() === "") {
        document.getElementById("Education_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Education_error").style.display = "none";
    }

    if (formData.additional_info.trim() === "") {
        document.getElementById("Additional_info_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Additional_info_error").style.display = "none";
    }

    if (formData.work_experience.trim() === "") {
        document.getElementById("Work_experience_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Work_experience_error").style.display = "none";
    }

    if (formData.email.trim() === "") {
        document.getElementById("Email_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Email_error").style.display = "none";
    }

    if (formData.desired_job_title.trim() === "") {
        document.getElementById("Desired_job_title_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Desired_job_title_error").style.display = "none";
    }

    if (formData.industry.trim() === "") {
        document.getElementById("Industry_error").style.display = "block";
        isValid = false; // Update isValid to false if validation fails
    } else {
        document.getElementById("Industry_error").style.display = "none";
    }

    // Fetching data only if isValid is true
    if (isValid) {

const data = new FormData();
for(const key in formData){
  data.append(key,formData[key]);
}
      
        fetch('http://localhost:8023/jobseeker_page/seekerinsert', {
            method: 'post',
           
            body: data
        })
            .then(response => {
                if (response.ok) {
                    alert("Success");
                    console.log(formData);
                }
            })
            .catch(() => {
                alert("Unsuccessful");
            });
    } 
return isValid;

    }
  

  return (
    <div>
    <form action="#" method="POST"  onSubmit={handleSubmit}>
      <h1>JobSeeker Form:</h1>
      
      {/* Personal Information */}
      <section>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
        <span id="Name_error">Please enter your name</span><br />
      </section>
      
      <section>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
        <span id="Email_error">Please enter a valid email address</span><br />
      </section>
      
      <section>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
        <span id="Phone_error">Please enter a valid phone number</span><br />
      </section>
      
      <section>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} />
        <span id="Address_error">Please enter your address</span><br />
      </section>
      
      {/* Resume Upload */}
      <section>
        <label htmlFor="resume">Resume Upload:</label>
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handlefileChange} />
        <span id="Resume_error">Please upload your resume</span><br />
      </section>
      
      {/* Desired Job Information */}
      <section>
        <label htmlFor="desired_job_title">Desired Job Title:</label>
        <select id="desired_job_title" name="desired_job_title" value={formData.desired_job_title} onChange={handleChange}>
          <option value="" disabled>Select desired job title</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Product Manager">Product Manager</option>
          <option value="UX Designer">UX Designer</option>
        </select>
        <span id="Desired_job_title_error">Please select a job title</span><br />
      </section>
      
      <section>
        <label htmlFor="industry">Industry:</label>
        <select id="industry" name="industry" value={formData.industry} onChange={handleChange}>
          <option value="" disabled>Select industry</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
        </select>
        <span id="Industry_error">Please select an industry</span><br />
      </section>
      
      <section>
        <label htmlFor="location">Location:</label>
        <select id="location" name="location" value={formData.location} onChange={handleChange}>
          <option value="" disabled>Select location</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
        <span id="Location_error">Please select a location</span><br />
      </section>
      
      <section>
        <label htmlFor="salary_expectation">Salary Expectation:</label>
        <input type="text" id="salary_expectation" name="salary_expectation" placeholder="Enter your salary expectation" value={formData.salary_expectation} onChange={handleChange} />
        <span id="Salary_expectation_error">Please enter your salary expectation</span><br />
      </section>
      
      {/* Skills and Experience */}
      <section>
        <label htmlFor="skills">Relevant Skills:</label>
        <textarea id="skills" name="skills" placeholder="Enter relevant skills" value={formData.skills} onChange={handleChange}></textarea>
        <span id="Skills_error">Please enter your skills</span><br />
      </section>
      
      <section>
        <label htmlFor="work_experience">Work Experience:</label>
        <textarea id="work_experience" name="work_experience" placeholder="Enter work experience" value={formData.work_experience} onChange={handleChange}></textarea>
        <span id="Work_experience_error">Please enter your work experience</span><br />
      </section>
      
      <section>
        <label htmlFor="education">Education:</label>
        <textarea id="education" name="education" placeholder="Enter education details" value={formData.education} onChange={handleChange}></textarea>
        <span id="Education_error">Please enter your education details</span><br />
      </section>
      
      {/* Additional Information */}
      <section>
        <label htmlFor="additional_info">Additional Information:</label>
        <textarea id="additional_info" name="additional_info" placeholder="Enter any additional details" value={formData.additional_info} onChange={handleChange}></textarea>
        <span id="Additional_info_error">Please enter any additional information</span><br />
      </section>
      
      <button type="submit">Submit</button>
    </form>
  </div>
  
  );
}

export default JobSeekerForm;
