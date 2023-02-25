import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTodosAsync, selectTodoIdsReversed } from './todosSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
    const dispatch = useAppDispatch();
    const todoIds = useAppSelector(selectTodoIdsReversed);

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, [dispatch]);

    const renderedListItems = todoIds.map((id) => {
        return (
            <li key={id}>
                <TodoItem id={id} />
            </li>
        );
    });

    return (
        <div>
            <ul className='todo-list'>{renderedListItems}</ul>
        </div>
    );
};

export default TodoList;
