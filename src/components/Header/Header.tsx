import styles from './Header.module.css';
import React from 'react';
import Logo from './components/Logo/Logo';
import Welcome from '../Welcome/Welcome';
import Button from '../../common/Button/Button';

function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.header__actions}>
                <Welcome firstName={'John'} lastName={'Doe'} />
                <Button
                    text={'Logout'}
                    onClick={() => {
                        alert('Logged out');
                    }}
                />
            </div>
        </header>
    );
}

export default Header;
