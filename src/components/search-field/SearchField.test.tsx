import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import noop from '../../utils/noop'
import SearchField from './SearchField';

describe('components/SearchField', () => {
  it('should render a text input field', () => {
    const { container } = render(<SearchField value="" onChange={noop} />);
    const input = container.getElementsByTagName('input')[0];
    expect(input).toBeInstanceOf(HTMLInputElement);
  });

  it('should render the search icon', () => {
    const { getByTestId } = render(<SearchField value="" onChange={noop} />);
    const icon = getByTestId('search-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should call reflect \'value\' prop in DOM', () => {
    const testValue = 'test';
    const { container } = render(<SearchField value={testValue} onChange={noop} />);
    const input = container.getElementsByTagName('input')[0];
    expect(input.value).toBe(testValue);
  });

  it('should call onChange with change when input field is changed', () => {
    const mockInput = 'test';
    const onChange = jest.fn();
    const { container } = render(<SearchField value="" onChange={onChange} />);
    const input = container.getElementsByTagName('input')[0];

    fireEvent.change(input, { target: { value: mockInput } });
    expect(onChange).toBeCalledTimes(1);
  });
});
