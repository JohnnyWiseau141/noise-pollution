const express = require('express');
const morgan = require('morgan');
const ws = require('express-ws');
const ejs = require('ejs');

const routes = require('./routes.js');


const config = (
  process.env.ENV !== 'prod'  // incl. local
  ? {
    trustProxy: false,
    forceHttps: false,
  }
  : {
    trustProxy: true,
    forceHttps: true,
  }
);

const app = express();

app.set('x-powered-by', false);
app.set('trust proxy', config.trustProxy);
app.set('view engine', ejs.name);
app.set('view cache', true);

app.use(morgan('combined'));
if (config.forceHttps) {
  app.use((req, res, next) => {
    if (req.secure) {
      next();
      return;
    }

    const url = `https://${req.headers.host}${req.url}`;
    res.status(301);
    res.setHeader('Location', url);
    res.setHeader('Content-Type', 'text/plain');
    res.send(`Redirecting to ${url} ...\n`);
  });
}
app.use(express.urlencoded({extended: false}));
ws(app);

routes.setup(app);

app.listen(parseInt(process.env.PORT, 10), '0.0.0.0', function () {
  const {address, port} = this.address();
  console.log(`Listening on ${address}:${port}`);
});
