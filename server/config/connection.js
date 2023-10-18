const mongoose = require('mongoose');


// Replace with your MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://ecommuser:ecommuser@cluster0.ktuyttz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = mongoose.connection;
