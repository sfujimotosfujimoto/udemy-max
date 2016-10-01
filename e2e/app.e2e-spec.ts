import { UdemyMaxPage } from './app.po';

describe('udemy-max App', function() {
  let page: UdemyMaxPage;

  beforeEach(() => {
    page = new UdemyMaxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
