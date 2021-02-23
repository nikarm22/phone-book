import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render the <App/> with correct classname', () => {
  const { container } = render(<App />);
  const element = container.firstChild as HTMLElement;
  expect(element.classList.contains('App')).toBeTruthy();
});
