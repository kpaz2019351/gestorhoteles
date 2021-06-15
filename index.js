'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var user = require('./controllers/user.controller')
var port = process.env.PORT || 3800;

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://Admin:123@dbgestionhoteles.48xsa.mongodb.net/DBGestionHoteles?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        user.initAdmin();
        console.log('connect to DB');
        app.listen(port, ()=>{
            console.log('server express running')
        })
    }).catch((err)=>console.log('connection error to DB', err))