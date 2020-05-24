const Medicare = require("../Models/Medicare");
const fs = require("fs");

module.exports = class MedicareDataReader {
    constructor(fileName) {
        this.fileName = fileName;
    }

    getArrayFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(medicareRaw => new Medicare(
            medicareRaw.firstName,
            medicareRaw.lastName,
            medicareRaw.age,
            medicareRaw.teacherId,
            medicareRaw.id
        ));
    }

    writeArrayToFile(arrayValue) {
        fs.writeFileSync(this.fileName, JSON.stringify(arrayValue));
    }

    getMedicare(id) {
        return this.getArrayFromFile().find(m => m.id == id);
    }

    updateMedicare(medicare) {
        this.writeArrayToFile(this.getArrayFromFile().map(m => {
            if (m.id == medicare.id) {
                return medicare;
            } else {
                return m;
            }
        }));
    }

    deleteMedicare(id) {
        this.writeArrayToFile(this.getArrayFromFile().filter(m => m.id != id));
    }

    addMedicare(medicare) {
        this.writeArrayToFile(this.getArrayFromFile().concat([medicare]));
    }

    // WARNING: THIS WILL OVERRIDE ANY DATA CURRENTLY IN THE "Medicares.json" FILE
    generateRandomMedicares(licenceIds) {
        this.writeArrayToFile(Medicare.generateRandomPeople(5, licenceIds));
    }
}
