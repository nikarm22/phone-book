import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should render the <App/> without errors', () => {
  const { container } = render(<App />);
  const element = container.firstChild as HTMLElement;
  expect(element).toBeTruthy();
});
