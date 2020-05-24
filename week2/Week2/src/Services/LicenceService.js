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
        } else{
            this.licenceDataReader.updateLicence(licence);
        } 
        
    }

    addLicence(licence) {
        let dataLicence = this.getLicence(licence.id);
        if (dataLicence) {
            console.log("Error: Licence Already Found With id: " + licence.id);
        } else {
            this.licenceDataReader.addLicence(licence);
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


    }

    

   
}