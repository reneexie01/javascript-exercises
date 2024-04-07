const findTheOldest = function(array) {
    array.map((person) => {
        let age;
        if (person.yearOfDeath === undefined) {
            let currentYear = (new Date()).getFullYear();
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        person.age = age;
    })
    array.sort((a, b) => {
        if (a.age - b.age > 0) {
            return -1
        } else if (a.age - b.age < 0) {
            return 1
        } else {
            return 0;
        }
    })
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
