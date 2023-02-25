import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { TUserContext, UserContext } from '../../context/userContext';

function Navigation() {
    const { isLoggedIn } = React.useContext(UserContext) as TUserContext;

    return (
        <nav className={styles.navigation}>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/todos'>Todos</Link>
            </div>
            <div>
                {isLoggedIn && <Link to='/courses'>Courses</Link>}
                <Link to='/counter'>Counter</Link>
            </div>
        </nav>
    );
}

export default Navigation;
