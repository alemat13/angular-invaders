import { InvaderStatusPipe } from './invader-status.pipe';

describe('InvaderStatusPipe', () => {
  const pipe = new InvaderStatusPipe();
  it('create an instance', () => {
    const pipe = new InvaderStatusPipe();
    expect(pipe).toBeTruthy();
  });
  it('transforms "0" to "Détruit"', () => {
    expect(pipe.transform(0, 'text')).toBe("Détruit");
  })
  // and so on...
});
