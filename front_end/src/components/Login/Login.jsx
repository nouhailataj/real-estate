import React, { useState } from "react";
import "./login.css"

import { FaEye, FaEyeSlash } from "react-icons/fa";
export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [showPassword, setShowPassword] = useState(false); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      
      <div className="auth-form-container">
        <h2 className="Login-H2">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
              value={pass}
              onChange={(e) => setPass(e.target.value)}
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
          <button className="login-btn" type="submit">Log In</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    );
  };
  
  export default Login