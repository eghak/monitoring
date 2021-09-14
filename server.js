const express = require(`express`);
const path = require(`path`);
const Rollbar = require(`rollbar`);

let rollbar = new Rollbar({
  accessToken: `da3289c0b79245e6a9ec40efe127b6ad`,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const app = express();

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/index.html`));
  rollbar.info(`HTML file served successfully!`);
});

const port = process.env.PORT || 4545;

app.listen(port, () => {
  console.log(`They're taking the Hobbitss to ${port}!`);
});
