const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Shanda Aurich');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening on port' + (process.env.PORT || 3000));
});
