const express = require('express');
const morgan = require('morgan');
const index = require('./routes');
const cors = require('cors')
const app = express()
const port = 3000
require('./database');


app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(index)

app.listen(port, () => console.log(`listening on port ${port}!`))