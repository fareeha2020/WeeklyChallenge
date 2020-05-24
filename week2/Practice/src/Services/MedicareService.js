module.exports = class MedicareService {
    constructor(medicareDataReader, licenceDataReader) {
        this.medicareDataReader = medicareDataReader;
        this.licenceDataReader = licenceDataReader;
    }

    getMedicare(id) {
        return this.medicareDataReader.getMedicare(id);
    }

    deleteMedicare(id) {
        let medicare = this.getMedicare(id);
        if (!medicare) {
            console.log("Error: No Matching Medicare Found");
        } else {
            this.medicareDataReader.deleteMedicare(id);
        }
    }

    updateMedicare(medicare) {
        let dataMedicare = this.getMedicare(medicare.id);
        if (!dataMedicare) {
            console.log("Error: No Matching Medicare Found");
        } else if (this.validateMedicare(medicare)) {
            this.medicareDataReader.updateMedicare(medicare);
        } else {
            console.log("Error: Medicare object was invalid");
        }
    }

    addMedicare(medicare) {
        let dataMedicare = this.getMedicare(medicare.id);
        if (dataMedicare) {
            console.log("Error: Medicare Already Found With id: " + medicare.id);
        } else if (this.validateMedicare(medicare)) {
            this.medicareDataReader.addMedicare(medicare);
        } else {
            console.log("Error: Medicare object was invalid");
        }
    }

    searchByName(searchTerm) {
        let medicareData = this.medicareDataReader.getArrayFromFile();
        let matchingNames = [];
        for (let i = 0; i < medicareData.length; i++) {
            const medicare = medicareData[i];
            let medicareFullName = `${medicare.firstName} ${medicare.lastName}`.toLowerCase();
            if(medicareFullName.includes(searchTerm.toLowerCase())) {
                matchingNames.push(medicare);
            }
        }
        return matchingNames;


        // return this.medicareDataReader.getArrayFromFile()
        //     .filter(medicare => `${medicare.firstName} ${medicare.lastName}`.toLowerCase().includes(searchTerm));
    }

    doesLicenceExist(id) {
        let licence = this.licenceDataReader.getLicence(id);
        if (licence) {
            return true;
        } else {
            return false;
        }
    }

    validateMedicare(medicare) {
        if (!this.doesLicenceExist(medicare.licenceId)) {
            console.log("Error: Could not find matching licence for given licenceId")
            return false;
        }
        if (isNaN(medicare.age)) {
            return false;
        }
       
        return true;
    }
}