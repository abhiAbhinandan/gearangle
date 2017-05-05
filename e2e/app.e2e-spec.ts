import { GearanglePage } from './app.po';

describe('gearangle App', () => {
  let page: GearanglePage;

  beforeEach(() => {
    page = new GearanglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
