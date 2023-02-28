import styles from './Header.module.css';
import React from 'react';
import Logo from './components/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import { logout, userGetUser, userIsLoggedIn } from '../../context/userSlice';
import Button from '../../common/Button/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

function Header() {
    const isLoggedIn = useAppSelector(userIsLoggedIn);
    const user = useAppSelector(userGetUser);
    const dispatch = useAppDispatch();

    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            {isLoggedIn && (
                <div className={styles.header__actions}>
                    {isLoggedIn && user?.name && user?.role && <Welcome name={user?.name} role={user?.role} />}
                    <Button variant={'secondary'} text={'Logout'} onClick={() => dispatch(logout())} />
                </div>
            )}
            {!isLoggedIn && (
                <div className={styles.header__actions}>
                    <Link to='/login'>Login</Link> / <Link to='/registration'>Register</Link>
                </div>
            )}
        </header>
    );
}

export default Header;
