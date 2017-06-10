import { PotfoliePage } from './app.po';

describe('potfolie App', () => {
  let page: PotfoliePage;

  beforeEach(() => {
    page = new PotfoliePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
