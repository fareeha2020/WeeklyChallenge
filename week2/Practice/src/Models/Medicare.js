const Person = require("./Person");
const random = require("../Common/Random");
const uuid = require("uuid");

class Medicare extends Customer {
    constructor(firstName, lastName, age,licenceId, id = uuid.v4()) {
        super(firstName, lastName, age, id);
        this.licenceId = licenceId;
        
    }

    getLicence(licences) {
        return licences.find(licence => licence.id == this.licenceId);
    }

    static generateRandomPeople(num, validIds) {
        return super.generateRandomPeople(num).map(person => new Medicare(
            person.firstName,
            person.lastName,
            person.age,
            this.generateRandomGrades(),
            validIds[random.getRandomNumber(validIds.length)],
            person.id
        ));
    }

   
    }


module.exports = Medicare;