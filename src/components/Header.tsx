import styles from './Header.module.css';
import Logo from './Logo';
import Welcome from './Welcome';
import React from 'react';
import Button from './Button';

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
