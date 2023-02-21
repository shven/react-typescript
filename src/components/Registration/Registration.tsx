import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl } from '../../constants';

export default () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const newUser = {
            name,
            password,
            email
        };

        const response = await fetch(`${apiUrl}/register`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response) {
            console.error('error connecting to backend');
        }

        const result = await response.json();

        if (result.errors) {
            result?.errors.forEach((error: string) => {
                toast.error(error, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light'
                });
            });
        }

        if (result.successful) {
            navigate('/login');
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <p>
                <label>
                    Name
                    <br />
                    <input
                        type={'text'}
                        required={true}
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </label>
            </p>
            <p>
                <label>
                    Email
                    <br />
                    <input
                        type={'text'}
                        required={true}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </label>
            </p>
            <p>
                <label>
                    Password
                    <br />
                    <input
                        type={'text'}
                        required={true}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </label>
            </p>

            <button type='submit'>Register</button>

            <p>
                Do you already have an account? <Link to={`/login`}>Login</Link>
            </p>
            <ToastContainer />
        </form>
    );
};
