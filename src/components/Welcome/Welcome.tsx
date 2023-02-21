import React from 'react';
import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';

function Welcome(props: { name: string }) {
    return (
        <div className={styles.root}>
            <Link to={'/user'} className={styles.link}>
                {props.name}
            </Link>
        </div>
    );
}

export default Welcome;
