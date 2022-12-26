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

  test('it should display account wide tasks when no character is selected', () => {
    throw new Error('Not implemented');
  });

  test('it should display the selected character information', () => {
    throw new Error('Not implemented');
  });

  test('it should have a list of daily tasks', () => {
    throw new Error('Not implemented');
  });

  test('it should have a list of weekly tasks', () => {
    throw new Error('Not implemented');
  });

  test('it should display the time until next daily reset', () => {
    throw new Error('Not implemented');
  });
  
  test('it should display the time until next weekly quest reset', () => {
    throw new Error('Not implemented');
  });

  test('it ', () => {
    throw new Error('Not implemented');
  });

});