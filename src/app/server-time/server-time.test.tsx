import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Servertime from './server-time';

describe('<Servertime />', () => {
  beforeEach(() => {
    render(<Servertime />);
  });

  test('it should mount', () => {

    const servertime = screen.getByTestId('ServerTime');

    expect(servertime).toBeInTheDocument();

  });

  test('should have a clock', async () => {
    const time = screen.getByTestId('ServerTime');
    expect(time).toHaveTextContent(new Date().toLocaleTimeString('pt-BR', { timeZone: 'UTC' }));
  });

  test('clock is updating', async () => {
    const time = screen.getByTestId('ServerTime');
    const timeText = time.textContent;
    await new Promise(r => setTimeout(r, 3000));
    const time2 = screen.getByTestId('ServerTime');
    expect(time2.textContent).not.toEqual(timeText);
  });
});