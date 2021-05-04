
module.exports = function(){

    const express = require('express');

    const app = express();

    const useNewCode= true;

    if( useNewCode ){
        const calculator = require('./controllers/calculator');
        app.use('/calculator',calculator);
    }
    else{

        app.use(function(req,res,next){

            console.log('first middleware');

            if( req.url == '/' ){
                res.send('Hello');
                return;
            }

            next();
        });

        app.use(function(req,res,next){

            console.log('second middleware');

            if( req.url == '/second' ){
                res.send('Second Page');
                return;
            }

            next();
        });

        app.use(function(req,res,next){
            res.send('Default Page');
        });
    }

    app.listen(3000);
};