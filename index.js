const express = require('express')
var path = require('path')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
