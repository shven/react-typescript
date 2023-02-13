import React from 'react';

interface TButton {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: TButton) {
    const { text, onClick } = props;
    return <button onClick={onClick}>{text}</button>;
}

export default Button;
