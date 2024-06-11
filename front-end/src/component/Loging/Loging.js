import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css';
import { useAuth } from '../pages/auth';
function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };
    const navigate =  useNavigate();
    const {storeTokenInLs} = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.username === '' || user.password === '') {
            alert('Please fill out all fields');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const result = await response.json();
                storeTokenInLs(result.token);
                setUser({ username: '', password: '' });
                alert('Login successful');
                console.log('Login successful:', result);
                navigate('/');
            } else {
                const error = await response.json();
                alert(error.message || 'Invalid Credentials');
                console.log('Invalid Credentials');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="main">
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        required
                        value={user.username}
                        onChange={handleChange}
                        placeholder="Your username"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Your password"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
