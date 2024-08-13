import React, { useState } from "react";
import './Interndetails.css';

function Interndetails() {
    const [jobs, setJobs] = useState([]);
    const [formData, setFormData] = useState({
        jobTitle: "",
        companyName: "",
        jobDescription: "",
        jobRequirements: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newJob = {
            jobTitle: formData.jobTitle,
            companyName: formData.companyName,
            jobDescription: formData.jobDescription,
            jobRequirements: formData.jobRequirements.join(", ")
        };
        setJobs([...jobs, newJob]);
        setFormData({
            jobTitle: "",
            companyName: "",
            jobDescription: "",
            jobRequirements: []
        });
    };

    const handleApply = (jobTitle) => {
        alert(`You have applied for the job: ${jobTitle}`);
    };

    return (
        <div className="container-I">
            <h1>Job Portal</h1>
            <div className="recruiter-section">
                <h2>Recruiter - Post a Job</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="jobTitle">Job Title:</label>
                    <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                    <br />
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
                    <br />
                    <label htmlFor="jobDescription">Job Description:</label>
                    <textarea id="jobDescription" name="jobDescription" value={formData.jobDescription} onChange={handleChange} required />
                    <br />
                    <label htmlFor="jobRequirements">Job Requirements:</label>
                    <select id="jobRequirements" name="jobRequirements" value={formData.jobRequirements} onChange={(e) => setFormData({ ...formData, jobRequirements: Array.from(e.target.selectedOptions, option => option.value) })} required multiple>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="C++">C++</option>
                        <option value="React">React</option>
                        <option value="Node.js">Node.js</option>
                        <option value="SQL">SQL</option>
                        <option value="NoSQL">NoSQL</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Data Analysis">Data Analysis</option>
                    </select>
                    <br />
                    <button type="submit">Post Job</button>
                </form>
            </div>
            <div className="student-section">
                <h2>Available Jobs</h2>
                <div id="jobList">
                    {jobs.map((job, index) => (
                        <div className="job" key={index}>
                            <h3>{job.jobTitle}</h3>
                            <p><strong>Company:</strong> {job.companyName}</p>
                            <p><strong>Description:</strong> {job.jobDescription}</p>
                            <p><strong>Requirements:</strong> {job.jobRequirements}</p>
                            <button onClick={() => handleApply(job.jobTitle)}>Apply</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Interndetails;
