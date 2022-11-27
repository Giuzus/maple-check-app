import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tasks from './tasks';

describe('<Tasks />', () => {
  test('it should mount', () => {
    render(<Tasks />);
    
    const tasks = screen.getByTestId('Tasks');

    expect(tasks).toBeInTheDocument();
  });
});