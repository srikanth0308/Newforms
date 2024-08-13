import React, { useState } from 'react';
// import './Jobpostingform.css'; // Assuming you have the CSS in a separate file
import './jobapplication.css';

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    photo: null,
    collage: '',
    school: '',
    secondary_school: '',
    job_title: '',
    company: '',
    location: '',
    additional_details: ''
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validation code here...
    if (formData.name.trim() === "") {
      document.getElementById("nameErrors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("nameErrors").style.display = "none";
    }

    if (formData.email.trim() === "") {
      document.getElementById("email_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("email_errors").style.display = "none";
    }

    if (formData.phone === "") {
      document.getElementById("phone_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("phone_errors").style.display = "none";
    }

    if (formData.resume === null) {
      document.getElementById("resume_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("resume_errors").style.display = "none";
    }

    if (formData.photo === null) {
      document.getElementById("photo_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("photo_errors").style.display = "none";
    }

    if (formData.collage.trim() === "") {
      document.getElementById("collage_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("collage_errors").style.display = "none";
    }

    if (formData.school.trim() === "") {
      document.getElementById("school_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("school_errors").style.display = "none";
    }

    if (formData.secondary_school.trim() === "") {
      document.getElementById("secondary_school_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("secondary_school_errors").style.display = "none";
    }

    if (formData.job_title.trim() === "") {
      document.getElementById("job_title_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("job_title_errors").style.display = "none";
    }

    if (formData.company.trim() === "") {
      document.getElementById("company_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("company_errors").style.display = "none";
    }

    if (formData.location.trim() === "") {
      document.getElementById("location_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("location_errors").style.display = "none";
    }

    if (formData.additional_details.trim() === "") {
      document.getElementById("additional_details_errors").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("additional_details_errors").style.display = "none";
    }

    if (isValid) {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      fetch('http://localhost:8023/jobappliction_page/applicationinsert', {
        method: 'POST',
        body: data
      })
      .then(response => {
        if (response.ok) {
          alert("Success");
        } else {
          alert("Submission failed");
        }
      })
      .catch(() => {
        alert("Submission failed");
      });
    }

    return isValid;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Job Application Form:</h1>

        {/* Applicant Details Section */}
        <section>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} />
          <span id="nameErrors" className="error">Please enter your name</span>
        </section>

        <section>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} />
          <span id="email_errors" className="error">Please enter a valid email address</span>
        </section>

        <section>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} />
          <span id="phone_errors" className="error">Please enter your phone number</span>
        </section>

        <section>
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleInputChange} />
          <span id="resume_errors" className="error">Please upload your resume</span>
        </section>

        <section>
          <label htmlFor="photo">Upload Photo:</label>
          <input type="file" id="photo" name="photo" accept="image/*" onChange={handleInputChange} />
          <span id="photo_errors" className="error">Please upload your photo</span>
        </section>

        {/* collage Selection Section */}
        <section>
          <label htmlFor="collage">Select a collage in Hyderabad:</label>
          <select id="collage" name="collage" value={formData.collage} onChange={handleInputChange}>
            <option value="" disabled>Select a collage</option>
            <option value="malla_reddy_engineering_collage">Malla Reddy Engineering collage</option>
            <option value="sreyas_institute">Sreyas Institute of Engineering & Technology</option>
            <option value="collage1">collage 1</option>
            <option value="collage2">collage 2</option>
            <option value="collage3">collage 3</option>
            <option value="collage4">collage 4</option>
            <option value="collage5">collage 5</option>
            <option value="collage6">collage 6</option>
            <option value="collage7">collage 7</option>
          </select>
          <span id="collage_errors" className="error">Please select a collage</span>
        </section>

        <section>
          <label htmlFor="school">Select a school in Hyderabad:</label>
          <select id="school" name="school" value={formData.school} onChange={handleInputChange}>
            <option value="" disabled>Select a school</option>
            <option value="school1">School 1</option>
            <option value="school2">School 2</option>
            <option value="school3">School 3</option>
            <option value="school4">School 4</option>
            <option value="school5">School 5</option>
            <option value="school6">School 6</option>
            <option value="school7">School 7</option>
          </select>
          <span id="school_errors" className="error">Please select a school</span>
        </section>

        <section>
          <label htmlFor="secondary_school">Select a secondary school in Hyderabad:</label>
          <select id="secondary_school" name="secondary_school" value={formData.secondary_school} onChange={handleInputChange}>
            <option value="" disabled>Select a secondary school</option>
            <option value="secondary_school1">Secondary School 1</option>
            <option value="secondary_school2">Secondary School 2</option>
            <option value="secondary_school3">Secondary School 3</option>
            <option value="secondary_school4">Secondary School 4</option>
            <option value="secondary_school5">Secondary School 5</option>
            <option value="secondary_school6">Secondary School 6</option>
            <option value="secondary_school7">Secondary School 7</option>
          </select>
          <span id="secondary_school_errors" className="error">Please select a secondary school</span>
        </section>

        {/* Job Details Section */}
        <section>
          <label htmlFor="job_title">Job Title:</label>
          <select id="job_title" name="job_title" value={formData.job_title} onChange={handleInputChange}>
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
          <span id="job_title_errors" className="error">Please select a job title</span>
        </section>

        <section>
          <label htmlFor="company">Company:</label>
          <select id="company" name="company" value={formData.company} onChange={handleInputChange}>
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
          <span id="company_errors" className="error">Please select a company</span>
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
          <span id="location_errors" className="error">Please select a location</span>
        </section>

        <section>
          <label htmlFor="additional_details">Additional Details:</label>
          <textarea id="additional_details" name="additional_details" rows="4" cols="50" value={formData.additional_details} onChange={handleInputChange}></textarea>
          <span id="additional_details_errors" className="error">Any additional information you want to provide</span>
        </section>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JobApplicationForm;

