import React, { useState } from 'react';
import './Register.css'; // Ensure you have this file for styling
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/auth';

function Register() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        phoneNo: '',
        password: ''
    });

    const navigate = useNavigate();
    const { storeTokenInLs } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        if (!user.username || !user.email || !user.phoneNo || !user.password) {
            alert('All fields are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('res form server', result);
                storeTokenInLs(result.token);
                setUser({ username: '', email: '', phoneNo: '', password: '' });
                alert('Registration successful');
                console.log('User registered:', result);
                navigate('/login');
            } else {
                const error = await response.json();
                alert(error.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="main">
            <div className="register">
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
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Your email"
                    />
                    <label htmlFor="phoneNo">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNo"
                        required
                        value={user.phoneNo}
                        onChange={handleChange}
                        placeholder="Your phone number"
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
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
