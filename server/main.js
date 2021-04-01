const express = require("express");
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

const name = 'Sergio' || process.env.NAME;

app.get("/api", (req, res) => {
    res.json({message: 'Hello from server!'});
    //res.send(`<h1>Hello, ${name}</h1>`)
});


app.listen(port, () => {
    console.log(`Listening at ${port} in localhost`);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

  app.use(express.static(path.resolve(__dirname, '../client/build')));
