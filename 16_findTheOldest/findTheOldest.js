const findTheOldest = function(people) {

    let oldestPerson;
    let highestAge = 0;

  
    //Iterate through all the people

    for (let i = 0; i < people.length; i++){


        //If they have a death date calculate their age
        if (people[i].yearOfDeath){

            //Compare thier age with the highest age and if its higher update the oldest person
            let currAge = people[i].yearOfDeath - people[i].yearOfBirth;

            if (currAge > highestAge){
                highestAge = currAge;
                oldestPerson = people[i];
            }
        }else{

            //else use JS date function to calculate their age
            let currAge = 2025 - people[i].yearOfBirth;
                //Compare thier age with the highest age and if its higher update the oldest person
            if (currAge > highestAge){
                highestAge = currAge;
                oldestPerson = people[i];
            }
        }
    
    }

    return oldestPerson;


};

// Do not edit below this line
module.exports = findTheOldest;
