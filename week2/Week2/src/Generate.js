//const DataLayer=require("./DataLayer");
const {MedicareDataReader,LicenceDataReader}=require("./DataLayer");
// const StudentDataReader = require("./DataLayer/StudentDataReader");
// const TeacherDataReader = require("./DataLayer/TeacherDataReader");
const fs = require("fs");
const path = require("path");

const baseFilePath = path.join(__dirname,"../", "JSONData");

if (!fs.existsSync(baseFilePath)) {
    fs.mkdirSync(baseFilePath)//if there is folder inside basefolder dont do any otherwise create one as JSON data
}

let _medicareDataSet = new MedicareDataReader(path.join(baseFilePath, "Medicares.json"));
let _licenceDataSet = new LicenceDataReader(path.join(baseFilePath, "Licences.json"));

_licenceDataSet.generateRandomLicences();//generates Random teachers same as person

let licenceIds = _licenceDataSet.getArrayFromFile().map(licence => licence.id);
_medicareDataSet.generateRandomMedicares(licenceIds);//generates students Id of havind  teacher ids's
