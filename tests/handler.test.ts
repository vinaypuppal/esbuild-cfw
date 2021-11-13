import { Miniflare } from 'miniflare';

let mf: Miniflare;
describe('Handler', () => {
  beforeEach(() => {
    mf = new Miniflare();
  });

  it('should be able to handle a request', async () => {
    const res = await mf.dispatchFetch(`http://localhost:8787`);
    expect(await res.text()).toBe('Hello!');
  });
});
