const findTheOldest = function(people) {

    const date = new Date();
    const currentYear = date.getFullYear();


    function getAge(person){
        if(person.yearOfDeath === undefined){
            return currentYear - person.yearOfBirth;
            
        }
        return person.yearOfDeath - person.yearOfBirth;
    }
    
    return people.reduce((oldest, person) => {
        const oldestAge = getAge(oldest);
        const personAge = getAge(person);
        return personAge > oldestAge ? person : oldest;
    });

};

// Do not edit below this line
module.exports = findTheOldest;

