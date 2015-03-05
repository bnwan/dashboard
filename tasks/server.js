var mach = require('mach');
var config = require('../config');

var app = mach.stack();

app.use(mach.gzip);
app.use(mach.logger);
app.use(mach.modified);
app.use(mach.file, {
  root: './build',
  index: ['index.htm', 'index.html'],
  useLastModified: true,
  useETag: true
});

mach.serve(app, config.server.port);