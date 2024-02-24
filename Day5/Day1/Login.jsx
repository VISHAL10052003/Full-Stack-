import { useState } from 'react';
import '/src/assets/css/Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  // State variables to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to handle the form submission, such as sending data to a server
    console.log('Username:', username);
    console.log('Password:', password);
    // Clear input fields after submission
    setUsername('');
    setPassword('');
};
const handlelogin=()=>{
    navigate('/home');
}

  return (
    <div className='bg'>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className='log-use'>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='log-use'>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="submit-button" onClick={handlelogin}>Login</button>
        <br></br><br></br>
       <div className="log-forgot-password">
          <a href="/Signup">Forgot Password?</a>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
