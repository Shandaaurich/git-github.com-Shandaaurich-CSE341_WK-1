//express web server

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Shanda Aurich');
});

const port = 3000;

app.listen(process.env.PORT || port);
console.log('Web server listening on port ' + port);