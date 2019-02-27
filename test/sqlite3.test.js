'use strict';

const mock = require('egg-mock');

describe('test/sqlite3.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/sqlite3-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sqlite3')
      .expect(200);
  });
});
