import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Feedbacklist() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        // Fetch mentor details from the Spring backend
        axios.get('http://localhost:8080/api/feedback')
            .then(response => setFeedbacks(response.data))
            .catch(error => console.error('Error fetching mentor details:', error));
    }, []);

    return (

        <div>
            <div className='mentorlist'>
                <h2>Feedback Details</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Classes Held</th>
                        <th>Classes Attended</th>
                        <th>Attendance Query</th>
                        <th>Feedback</th>
                        <th>Registration No</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map(feedback => (
                        <tr key={feedback.id}>
                            <td>{feedback.id}</td>
                            <td>{feedback.subject}</td>
                            <td>{feedback.classesHeld}</td>
                            <td>{feedback.classesAttented}</td>
                            <td>{feedback.attendanceQuery}</td>
                            <td>{feedback.feedback}</td>
                            <td>{feedback.registrationNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Feedbacklist;
