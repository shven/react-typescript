import styles from './Header.module.css';
import React from 'react';
import Logo from './components/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import { TUserContext, UserContext } from '../../context/userContext';
import Button from '../../common/Button/Button';

function Header() {
    const { user, isLoggedIn, logout } = React.useContext(UserContext) as TUserContext;

    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            {isLoggedIn && (
                <div className={styles.header__actions}>
                    {isLoggedIn && user?.name && <Welcome name={user?.name} />}
                    <Button variant={'secondary'} text={'Logout'} onClick={() => logout()} />
                </div>
            )}
            {!isLoggedIn && (
                <div className={styles.header__actions}>
                    <Link to='/login'>Login</Link> / <Link to='/registration'>Register</Link>
                    {isLoggedIn && user?.name && <Welcome name={user?.name} />}
                    {/*<Button*/}
                    {/*    variant={'secondary'}*/}
                    {/*    text={'Logout'}*/}
                    {/*    onClick={() => {*/}
                    {/*        alert('Logged out');*/}
                    {/*    }}*/}
                    {/*/>*/}
                </div>
            )}
        </header>
    );
}

export default Header;
