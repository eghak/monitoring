const express = require(`express`);
const path = require(`path`);

const app = express();

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/index.html`));
});

const port = processs.env.PORT || 4545;

app.listen(port, () => {
  console.log(`They're taking the Hobbitss to ${port}!`);
});
