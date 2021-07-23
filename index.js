const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render('index.ejs')
});

app.listen(process.env.PORT || 3000, () => {
    console.log('servidor rodando!!')
});