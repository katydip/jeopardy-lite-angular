import { JeopardyLiteAngularPage } from './app.po';

describe('jeopardy-lite-angular App', () => {
  let page: JeopardyLiteAngularPage;

  beforeEach(() => {
    page = new JeopardyLiteAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
