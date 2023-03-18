import React from 'react';
import { screen } from '@testing-library/react';
import Header from './Header';
import { renderWithProviders } from '../../utils/testUtils';
import { mockedLoggedInUserState } from '../../constants';

test("Header should have user's name.", () => {
    renderWithProviders(<Header />, {
        preloadedState: {
            user: mockedLoggedInUserState
        }
    });
    const el = screen.getByText(/Welcome John/i);
    expect(el).toBeInTheDocument();
});

test('Header should have logo.', () => {
    renderWithProviders(<Header />);

    const $logo = screen.getByAltText(/logo/i);
    expect($logo).toBeInTheDocument();
});

test('Header logo should have src', () => {
    renderWithProviders(<Header />);

    const $logo = screen.getByAltText(/logo/i);
    expect($logo).toHaveAttribute('src');
});
