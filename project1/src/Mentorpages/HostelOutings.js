import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hostel() {
    const [hostelOutings, setHostelOutings] = useState([]);

    useEffect(() => {
        // Fetch mentor details from the Spring backend
        axios.get('http://localhost:8080/api/hostelouting')
            .then(response => setHostelOutings(response.data))
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
                        <th>studName</th>
                        <th>registrationNo</th>
                        <th>parentName</th>
                        <th>parentNo</th>
                        <th>outingPurpose</th>
                        <th>mentorName</th>
                        <th>branch</th>
                        <th>hostelNo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {hostelOutings.map(hostelOuting => (
                        <tr key={hostelOuting.id}>
                            <td>{hostelOuting.id}</td>
                            <td>{hostelOuting.studName}</td>
                            <td>{hostelOuting.registrationNo}</td>
                            <td>{hostelOuting.parentName}</td>
                            <td>{hostelOuting.parentNo}</td>
                            <td>{hostelOuting.outingPurpose}</td>
                            <td>{hostelOuting.mentorName}</td>
                            <td>{hostelOuting.branch}</td>
                            <td>{hostelOuting.hostelNo}</td>
                            <td>
                                <button className='action'>Accept</button>
                                <button className='action'>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Hostel
;
