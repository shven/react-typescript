import React from 'react';
import styles from './Welcome.module.css';
import { TUser } from '../../types';

function Welcome(props: TUser) {
    function formatUser(user: TUser) {
        return `Hello ${user.firstName} ${user.lastName}`;
    }

    return <div className={styles.welcome}>{formatUser(props)}</div>;
}

export default Welcome;
