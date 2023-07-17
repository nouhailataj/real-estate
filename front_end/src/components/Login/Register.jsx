import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import "./login.css";
import { backendOrigin } from "../../config";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password and Confirm Password do not match.");
      alert("Password and Confirm Password do not match.");
      return;
    }
    try {
      const response = await axios.post(`${backendOrigin}/users/register`, {
        name,
        email,
        password,

      });
      if (response.data.success) {
        console.log(response.data.message); 
        alert("Registration successful");
     
      } else {
        console.log(response.data.message);
        alert("An error occurred during registration.");
      }
    } catch (error) {
      console.error(error);
      console.log("An error occurred. Please try again later.");
      alert("An error occurred. Please try again later.");
      console.log(error.response)
    }
  };

  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  };


  return (
    <div className="auth-form-container">
      <h2 className="regis-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <div className="password-input-container">
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
          />
          <div
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="password-input-container">
           <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
          />
           
        </div>
         
        <button className="login-btn" type="submit">
          Sign Up
        </button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register