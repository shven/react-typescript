import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../common/Button/Button';
import { deleteTodo, selectTodoById, toggleTodo } from './todosSlice';

export default (props: { id: string }) => {
    const dispatch = useAppDispatch();
    const todo = useAppSelector((state) => selectTodoById(state, props.id));

    return (
        <div>
            {todo.id} - {todo.title}
            <Button
                variant={'secondary'}
                text={todo.completed ? 'done' : 'todo'}
                onClick={() => {
                    dispatch(toggleTodo(todo));
                }}
            />
            <Button
                variant={'secondary'}
                text={'Delete'}
                onClick={() => {
                    dispatch(deleteTodo(todo));
                }}
            />
        </div>
    );
};
