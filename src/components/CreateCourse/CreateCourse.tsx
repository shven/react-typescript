import React, { useState } from 'react';
const forbiddenSymbols = /[@#$%^&]/;
function CreateCourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // new function
    const handleTitleChange = (value: string) => {
        if (!forbiddenSymbols.test(value)) {
            setTitle(value);
        }
    };

    return (
        <form>
            <label>
                Title {title}
                <input
                    value={title}
                    onChange={(e) => {
                        handleTitleChange(e.target.value);
                    }}
                />
            </label>
            <br />

            <label>
                Description {description}
                <input value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
        </form>
    );
}

export default CreateCourse;
