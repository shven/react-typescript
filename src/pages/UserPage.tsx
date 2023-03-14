import React from 'react';
import User from '../components/User/User';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <section>
            <User />
            <p>
                You have access to our <Link to={'/courses'}>courses</Link>
            </p>
        </section>
    );
};
