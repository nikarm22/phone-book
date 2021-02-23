import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Header from './Header';

import { title } from '../../constants/strings';
import { ContactsContext, initialState } from '../../stores/contacts';

describe('sections/Header', () => {
  it('should render the application title', () => {
    const { getByText } = render(<Header />);
    expect(getByText(title)).toBeInTheDocument();
  });

  it('should render search bar', () => {
    const { container } = render(<Header />);
    const searchInput = container.querySelector('[aria-label="search"]');
    expect(searchInput).toBeInTheDocument();
  });

  it('should propogate search change to corresponding context', () => {
    const testSearch = 'test';
    const setSearchQuery = jest.fn();
    const { container } = render(
      <ContactsContext.Provider value={{ ...initialState, setSearchQuery}}>
        <Header />
      </ContactsContext.Provider>,
    );

    const searchInput = container.querySelector('[aria-label="search"]') as Element;

    fireEvent.change(searchInput, { target: { value: testSearch } });
    expect(setSearchQuery).toBeCalledWith(testSearch);
  });
});
