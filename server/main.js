const express = require("express");
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

const name = 'Sergio' || process.env.NAME;




app.listen(port, () => {
    console.log(`Listening at ${port} in localhost`);
});



  app.get("/api", (req, res) => {
    res.json({message: 'Hello from server!'});
    //res.send(`<h1>Hello, ${name}</h1>`)
});

  app.use(express.static(path.resolve(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
