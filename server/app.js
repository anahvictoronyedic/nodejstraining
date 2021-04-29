module.exports = function(){

    const http = require('http');

    const functions = require('../calculator/utils/functions.js');

    const server = http.createServer(function(req,res){

        if( req.url.startsWith('/calculator') ){

            const parts = req.url.split('/').filter((part)=>{
                return !!part;
            });
            
            // if action and number is passed
            if(parts.length > 2){

                const [,action,number] = parts;

                let passed = false;

                switch(action){

                    case 'is-armstrong':
                        passed = functions.isArmstrong(number);
                        break;

                    case 'is-odd':
                        passed = functions.checkEvenOrOdd(number,'odd');
                        break;

                    case 'is-even':
                        passed = functions.checkEvenOrOdd(number,'even');
                        break;

                    default:
                        break;
                }

                res.write(passed?'Yes':'No');
            }
            else{
                res.write('Please enter a valid URL');
            }
        }
        else if( req.url == '/' ){
            res.write('Home Page');
        }
        else if( req.url == '/products' ){
            res.write('Shoe. Bag. Cloth');
        }
        else{
            res.write('Welcome');
        }
        
        res.end();
    });

    server.on('connection',function(req,res){
        console.log('A new connection just came in...');
    });

    server.on('listening',()=>{
        console.log('Server is listening...');
    });

    server.listen(3000);
};