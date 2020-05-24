module.exports = class LicenceService {
    constructor(medicareDataReader, licenceDataReader) {
        this.medicareDataReader = medicareDataReader;
        this.licenceDataReader = licenceDataReader;
    }

    getLicence(id) {
        return this.licenceDataReader.getLicence(id);
    }

    deleteLicence(id) {
        let licence = this.getLicence(id);
        if (!licence) {
            console.log("Error: No Matching Licence Found");
        } else {
            this.licenceDataReader.deleteLicence(id);
        }
    }

    updateLicence(licence) {
        let dataLicence = this.getLicence(licence.id);
        if (!dataLicence) {
            console.log("Error: No Matching Licence Found");
        } else if (this.validateLicence(licence)) {
            this.licenceDataReader.updateLicence(licence);
        } else {
            console.log("Error: Licence object was invalid");
        }
    }

    addLicence(licence) {
        let dataLicence = this.getLicence(licence.id);
        if (dataLicence) {
            console.log("Error: Licence Already Found With id: " + licence.id);
        } else if (this.validateLicence(licence)) {
            this.licenceDataReader.addLicence(licence);
        } else {
            console.log("Error: Licence object was invalid");
        }
    }

    searchByName(searchTerm) {
        let licenceData = this.licenceDataReader.getArrayFromFile();
        let matchingNames = [];
        for (let i = 0; i < licenceData.length; i++) {
            const licence = licenceData[i];
            let licenceFullName = `${licence.firstName} ${licence.lastName}`.toLowerCase();
            if(licenceFullName.includes(searchTerm.toLowerCase())) {
                matchingNames.push(licence);
            }
        }
        return matchingNames;


        // return this.licenceDataReader.getArrayFromFile()
        //     .filter(licence => `${licence.firstName} ${licence.lastName}`.toLowerCase().includes(searchTerm));
    }

    doesLicenceExist(id) {
        let licence = this.licenceDataReader.getLicence(id);
        if (licence) {
            return true;
        } else {
            return false;
        }
    }

    validateLicence(licence) {
        if (!this.doesLicenceExist(licence.licenceId)) {
            console.log("Error: Could not find matching licence for given licenceId")
            return false;
        }
        if (isNaN(licence.age)) {
            return false;
        }
       
        return true;
    }
}