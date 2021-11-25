const mongoose = require('mongoose');
const connection_string = process.env.MONGO_URI;

mongoose.connect(connection_string, { useNewUrlParser:true, useUnifiedTopology:true })



