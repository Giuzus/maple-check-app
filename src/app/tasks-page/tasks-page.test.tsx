import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TasksPage from './tasks-page';

describe('<TasksPage />', () => {
  test('it should mount', () => {
    render(<TasksPage />);
    
    const tasksPage = screen.getByTestId('Tasks');

    expect(tasksPage).toBeInTheDocument();
  });
});