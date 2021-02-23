import noop from './noop';

describe('utils/noop', () => {
  // This is a joke test :)
  it('should be callable and do nothing', () => {
    noop();
    expect(true).toBe(true);
  });
});