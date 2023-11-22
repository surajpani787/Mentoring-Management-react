import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MentorList() {
    const [mentors, setMentors] = useState([]);
    const [mentorToEdit, setMentorToEdit] = useState(null);

    useEffect(() => {
        // Fetch mentor details from the Spring backend
        axios.get('http://localhost:8080/api/mentor')
            .then(response => setMentors(response.data))
            .catch(error => console.error('Error fetching mentor details:', error));
    }, []);

    const handleDelete = (id) => {
        // Set the mentor to be edited before deletion
        setMentorToEdit(mentors.find(mentor => mentor.id === id));

        // Make a DELETE request to the backend to delete the mentor with the given ID
        axios.delete(`http://localhost:8080/api/mentor/${id}`)
            .then(response => {
                // Update the mentors state after successful deletion
                setMentors(prevMentors => prevMentors.filter(mentor => mentor.id !== id));
                // Clear the mentorToEdit state after deletion
                setMentorToEdit(null);
            })
            .catch(error => console.error('Error deleting mentor:', error));
    };

    const handleUpdate = () => {
        // Make a PUT request to update the mentor details
        axios.put(`http://localhost:8080/api/mentor/${mentorToEdit.id}`, mentorToEdit)
            .then(response => {
                // Update the mentors state after successful update
                setMentors(prevMentors =>
                    prevMentors.map(mentor =>
                        mentor.id === mentorToEdit.id ? mentorToEdit : mentor
                    )
                );

                // Clear the mentorToEdit state after update
                setMentorToEdit(null);
            })
            .catch(error => console.error('Error updating mentor:', error));
    };

    const handleEdit = (mentor) => {
        // Set the mentor to be edited
        setMentorToEdit(mentor);
    };

    const handleInputChange = (event) => {
        // Update the mentorToEdit state when input fields change
        setMentorToEdit({
            ...mentorToEdit,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div>
            <div className='mentorlist'>
                <h2>Mentor Details</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mentor-Name</th>
                        <th>Mentor-Id</th>
                        <th>Mentor-No</th>
                        <th>Mentor-Email</th>
                        <th>Perform-Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mentors.map(mentor => (
                        <tr key={mentor.id}>
                            <td>{mentor.id}</td>
                            <td>{mentor.mentorName}</td>
                            <td>{mentor.mentorId}</td>
                            <td>{mentor.mentorPhone}</td>
                            <td>{mentor.mentorEmail}</td>
                            <td>
                                <button className='action' onClick={() => handleEdit(mentor)}>Edit</button>
                                <button className='action' onClick={() => handleDelete(mentor.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Form for update */}
            {mentorToEdit && (
                <div>
                    <h2>Edit Mentor</h2>
                    <form className="mentor">
                        <div className="input-container">
                            <label htmlFor="mentorName">Mentor Name:</label>
                            <input type="text" name="mentorName" id="mentorName" value={mentorToEdit.mentorName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="mentorId">Mentor ID:</label>
                            <input type="text" name="mentorId" id="mentorId" value={mentorToEdit.mentorId}
                                onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="mentorPhone">Mentor Phone:</label>
                            <input type="text" name="mentorPhone" id="mentorPhone" value={mentorToEdit.mentorPhone}
                                onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="mentorEmail">Mentor Email:</label>
                            <input type="text" name="mentorEmail" id="mentorEmail" value={mentorToEdit.mentorEmail}
                                onChange={handleInputChange} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" value={mentorToEdit.mentorpassword}
                                onChange={handleInputChange}/>
                        </div>
                        <button type="button" className='btn' onClick={handleUpdate}>Update</button>                    
                        </form>
                </div>
            )}
        </div>
    );
}

export default MentorList;
