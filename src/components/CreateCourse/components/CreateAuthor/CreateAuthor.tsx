import React, { useState } from 'react';
import { AuthorContext, TAuthorContext } from '../../../../context/authorContext';
import { TAuthor } from '../../../../types';
import getRandomString from '../../../../helpers/getRandomString';

const forbiddenSymbols = /[@#$%^&]/;

function CreateAuthor() {
    const { authors, saveAuthor } = React.useContext(AuthorContext) as TAuthorContext;

    const [name, setName] = useState('');

    function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const author: TAuthor = {
            id: getRandomString(),
            name
        };

        // save author and avoid duplicates
        const authorExists = authors.some((a) => a.name === author.name);
        const confirmed = authorExists && confirm(`Author "${author.name}" already exists, are you sure you'd like to add the same author name with a different id?`);
        if (confirmed || !authorExists) {
            saveAuthor(author);
        }

        // reset form
        setName('');
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
