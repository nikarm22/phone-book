import React from 'react';
import { render } from '@testing-library/react';
import ContactList from './ContactList';

test('should render the <ContactList/> without errors', () => {
  const { container } = render(<ContactList />);
  const element = container.firstChild as HTMLElement;
  expect(element).toBeTruthy();
});
