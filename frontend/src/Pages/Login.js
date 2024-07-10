import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/Login.css';

export const Login = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      fetchProtectedData(token);

      console.log('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Error while login', error);
      setMessage('Error While Logging in');
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
        username,
        email,
        password,
      });
      console.log(response.data);
      setMessage('User registered successfully');
      setSignup(false);
    } catch (err) {
      console.error('Error while signup', err);
      setMessage('Error while Signup');
    }
  };

  const fetchProtectedData = async (token) => {
    try {
      console.log('Token being sent:', token); // Log the token
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/protected`, {
        headers: { Authorization: `Bearer ${token}` } // Ensure Bearer prefix
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching protected data', error);
      setMessage('You are not authorized to view this content');
    }
  };

  return (
    <>

      <div className='container'>
        <div className='login-header'>
          <h1 >{signup ? 'Signup to Continue' : 'Login Here'}</h1>
        </div>
        <div className='login-container'>

          <form
            className='login-form'
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label>Username:</label>
            <input type='text' value={username} placeholder='Enter username' onChange={(e) => setUserName(e.target.value)} />

            {signup && (
              <>
                <label>Email:</label>
                <input type='email' value={email} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
              </>
            )}

            <label>Password:</label>
            <input type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} />

            {signup ? (
              <>
                <button onClick={handleSignup}>SignUp</button>
                <p onClick={() => setSignup(false)}>Already have an account? Login</p>
              </>
            ) : (
              <>
                <button onClick={handleLogin}>Login</button>
                <p onClick={() => setSignup(true)}>Don't have an account? Signup</p>
              </>
            )}
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
};
