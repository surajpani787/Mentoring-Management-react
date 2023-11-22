// SignUpForm.js
import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import {toast} from 'react-toastify'

function SignUp() {

  const [studentName, setStudentName] = useState("");
  const [studentRegdNo, setStudentRegdNo] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentNo, setparentNo] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});



  const clearForm = () => {
    setStudentName("");
    setStudentRegdNo("");
    setStudentPhone("");
    setStudentEmail("");
    setParentName("");
    setparentNo("");
    setPassword("");
    setErrors({});
  };

  const handleApi = () => {
    const requestData = {
      studentName,
      studentRegdNo,
      studentPhone,
      studentEmail,
      parentName,
      parentNo,
      password,
      
    };

    console.log("Sending request with data:", requestData);

    axios.post('http://localhost:8080/api/mentee/signup', requestData)
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
    const validationErrors = {};

    if (!studentName) {
      validationErrors.studentName = "Student Name is required";
    }

    if (!studentRegdNo) {
      validationErrors.registrationNumber = "Registration Number is required";
    }

    if (!studentPhone) {
      validationErrors.studentPhone = "Student Phone Number is required";
    }

    if (!studentEmail) {
      validationErrors.studentEmail = "Student Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(studentEmail)) {
      validationErrors.studentEmail = "Invalid email address";
    }

    if (!parentName) {
      validationErrors.parentName = "Parent Name is required";
    }

    if (!parentNo) {
      validationErrors.parentNo = "Parent Phone Number is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Handle successful sign-up logic here
      console.log("Sign-up successful");
      toast.success("User Registered successfully")
      // Clear the form after successful submission
      clearForm();
    } else {
      setErrors(validationErrors);
    }

  };



  return (
    <div>
      <form className="sign-up-form" onSubmit={handleSubmit} method="post">
        <h3>Sign-Up</h3>
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          {errors.studentName && <p className="error-message">{errors.studentName}</p>}
        </div>
        <div className="form-group">
          <label>StudentRegdNo</label>
          <input
            type="text"
            value={studentRegdNo}
            onChange={(e) => setStudentRegdNo(e.target.value)}
          />
          {errors.registrationNumber && (
            <p className="error-message">{errors.StudentRegdNo}</p>
          )}
        </div>
        <div className="form-group">
          <label>Student Phone Number</label>
          <input
            type="text"
            value={studentPhone}
            onChange={(e) => setStudentPhone(e.target.value)}
          />
          {errors.studentPhone && <p className="error-message">{errors.studentPhone}</p>}
        </div>
        <div className="form-group">
          <label>Student Email</label>
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
          {errors.studentEmail && <p className="error-message">{errors.studentEmail}</p>}
        </div>
        <div className="form-group">
          <label>Parent Name</label>
          <input
            type="text"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
          />
          {errors.parentName && <p className="error-message">{errors.parentName}</p>}
        </div>
        <div className="form-group">
          <label>Parent Phone Number</label>
          <input
            type="text"
            value={parentNo}
            onChange={(e) => setparentNo(e.target.value)}
          />
          {errors.parentNo && <p className="error-message">{errors.parentNo}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <button type="submit" className="btn" onClick={handleApi}>Sign Up</button>
      </form>
      <Footer />
    </div>
  );
};

export default SignUp;
