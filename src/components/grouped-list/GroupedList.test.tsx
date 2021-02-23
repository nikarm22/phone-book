import React from 'react';
import { render } from '@testing-library/react';
import GroupedList from './GroupedList';

const mockItems = {
  groupItem1: [1,2,3],
  groupItem2: [4,5,6]
};

const mockRenderer = (item: number) => <div key={item}>{item}</div>;

describe('components/ContactItem', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<GroupedList items={mockItems} renderer={mockRenderer} />);
    expect(asFragment()).toMatchSnapshot();
  })
});
