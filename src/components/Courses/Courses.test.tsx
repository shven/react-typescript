import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/testUtils';
import Courses from './Courses';
import { mockedCoursesState, mockedLoggedInAdminUserState, mockedLoggedInUserState } from '../../constants';

test('Courses should display amount of CourseCard equal length of courses array', () => {
    renderWithProviders(<Courses />, {
        preloadedState: {
            courses: mockedCoursesState
        }
    });
    const el = screen.getAllByTestId('course-card');
    expect(el).toHaveLength(2);
});

test('Courses link is visible for users with an admin role', () => {
    renderWithProviders(<Courses />, {
        preloadedState: {
            courses: mockedCoursesState,
            user: mockedLoggedInAdminUserState
        }
    });
    const el = screen.getByTestId('courses-add-course-link');
    expect(el).toBeInTheDocument();
});

test('Courses link is not visible for users with a user role', () => {
    renderWithProviders(<Courses />, {
        preloadedState: {
            courses: mockedCoursesState,
            user: mockedLoggedInUserState
        }
    });
    // Use queryByTestId instead of getByTestId to return null instead of an error for non-existing element
    const el = screen.queryByTestId('courses-add-course-link');
    expect(el).toBeNull();
});
