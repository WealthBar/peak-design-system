const http = require('http');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5001;
const appDir = path.resolve(__dirname, '../dist');
const history = require('connect-history-api-fallback');

app.use(express.static(appDir));

app.use(express.static(path.resolve(appDir, 'public')));

app.use(history({
  verbose: true,
  index: path.resolve(appDir, 'index.html'),
}));

app.get('*', (req, res) => {
  res.sendfile(path.resolve(appDir, 'index.html'));
});

http.createServer(app).listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
