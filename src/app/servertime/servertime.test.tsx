import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Servertime from './servertime';

describe('<Servertime />', () => {
  test('it should mount', () => {
    render(<Servertime />);
    
    const servertime = screen.getByTestId('Servertime');

    expect(servertime).toBeInTheDocument();
  });
});