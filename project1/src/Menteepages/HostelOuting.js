import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import Footer from '../pages/Footer';

function HostelOuting() {
    const [studName, setStudName] = useState("");
    const [registrationNo, setRegistrationNo] = useState("");
    const [parentName, setParentName] = useState("");
    const [parentNo, setParentNo] = useState("");
    const [outingPurpose, setOutingPurpose] = useState("");
    const [mentorName, setMentorName] = useState("");
    const [branch, setBranch] = useState("");
    const [hostelNo, setHostelNo] = useState("");
    const [errors, setErrors] = useState({});



    const clearForm = () => {
        setStudName("");
        setRegistrationNo("");
        setParentName("");
        setParentNo("");
        setOutingPurpose("");
        setMentorName("");
        setBranch("");
        setHostelNo("");
        setErrors({});
    };

    const handleApi = () => {
        const requestData = {
            studName,
            registrationNo,
            parentName,
            parentNo,
            outingPurpose,
            mentorName,
            branch,
            hostelNo,

        };

        console.log("Sending request with data:", requestData);

        axios.post('http://localhost:8080/api/hostelouting', requestData)
            .then(response => {
                // Handle the response here if needed
                console.log("Response from server:", response.data);
            })
            .catch(error => {
                // Handle errors here
                console.error("Error while making the API request:", error);

                // You might want to do further error handling, such as displaying an error message to the user
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation
        const validationErrors = {};
        if (!studName.trim()) {
            validationErrors.studName = 'Student Name is required';
        }
        if (!registrationNo.trim()) {
            validationErrors.registrationNo = 'Registration Number is required';
        }
        if (!parentName.trim()) {
            validationErrors.parentName = 'Parent Name is required';
        }
        if (!parentNo.trim()) {
            validationErrors.parentNo = 'Parent Number is required';
        }
        if (!outingPurpose.trim()) {
            validationErrors.outingPurpose = 'Outing Purpose is required';
        }
        if (!mentorName.trim()) {
            validationErrors.mentorName = 'Mentor Name is required';
        }
        if (!branch.trim()) {
            validationErrors.branch = 'Branch is required';
        }
        if (!hostelNo.trim()) {
            validationErrors.hostelNo = 'Hostel Number is required';
        }

        if (Object.keys(validationErrors).length === 0) {
            // Handle successful sign-up logic here
            console.log("Outing request submitted successful");
            toast.success("Outing request submitted successfully")
            // Clear the form after successful submission
            clearForm();
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>


            <form onSubmit={handleSubmit} className='form'>
                <h3>Hostel-Outing-Form</h3>
                <div>
                    <label htmlFor="studName">Student Name:</label>
                    <input
                        type="text"
                        id="studName"
                        name="studName"
                        value={studName}
                        onChange={(e) => setStudName(e.target.value)}
                    />
                    <div className="error">{errors.studName}</div>
                </div>

                <div>
                    <label htmlFor="registrationNo">Registration Number:</label>
                    <input
                        type="text"
                        id="registrationNo"
                        name="registrationNo"
                        value={registrationNo}
                        onChange={(e) => setRegistrationNo(e.target.value)}
                    />
                    <div className="error">{errors.registrationNo}</div>
                </div>

                <div>
                    <label htmlFor="parentName">Parent Name:</label>
                    <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                    />
                    <div className="error">{errors.parentName}</div>
                </div>

                <div>
                    <label htmlFor="parentNo">Parent Number:</label>
                    <input
                        type="text"
                        id="parentNo"
                        name="parentNo"
                        value={parentNo}
                        onChange={(e) => setParentNo(e.target.value)}
                    />
                    <div className="error">{errors.parentNo}</div>
                </div>

                <div>
                    <label htmlFor="outingPurpose">Outing Purpose:</label>
                    <input
                        type="text"
                        id="outingPurpose"
                        name="outingPurpose"
                        value={outingPurpose}
                        onChange={(e) => setOutingPurpose(e.target.value)}
                    />
                    <div className="error">{errors.outingPurpose}</div>
                </div>

                <div>
                    <label htmlFor="mentorName">Mentor Name:</label>
                    <input
                        type="text"
                        id="mentorName"
                        name="mentorName"
                        value={mentorName}
                        onChange={(e) => setMentorName(e.target.value)}
                    />
                    <div className="error">{errors.mentorName}</div>
                </div>

                <div>
                    <label htmlFor="branch">Branch:</label>
                    <input
                        type="text"
                        id="branch"
                        name="branch"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                    />
                    <div className="error">{errors.branch}</div>
                </div>

                <div>
                    <label htmlFor="hostelNo">Hostel Number:</label>
                    <input
                        type="text"
                        id="hostelNo"
                        name="hostelNo"
                        value={hostelNo}
                        onChange={(e) => setHostelNo(e.target.value)}
                    />
                    <div className="error">{errors.hostelNo}</div>
                </div>

                <button type="submit" className='btn' onClick={handleApi}>Submit</button>
            </form>

            <Footer />

        </div>
    );
};

export default HostelOuting;
