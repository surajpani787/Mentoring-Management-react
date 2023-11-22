import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

function Signin() {
  const [studentEmail, setStudentEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!studentEmail) {
      validationErrors.email = "Email is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Call your API for user authentication
        const response = await axios.post("http://localhost:8080/api/mentee/login", {
          studentEmail,
          password,
        });

        // Assuming the server returns user data with a role property
       // const user = response.data;

        // Redirect users based on their role
       // const roleRedirectMap = {
          //admin: "../component/AdminNav",
         // mentee: "../component/MenteeNav",
         // mentor: "../component/MentorNav", // Adjust this based on your actual route
       // };

       // const redirectPath = roleRedirectMap[user];

        if (response.data = "Login successful!") {
          console.log("Response from server:", response.data);
          navigate('/review', { replace: true });
        } else {
          setErrors({ general: "Invalid user role" });
        }

        console.log("Sign in successful");
      } catch (error) {
        setErrors({ general: "Invalid email or password" });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h3>Sign-In</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
          {errors.general && <p className="error-message">{errors.general}</p>}
          {/* <a>Forget Password?</a> */}
        </div>
        <button type="submit" className="btn">Sign In</button>

        <a href=""></a>
      </form>

      <Footer />
    </div>
  );
};

export default Signin;