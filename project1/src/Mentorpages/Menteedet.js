import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MenteeList() {
    const [mentee, setMentee] = useState([]);

    useEffect(() => {
        // Fetch mentor details from the Spring backend
        axios.get('http://localhost:8080/api/mentee')
            .then(response => setMentee(response.data))
            .catch(error => console.error('Error fetching mentor details:', error));
    }, []);

    return (
        <div>
            <div className='mentorlist'>
                <h2>Mentor Details</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mentee-Name</th>
                        <th>Mentor-regd-no</th>
                        <th>Mentee-No</th>
                        <th>Mentee-Email</th>
                        <th>Parent-Name</th>
                        <th>Parent-No</th>
                    </tr>
                </thead>
                <tbody>
                    {mentee.map(mentee => (
                        <tr key={mentee.id}>
                            <td>{mentee.id}</td>
                            <td>{mentee.studentName}</td>
                            <td>{mentee.studentRegdNo}</td>
                            <td>{mentee.studentPhone}</td>
                            <td>{mentee.studentEmail}</td>
                            <td>{mentee.parentName}</td>
                            <td>{mentee.parentNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default MenteeList;
