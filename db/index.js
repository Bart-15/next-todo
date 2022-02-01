const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const connectionURI = process.env.MONGO_URI
mongoose.connect(connectionURI, {useNewUrlParser: true, useUnifiedTopology: true})
