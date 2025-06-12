const palindromes = function (input) {

    //Makes the input lowercase
    input = input.toLowerCase();    

    backwardsString = "";
    formattedString = "";

    //Format the input to get rid of any punctuation

    for (let i = 0; i < input.length; i++){
        if ("abcdefghijklmnopqrstuvwxyz123456789".includes(input[i])){
            formattedString += input[i];
        }
    }

    console.log(formattedString);

    //loop through the string backwards and add it to a new string

    for (let i = formattedString.length - 1; i >= 0; i --){
        backwardsString += formattedString[i];
    }

    console.log(backwardsString);

    //return the comparison of the two strings

    return formattedString == backwardsString;

};

// Do not edit below this line
module.exports = palindromes;
