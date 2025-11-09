const findTheOldest = function (persons) {
    let oldestIndex;
    let oldestAge = 0;
    persons.forEach((person, index) => {
        let age;
        if (person.yearOfDeath == undefined) {
            age = new Date().getFullYear() - person.yearOfBirth;
        } else { age = person.yearOfDeath - person.yearOfBirth };

        if (age > oldestAge) {
            oldestAge = age;
            oldestIndex = index;
        }
    });
    return persons[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
