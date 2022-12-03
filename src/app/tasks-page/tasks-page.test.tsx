import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TasksPage from './tasks-page';
import { renderWithProviders } from '../../utils/test-utils';

describe('<TasksPage />', () => {
  test('it should mount', () => {
    renderWithProviders(<TasksPage />);
    
    const tasksPage = screen.getByTestId('tasksPage');

    expect(tasksPage).toBeInTheDocument();
  });
});