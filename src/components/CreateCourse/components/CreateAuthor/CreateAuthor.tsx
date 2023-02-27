import React, { useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { addAuthorsAsync } from '../../../Authors/authorSlice';

const forbiddenSymbols = /[@#$%^&]/;

function CreateAuthor() {
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');

    async function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const addAuthor = await dispatch(addAuthorsAsync(name));
        console.log(addAuthor, 'dispatchresponse');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <p>
                <label>
                    Name
                    <br />
                    <input
                        type={'text'}
                        required={true}
                        value={name}
                        onChange={(e) => {
                            if (!forbiddenSymbols.test(e.target.value)) {
                                setName(e.target.value);
                            }
                        }}
                    />
                </label>
            </p>
            <button type='submit'>Add author</button>
        </form>
    );
}

export default CreateAuthor;
