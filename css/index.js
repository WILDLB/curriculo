const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('index.js')
});

app.listen(process.env.PORT || 3000);