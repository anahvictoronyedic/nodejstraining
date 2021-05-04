
const express = require('express');

const app = express.Router();

const functions = require('../../calculator/utils/functions.js');

app.get('/compute/:operation',function(req,res){
    let {num} = req.query;
    const operation = req.params.operation;
    
    console.log(num);

    num = parseInt(num);

    if( isNaN(num) ){
        return res.status(400).send({
            code:'invalid-number',
            msg:null,
            result:null,
        });
    }

    let passed = false;

    if( operation == 'check-even'  ){
        passed = functions.checkEvenOrOdd(num,'even');
    }
    else if( operation == 'check-odd' ){
        passed = functions.checkEvenOrOdd(num,'odd');
    }
    else if( operation == 'check-armstrong' ){
        passed = functions.isArmstrong(num);
    }
    else{
        res.status(404).send({
            code:'not-found',
            msg:'Operation not found',
            result:null,
        });
        return ;
    }

    return res.send({
        code:'success',
        msg:null,
        result:{
            passed,
        },
    });
});

module.exports= app;