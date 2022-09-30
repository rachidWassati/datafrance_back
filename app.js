const express = require('express');
const morgan = require('morgan');
const index = require('./routes');
const cors = require('cors')
const app = express()
const port = 3000


app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(index)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))