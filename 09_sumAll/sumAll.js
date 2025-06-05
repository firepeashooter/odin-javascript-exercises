const sumAll = function(num1, num2) {

    lower = 0;
    higher = 0;
    result = 0;

    //Error Handling (negative ints/anything that isn't a number)

    if (num1 < 0 || num2 < 0){
        return "ERROR";
    } 

    if ((!Number.isInteger(num1)) || (!Number.isInteger(num2))){
        return "ERROR";
    }

    //Find out which number is the smaller one
    if (Math.min(num1, num2) == num1){
        lower = num1;
        higher = num2;
    } else{
        lower = num2;
        higher = num1;
    }


    for (let i = lower; i <= higher; i++){
        result += i;
    }

    return result;


};

// Do not edit below this line
module.exports = sumAll;
