import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharacterTasks from './character-tasks';

describe('<CharacterTasks />', () => {
  test('it should mount', () => {
    render(<CharacterTasks />);
    
    const characterTasks = screen.getByTestId('CharacterTasks');

    expect(characterTasks).toBeInTheDocument();
  });
});