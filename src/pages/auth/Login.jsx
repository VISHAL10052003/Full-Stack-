import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from '../../services/Ath';
import '../../assets/css/Registerpage.css';
import LoginPageImage from '../../assets/images/Loginpage.jpg';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Basic email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/[a-zA-Z]+@gmail\.com/.test(email)) {
      newErrors.email = 'Email should be in the format example@gmail.com';
      isValid = false;
    }

    // Basic password validation
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (!/[A-Za-z]{3}[0-9]{2}[@$!%#?&_]{2}$/.test(password)) {
      newErrors.password = 'Password should be a combination of 3 alphabets, 2 numbers, and 2 special characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Mocking data for signIn function
      const data = { email, password };

      signIn(data)
        .then(() => {
          navigate('/dashboard'); // Navigate to the dashboard or the desired page
        })
        .catch((error) => {
          console.error("Sign-in error:", error);
        });

      toast.success("Login successful!");
      setEmail('');
      setPassword('');
      navigate('/home');
    }
  };

  return (
    <>
      <div className="Loginpage" style={{ backgroundImage: `url(${LoginPageImage})` }}>
        <div className="outer-box">
          <div className="inner-box">
            <h2 color='white'>Login</h2>
            <form onSubmit={handleLogin}>
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
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/register">Register here</Link>.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
