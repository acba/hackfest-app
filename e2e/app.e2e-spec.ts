import { HackfestAppPage } from './app.po';

describe('hackfest-app App', () => {
  let page: HackfestAppPage;

  beforeEach(() => {
    page = new HackfestAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
