import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/testUtils';
import Courses from './Courses';
import { mockedCoursesState, mockedLoggedInAdminUserState, mockedLoggedInUserState, mockedNewCourse } from '../../constants';
import reducer, { addCourse } from './courseSlice';
import type { ICoursesState } from '../../types';

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

test('CourseForm should be showed after a click on a button "Add new course".', async () => {
    renderWithProviders(<Courses />, {
        preloadedState: {
            courses: mockedCoursesState,
            user: mockedLoggedInAdminUserState
        }
    });
    const el = screen.getByTestId('courses-add-course-link');
    const formEl = screen.getByTestId('create-course-form');

    fireEvent.change(
        el,
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        })
    );

    expect(formEl).toBeInTheDocument();
});

test('Courses reducer should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ entities: {}, errors: [], status: 'idle' });
});

test('Courses reducer should handle add course and returns new state', () => {
    const previousState: ICoursesState = { entities: {}, errors: [], status: 'idle' };

    expect(reducer(previousState, addCourse(mockedNewCourse))).toEqual({
        entities: {
            'b5630fdd-7bf7-4d39-b75a-2b5906fd0916': mockedNewCourse
        },
        errors: [],
        status: 'idle'
    });
});
