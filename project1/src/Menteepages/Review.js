import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import Footer from '../pages/Footer';
function Review() {

    const [subject, setSubject] = useState("");
    const [classesHeld, setClassesHeld] = useState("");
    const [classesAttented, setClassesAttented] = useState("");
    const [attendanceQuery, setAttendanceQuery] = useState("");
    const [feedback, setFeedback] = useState("");
    const [registrationNo, setRegistrationNo] = useState("");
    const [errors, setErrors] = useState({});



    const clearForm = () => {
        setSubject("");
        setClassesHeld("");
        setClassesAttented("");
        setAttendanceQuery("");
        setFeedback("");
        setRegistrationNo("");
        setErrors({});
    };

    const handleApi = () => {
        const requestData = {
            subject,
            classesHeld,
            classesAttented,
            attendanceQuery,
            feedback,
            registrationNo

        };

        console.log("Sending request with data:", requestData);

        axios.post('http://localhost:8080/api/feedback', requestData)
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
        if (!subject.trim()) {
            validationErrors.subject = 'Subject is required';
        }
        if (!classesHeld.trim()) {
            validationErrors.classesHeld = 'Classes Held is required';
        }
        if (!classesAttented.trim()) {
            validationErrors.classesAttented = 'Classes Attended is required';
        }
        if (!attendanceQuery.trim()) {
            validationErrors.attendanceQuery = 'Attendance Query is required';
        }
        if (!feedback.trim()) {
            validationErrors.feedback = 'Feedback is required';
        }
        if (!registrationNo.trim()) {
            validationErrors.registrationNo = 'Registration No is required';
        }


        if (Object.keys(validationErrors).length === 0) {
            // Handle successful sign-up logic here
            console.log("Feedback submitted successful");
            toast.success("Feedback submitted successfully")
            // Clear the form after successful submission
            clearForm();
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <h3>Mentee-Review</h3>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <div className="error">{errors.subject}</div>
                </div>

                <div>
                    <label htmlFor="classesHeld">Classes Held:</label>
                    <input
                        type="text"
                        id="classesHeld"
                        name="classesHeld"
                        value={classesHeld}
                        onChange={(e) => setClassesHeld(e.target.value)}
                    />
                    <div className="error">{errors.classesHeld}</div>
                </div>

                <div>
                    <label htmlFor="classesAttended">Classes Attended:</label>
                    <input
                        type="text"
                        id="classesAttended"
                        name="classesAttended"
                        value={classesAttented}
                        onChange={(e) => setClassesAttented(e.target.value)}
                    />
                    <div className="error">{errors.classesAttended}</div>
                </div>

                <div>
                    <label htmlFor="attendanceQuery">Attendance Query:</label>
                    <input
                        type="text"
                        id="attendanceQuery"
                        name="attendanceQuery"
                        value={attendanceQuery}
                        onChange={(e) => setAttendanceQuery(e.target.value)}
                    />
                    <div className="error">{errors.attendanceQuery}</div>
                </div>

                <div>
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                    <div className="error">{errors.feedback}</div>
                </div>

                <div>
                    <label htmlFor="registrationNo">Registration No:</label>
                    <input
                        type="text"
                        id="registrationNo"
                        name="registrationNo"
                        value={registrationNo}
                        onChange={(e) => setRegistrationNo(e.target.value)}
                    />
                    <div className="error">{errors.registrationNo}</div>
                </div>

                <button type="submit" onClick={handleApi} className='btn'>Submit</button>
            </form>
            

            <Footer/>
        </div>
    );
};

export default Review;
