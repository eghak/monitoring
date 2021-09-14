const express = require(`express`);
const path = require(`path`);
const Rollbar = require(`rollbar`);

let rollbar = new Rollbar({
  accessToken: `da3289c0b79245e6a9ec40efe127b6ad`,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const students = [];
const app = express();
app.use(express.json());

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/index.html`));
  rollbar.info(`HTML file served successfully!`);
});

app.post(`/api/student`, (req, res) => {
  let { name } = req.body;
  name = name.trim();
  students.push(name);

  rollbar.log(`student added successfuly`, {
    author: `Jeddy`,
    type: `Manual entry`,
  });
  res.status(200).send(students);
});

const port = process.env.PORT || 4545;

app.use(rollbar.errorHandler());

app.listen(port, () => {
  console.log(`They're taking the Hobbitss to ${port}!`);
});
