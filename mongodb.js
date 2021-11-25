const mongoose = require('mongoose');
const connection_string = process.env.MONGO_URI;

mongoose.connect(connection_string, { 

  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true 

}).then( () => { console.log('Ya esta conectado');} ).catch( err => {console.log(err);} );




