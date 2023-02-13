import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

render(<App />);
const $logo = screen.getByAltText(/logo/i);

test('renders logo', () => {
    expect($logo).toBeInTheDocument();
});

test('logo has src', () => {
    render(<App />);

    expect($logo).toHaveAttribute('src');
});
