import React from 'react';
import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';

function Welcome(props: { name: string; role: string }) {
    return (
        <div className={styles.root}>
            <Link to={'/user'} className={styles.link}>
                Welcome {props.name} ({props.role})
            </Link>
        </div>
    );
}

export default Welcome;
