const mongoose = require('mongoose');

exports.connect = () => {
    // connecting to mongo database
    mongoose.connect('mongodb+srv://Admin:Vikrant%4010@employeehunt.wg5fd.mongodb.net/test?authSource=admin&replicaSet=atlas-t4h35b-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', { useNewUrlParser: true, useFindAndModify: false ,useUnifiedTopology: true }, function (err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Successfully connected to database.');
        }
    });
}
