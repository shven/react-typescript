import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

render(<App />);

test('renders footer text', () => {
    const linkElement = screen.getByText(/Footer text/i);
    expect(linkElement).toBeInTheDocument();
});
