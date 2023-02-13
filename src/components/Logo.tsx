import React from 'react';
import logo from '../logo.svg';
import styles from './Logo.module.css';

function Logo() {
    return (
        <>
            <img id={'logo'} src={logo} className={styles.img} alt='logo' />
        </>
    );
}

export default Logo;
