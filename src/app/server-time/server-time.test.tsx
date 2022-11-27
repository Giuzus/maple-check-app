import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Servertime from './server-time';

describe('<Servertime />', () => {
  test('it should mount', () => {
    render(<Servertime />);
    
    const servertime = screen.getByTestId('Servertime');

    expect(servertime).toBeInTheDocument();

    test('should have a clock', async () => {
    const time = screen.getByTestId('time');
    expect(time).toHaveTextContent(new Date().toLocaleTimeString('pt-BR', { timeZone: 'UTC' }));
    });

    test('time is updated every second', async () => {
      const time = screen.getByTestId('time');
      expect(time).toHaveTextContent(new Date().toLocaleTimeString('pt-BR', { timeZone: 'UTC' }));
      setTimeout(() => {
        expect(time).toHaveTextContent(new Date().toLocaleTimeString('pt-BR', { timeZone: 'UTC' }));
      }, 1000);
    });
  
  });
});