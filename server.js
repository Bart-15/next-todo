const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './.env' })

const PORT = process.env.PORT || 3000;

const api = process.env.BASE_URL;

// routes
const todoRouter = require('./routes/todo')

app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


// init route
app.use(`${api}`, todoRouter)



app.listen(PORT, () => {
    console.log('listening on port', PORT)
});