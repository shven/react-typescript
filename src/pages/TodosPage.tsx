import React from 'react';
import { Outlet } from 'react-router-dom';
import TodoAdd from '../features/Todos/TodoAdd';

export default () => {
    return (
        <section>
            <h1>Todos</h1>
            <TodoAdd />
            <Outlet />
        </section>
    );
};
