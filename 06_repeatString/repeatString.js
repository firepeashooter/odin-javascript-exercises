const repeatString = function(string, num) {
    if (num < 0) return "ERROR";

    repeatedString = "";

    for (let i = 0; i < num; i++){
        repeatedString += string;
    }


    return repeatedString;
};

const string = "hey";
const num = 3;

console.log(repeatString(string, num));

// Do not edit below this line
module.exports = repeatString;
