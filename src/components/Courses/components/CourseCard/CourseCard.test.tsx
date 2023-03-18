import React from 'react';
import { screen } from '@testing-library/react';
import CourseCard from './CourseCard';
import { renderWithProviders } from '../../../../utils/testUtils';
import { mockedAuthorsState, mockedCoursesState } from '../../../../constants';

test('CourseCard should display title.', () => {
    renderWithProviders(<CourseCard id={`b5630fdd-7bf7-4d39-b75a-2b5906fd0916`} />, {
        preloadedState: {
            courses: mockedCoursesState
        }
    });
    const el = screen.getByTestId('course-title');
    expect(el).toHaveTextContent('Angular');
});
test('CourseCard should display description.', () => {
    renderWithProviders(<CourseCard id={`b5630fdd-7bf7-4d39-b75a-2b5906fd0916`} />, {
        preloadedState: {
            courses: mockedCoursesState
        }
    });
    const el = screen.getByTestId('course-description');
    expect(el).toBeInTheDocument();
});

test('CourseCard should display duration in the correct format.', () => {
    renderWithProviders(<CourseCard id={`b5630fdd-7bf7-4d39-b75a-2b5906fd0916`} />, {
        preloadedState: {
            courses: mockedCoursesState
        }
    });
    const el = screen.getByTestId('course-duration');
    expect(el).toHaveTextContent('03:30 hours');
});

test('CourseCard should display authors list.', () => {
    renderWithProviders(<CourseCard id={`b5630fdd-7bf7-4d39-b75a-2b5906fd0916`} />, {
        preloadedState: {
            courses: mockedCoursesState,
            authors: mockedAuthorsState
        }
    });
    const el = screen.getByTestId('course-authors');
    expect(el).toHaveTextContent('Anna Sidorenko, Valentina Larina');
});

test('CourseCard should display created date in the correct format.', () => {
    renderWithProviders(<CourseCard id={`b5630fdd-7bf7-4d39-b75a-2b5906fd0916`} />, {
        preloadedState: {
            courses: mockedCoursesState,
            authors: mockedAuthorsState
        }
    });
    const el = screen.getByTestId('course-creation-date');
    expect(el).toHaveTextContent('10.11.2020');
});
