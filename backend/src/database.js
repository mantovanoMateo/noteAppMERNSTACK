const mongoose= require('mongoose');

const URI='mongodb://127.0.0.1/mernstack';

mongoose.connect(URI);

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log('DB is connected');
});