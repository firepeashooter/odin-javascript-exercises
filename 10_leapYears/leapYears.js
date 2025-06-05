const leapYears = function(year) {
    //if it's divisible by 400 return true

    if (year % 400 == 0){
        return true;
    }

    //if its divisible by 100 (and not 400 in this case) return false
    if (year % 100 == 0){
        return false;
    }
    //if it's divisibly by 4 (and not 100) return true
    if (year % 4 == 0){
        return true;
    }


    return false;

};

// Do not edit below this line
module.exports = leapYears;
