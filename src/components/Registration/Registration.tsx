import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { userRegisterAsync } from '../../context/userSlice';

export default () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const errors = useAppSelector((state) => state.user.errors);

    useEffect(() => {
        errors?.forEach((error) => {
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
    }, [errors]);
    async function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        await dispatch(userRegisterAsync({ name, password, email }));

        if (!errors) {
            alert('Registered, please login');
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
