import React from 'react';

interface TButton {
    text: string;
    variant?: 'primary' | 'secondary';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: TButton) {
    const { text, onClick } = props;
    return (
        <button onClick={onClick} className={props.variant}>
            {text}
        </button>
    );
}

export default Button;
