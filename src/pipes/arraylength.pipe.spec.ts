import { ArrayLengthPipe } from './arraylength.pipe';

describe('ArraylengthPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
