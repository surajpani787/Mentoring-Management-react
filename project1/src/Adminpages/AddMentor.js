import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import Footer from "../pages/Footer";

function AddMentor() {
    const [mentorName, setMentorName] = useState("");
    const [mentorId, setMentorId] = useState("");
    const [mentorPhone, setMentorPhone] = useState("");
    const [mentorEmail, setMentorEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const clearForm = () => {
        setMentorName("");
        setMentorId("");
        setMentorPhone("");
        setMentorEmail("");
        setPassword("");
        setErrors({});
    };

    const handleApi = () => {
        const requestData = {
            mentorName,
            mentorId,
            mentorPhone,
            mentorEmail,
            password,
        };

        console.log("Sending request with data:", requestData);

        axios.post('http://localhost:8080/api/mentor/addmentor', requestData)
            .then(response => {
                // Handle the response here if needed
                console.log("Response from server:", response.data);
                // Clear the form after successful submission
                toast.success("Mentor Added Successflly")
                clearForm();
            })
            .catch(error => {
                // Handle errors here
                console.error("Error while making the API request:", error);
                // You might want to do further error handling, such as displaying an error message to the user
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!mentorName) {
            validationErrors.mentorName = "Mentor Name is required";
        }

        if (!mentorId) {
            validationErrors.mentorId = "Mentor ID is required";
        }

        if (!mentorPhone) {
            validationErrors.mentorPhone = "Mentor Phone is required";
        }

        if (!mentorEmail) {
            validationErrors.mentorEmail = "Mentor Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(mentorEmail)) {
            validationErrors.mentorEmail = "Invalid email address";
        }

        if (password.length < 8) {
            validationErrors.password = "Password must be 8 characters or more";
        }

        if (Object.keys(validationErrors).length === 0) {
            // Handle successful sign-up logic here
            console.log("Sign-up successful");
            // Clear the form after successful submission
            clearForm();
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <div className="Addmentor-container">
                <h3>Add Mentor</h3>
                <form onSubmit={handleSubmit} className="mentor">
                    <div className="input-container">
                        <label htmlFor="mentorName">Mentor Name:</label>
                        <input type="text" name="mentorName" id="mentorName" value={mentorName} onChange={(e) => setMentorName(e.target.value)} />
                        {errors.mentorName && <p className="error-message">{errors.mentorName}</p>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="mentorId">Mentor ID:</label>
                        <input type="text" name="mentorId" id="mentorId" value={mentorId} onChange={(e) => setMentorId(e.target.value)} />
                        {errors.mentorId && <p className="error-message">{errors.mentorId}</p>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="mentorPhone">Mentor Phone:</label>
                        <input type="text" name="mentorPhone" id="mentorPhone" value={mentorPhone} onChange={(e) => setMentorPhone(e.target.value)} />
                        {errors.mentorPhone && <p className="error-message">{errors.mentorPhone}</p>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="mentorEmail">Mentor Email:</label>
                        <input type="text" name="mentorEmail" id="mentorEmail" value={mentorEmail} onChange={(e) => setMentorEmail(e.target.value)} />
                        {errors.mentorEmail && <p className="error-message">{errors.mentorEmail}</p>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <button type="submit" className="Addmentor" onClick={handleApi}>Add Mentor</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default AddMentor;
