import React from 'react';
import { render } from '@testing-library/react';
import ContactItem from './ContactItem';
import noop from '../../utils/noop';
import IContact from '../../constants/types/contact';

const mockContact: IContact = {
  id: '123',
  name: 'test',
  number: '123',
};
const mockContactEmptyName: IContact = {
  id: '123',
  name: '',
  number: '123',
};

describe('components/ContactItem', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<ContactItem contact={mockContact} onClick={noop} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should put \'#\' if the name is empty', () => {
    const { getByText } = render(<ContactItem contact={mockContactEmptyName} onClick={noop} />);
    expect(getByText('#')).toBeInTheDocument();
  });
});
