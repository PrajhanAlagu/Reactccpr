import React, { useState } from 'react';
import axios from 'axios';
import './pr.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        navigate('/par'); // Redirect on successful login
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during login.");
    }
  };

  const handleSignup = async () => {
    try {
      const existingUser = await axios.get(`http://localhost:3000/users?email=${email}`);
      if (existingUser.data.length > 0) {
        setError("Email is already registered.");
      } else {
        await axios.post('http://localhost:3000/users', { name, email, password });
        setError("Sign up successful! Please log in.");
        setAction("Login"); // Switch to Login mode after successful signup
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during signup.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (action === "Login") {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        {action === "Sign Up" && (
          <div className="input">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="input">
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {action === "Login" && (
          <div className="forget-password">
            Lost Password? <span>Click Here</span>
          </div>
        )}
        <div className="submit-container">
          <button
            type="button"
            className={`submit ${action === "Sign Up" ? "gray" : ""}`}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button
            type="submit"
            className={`submit ${action === "Login" ? "gray" : ""}`}
          >
            {action === "Sign Up" ? "Sign Up" : "Log In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
