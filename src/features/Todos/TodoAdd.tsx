import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addTodo } from './todosSlice';

const TodoAdd = () => {
    const [title, setTitle] = useState('');
    const dispatch = useAppDispatch();

    function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        dispatch(addTodo(title));
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <p>
                <label>
                    Title
                    <br />
                    <input
                        type={'text'}
                        required={true}
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </label>
            </p>
            <button type='submit'>Add todo</button>
        </form>
    );
};

export default TodoAdd;
