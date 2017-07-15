import { DatacomPage } from './app.po';

describe('datacom App', () => {
  let page: DatacomPage;

  beforeEach(() => {
    page = new DatacomPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
