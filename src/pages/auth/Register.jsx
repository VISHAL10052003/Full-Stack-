import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from '../../services/Ath'; // Check this path
import '../../assets/css/Registerpage.css';
import RegPageImage from '../../assets/images/Regpage1.jpg'; // Check this path

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (username.trim() === '') {
      newErrors.username = 'Username is required';
    } else if (!/^[a-zA-Z]{5}[0-9]{2}$/.test(username)) {
      newErrors.username = 'Username should be a combination of 5 alphabets and 2 numbers';
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/[a-zA-Z]+@gmail.com/.test(email)) {
      newErrors.email = 'Email should be in the format example@gmail.com';
    }

    if (password.trim() === '') {
      newErrors.password = 'Password is required';
    } else if (!/[A-Za-z]{3}[0-9]{2}[@$!%#?&_]{2}$/.test(password)) {
      newErrors.password = 'Password should be a combination of 3 alphabets, 2 numbers, and 2 special characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      const data = {
        username,
        email,
        password
      };

      signUp(data)
        .then(() => {
          // Navigate to sign-in page
          navigate('/login');
        })
        .catch((error) => {
          // Handle any errors
          console.error("Sign-up error:", error);
        });

      // Show toast message
      toast.success("Registration successful! You can now login.");
      // Reset form fields
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/login');
      // Navigate to login page
    }
  };

  return (
    <>
      <div className="Regpage" style={{ backgroundImage: `url(${RegPageImage})` }}>
        <div className="outer-box">
          <div className="inner-box">
            <h2 color='white'>Register</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
