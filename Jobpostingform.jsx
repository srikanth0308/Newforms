

import React, { useState } from 'react';
import './Jobpostingform.css'; // Assuming you have the CSS in a separate file

function Jobpostingform() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    name: '',
    phone: '',
    email: '',
    file: null,
    deadline: '',
    additional_details: ''
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    // Modify the name to match the expected parameter name on the server-side
    // const paramName = name === 'additional_details' ? 'additionalDetails' : name;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };


  const Validation = (e) => {
    e.preventDefault();
    let isValid = true;

    if (formData.name.trim() === "") {
      document.getElementById("name_error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("name_error").style.display = "none";
    }

    if (formData.email.trim() === "") {
      document.getElementById("email_error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("email_error").style.display = "none";
    }

    if (formData.phone.trim() === "") {
      document.getElementById("phone_error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("phone_error").style.display = "none";
    }

    if (formData.file === null) {
      document.getElementById("file_error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("file_error").style.display = "none";
    }

    if (formData.additional_details.trim() === "") {
      document.getElementById("additional_details_error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("additional_details_error").style.display = "none";
    }

    if (formData.deadline.trim() === "") {
      document.getElementById("deadline_error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("deadline_error").style.display = "none";
    }

    if (formData.jobTitle.trim() === "") {
      document.getElementById("job_title_error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("job_title_error").style.display = "none";
    }

    if (formData.location.trim() === "") {
      document.getElementById("location_error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("location_error").style.display = "none";
    }

    if (formData.company.trim() === "") {
      document.getElementById("company_error").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("company_error").style.display = "none";
    }

    if (isValid) {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      fetch('http://localhost:8023/Jobposting_page/jobinsert', {
        method: 'post',
        // headers: {'Content-Type': 'application/json'},
        body: data

      })
        .then(response => {
          if (response.ok) {
            // If the response is successful, show an alert
            alert("Request successful!");
            console.log(formData)
          } else {
            // If there's an error in the response, show an alert with the error message
            alert("Error: " + response.statusText);
          }
        })
        .catch(() => {
          // If there's a network error or other issues, catch and display the error
          alert("sucess not");
        });




    }


    return isValid;

  };

  return (
    <div>
      <form action="" method="post" onSubmit={Validation} encType="multipart/form-data" >
        <h1>Job Posting Form:</h1>

        {/* Job Details Section */}
        <section>
          <label htmlFor="jobTitle">Job Title:</label>
          <select id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange}>
            <option value="" disabled>Select a job title</option>
            <option value="software_engineer">Software Engineer</option>
            <option value="data_scientist">Data Scientist</option>
            <option value="product_manager">Product Manager</option>
            <option value="ux_designer">UX Designer</option>
            <option value="business_analyst">Business Analyst</option>
            <option value="project_manager">Project Manager</option>
            <option value="qa_engineer">QA Engineer</option>
            <option value="devops_engineer">DevOps Engineer</option>
            <option value="systems_administrator">Systems Administrator</option>
            <option value="database_administrator">Database Administrator</option>
          </select>
          <span id="job_title_error" className="error">Please select a job title</span>
        </section>

        <section>
          <label htmlFor="company">Company:</label>
          <select id='company' name="company" value={formData.company} onChange={handleInputChange}>
            <option value="" disabled>Select a company</option>
            <option value="google">Google</option>
            <option value="apple">Apple</option>
            <option value="microsoft">Microsoft</option>
            <option value="amazon">Amazon</option>
            <option value="facebook">Facebook</option>
            <option value="tesla">Tesla</option>
            <option value="netflix">Netflix</option>
            <option value="spacex">SpaceX</option>
            <option value="ibm">IBM</option>
            <option value="intel">Intel</option>
          </select>
          <span id="company_error" className="error">Please select a company</span>
        </section>

        <section>
          <label htmlFor="location">Location:</label>
          <select id="location" name="location" value={formData.location} onChange={handleInputChange}>
            <option value="" disabled>Select a location</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
            <option value="pune">Pune</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="jaipur">Jaipur</option>
            <option value="lucknow">Lucknow</option>
          </select>
          <span id="location_error" className="error">Please select a location</span>
        </section>

        {/* Applicant Details Section */}
        <section>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} />
          <span id="name_error" className="error">Please enter your name</span>
        </section>

        <section>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} />
          <span id="email_error" className="error">Please enter a valid email address</span>
        </section>

        <section>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} />
          <span id="phone_error" className="error">Please enter your phone number</span>
        </section>

        <section>
          <label htmlFor="file">File:</label>
          <input type="file" name="file" id="file" onChange={handleInputChange} />
          <span id="file_error" className="error">Please upload your resume/CV</span>
        </section>

        {/* Application Deadline and Additional Details Section */}
        <section>
          <label htmlFor="deadline">Application Deadline:</label>
          <input type="date" name="deadline" id="deadline" value={formData.deadline} onChange={handleInputChange} />
          <span id="deadline_error" className="error">Please set the application deadline</span>
        </section>

        <section>
          <label htmlFor="additional_details">Additional Details:</label>
          <textarea name="additional_details" id="additional_details" rows="4" cols="50" value={formData.additional_details} onChange={handleInputChange}></textarea>
          <span id="additional_details_error" className="error">Any additional information you want to provide</span>
        </section>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Jobpostingform;

