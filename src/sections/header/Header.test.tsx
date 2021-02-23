import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

import { title } from '../../constants/strings';

describe('sections/Header', () => {
  it('should render the application title', () => {
    const { getByText } = render(<Header />);
    expect(getByText(title)).toBeInTheDocument();
  });
});
