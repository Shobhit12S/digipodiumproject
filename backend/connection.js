const mongoose = require('mongoose');

const url = "mongodb+srv://shobhitkumargamer:kumarshobhit0001@cluster0.dhiqk.mongodb.net/shobhit?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous function - returns promise
mongoose.connect(url)
    .then((result) => {
        console.log('database connected')

    }).catch((err) => {
        console.log('error connecting to database', err)

    });

module.exports = mongoose;
