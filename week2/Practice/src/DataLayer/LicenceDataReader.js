const Licence = require("../Models/Licence");
const fs = require("fs");

module.exports = class LicenceDataReader {
    constructor(fileName) {
        this.fileName = fileName;
    }

    getArrayFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(licenceRaw => new Licence(
            licenceRaw.firstName,
            licenceRaw.lastName,
            licenceRaw.age,
            licenceRaw.id
        ));
    }

    writeArrayToFile(arrayValue) {
        fs.writeFileSync(this.fileName, JSON.stringify(arrayValue));
    }

    getLicence(id) {
        return this.getArrayFromFile().find(m => m.id == id);
    }

    updateLicence(licence) {
        this.writeArrayToFile(this.getArrayFromFile().map(m => {
            if (m.id == licence.id) {
                return licence;
            } else {
                return m;
            }
        }));
    }

    deleteLicence(id) {
        this.writeArrayToFile(this.getArrayFromFile().filter(m => m.id != id));
    }

    addLicence(licence) {
        this.writeArrayToFile(this.getArrayFromFile().concat([licence]));
    }

    // WARNING: THIS WILL OVERRIDE ANY DATA CURRENTLY IN THE "Licences.json" FILE
    generateRandomLicences() {
        this.writeArrayToFile(Licence.generateRandomPeople(5));
    }
}
