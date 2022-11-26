import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checklists from './checklists';

describe('<Checklists />', () => {
  test('it should mount', () => {
    render(<Checklists />);
    
    const checklists = screen.getByTestId('Checklists');

    expect(checklists).toBeInTheDocument();
  });
});