import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/testUtils';
import Courses from './Courses';
import { mockedCoursesState } from '../../constants';

test('Courses should display amount of CourseCard equal length of courses array', () => {
    renderWithProviders(<Courses />, {
        preloadedState: {
            courses: mockedCoursesState
        }
    });
    const el = screen.getAllByTestId('course-card');
    expect(el).toHaveLength(2);
});
