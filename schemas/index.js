const mongoose = require('mongoose');

modeul.export = () => {

    const connect = () => {
        if( process.env.NODE_ENV !== 'production') {
            mongoose.set('dedug', true);
        }
        mongoose.connect('mongodb://minsik:password@localhost:27017/admin', {
            dbName : 'nodejs',
        } , err => {
            if( err){
                console.log( 'mongodb connection error', err);
            } else {
                console.log('connect succedd');
            }
        })
    }
    connect();
    mongoose.connection.on('error', (err)=>{
        console.error('mongodb connection error' , err);
        
    })

    mongoose.connection.on('disconnected', () => {
        console.log('mongodb disconnected');
        connect();
    })

    require('./user');
    require('./comment');
}