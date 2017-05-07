import { Currency1Page } from './app.po';

describe('currency1 App', () => {
  let page: Currency1Page;

  beforeEach(() => {
    page = new Currency1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
