import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TUserContext, UserContext } from '../../context/userContext';
import { apiUrl } from '../../constants';

export default () => {
    const { saveToken } = React.useContext(UserContext) as TUserContext;
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

        const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        result?.errors?.forEach((error: string) => {
            toast.error(error, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
            });
        });
        if (result.successful) {
            saveToken(result.result);
        } else if (!result.submit && !result.errors) {
            toast.error('Make sure the name, email and password fields match the ones used while registering', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
            });
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

            <button type='submit'>Login</button>

            <p>
                No account? <Link to={`/registration`}>Please register</Link>
            </p>
            <ToastContainer />
        </form>
    );
};
