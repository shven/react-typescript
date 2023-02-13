import React from 'react';
import { TUser } from '../types/TUser';

import styles from './Welcome.module.css';

function Welcome(props: TUser) {
    function formatUser(user: TUser) {
        return `Hello ${user.firstName} ${user.lastName}`;
    }

    return <div className={styles.welcome}>{formatUser(props)}</div>;
}

export default Welcome;
