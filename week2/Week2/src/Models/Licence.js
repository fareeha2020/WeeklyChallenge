const Customer = require("./Customer");
const uuid = require("uuid");

class Licence extends Customer {
    constructor(firstName, lastName, age, id = uuid.v4()) {
        super(firstName, lastName, age, id);
    }

    static generateRandomPeople(num) {
        // let people =  super.generateRandomPeople(num);
        // let teachers = []
        // for (let i = 0; i < people.length; i++) {
        //     const person = people[i];
        //     teachers.push(new Teacher(
        //         person.firstName,
        //         person.lastName,
        //         person.age,
        //         person.id
        //     ));
        // }

        return super.generateRandomPeople(num).map(person => new Licence(
            person.firstName,
            person.lastName,
            person.age,
            person.id
        ));
    }

    getMyMedicares(medicares) {
        return medicares.filter(medicare => medicare.licenceId == this.id);
    }
}

module.exports = Licence;
