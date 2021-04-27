
module.exports = {
    checkEvenOrOdd : function(num,type){

        if( type!='odd' && type!='even' ) throw new Error('invalid type : '+type);

        return type == 'odd' ? num % 2 != 0 : num % 2 == 0;
    },

    isArmstrong : function(num){

        let theNum = num;

        let count = this.getNumOfDigits(num);

        let value = 0;

        for( let i = 0; i < count ; i++ ){

            digit = num % 10;

            value += Math.pow(digit,count) ;

            num = Math.trunc(num / 10);

            console.log(theNum , value,num);
            
        }

        return theNum == value;
    },

    getNumOfDigits:function(num){

        num = Math.abs(num);

        let count = 1;

        while( num > 9 ){
            count++;
            num = Math.trunc(num / 10);
        }

        return count;
    },
};