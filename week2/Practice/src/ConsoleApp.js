const readline = require('readline');
//add another import statement here
const path=require("path");
const {MedicareDataReader,LicenceDataReader}=require("./DataLayer");//pulling data from these files ,which is inside this folder
const { MedicareService } = require("./Services");
const {Medicare,Licence}=require("./Models");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    //telling it to run source console app
   const baseFilePath=path.join(__dirname,"../","JSONData");
   const _medicareDataReader=new MedicareDataReader(path.join(baseFilePath,"Medicares.json"));
   const _licenceDataReader=new LicenceDataReader(path.join(baseFilePath,"Licences.json"));
   //console.log(_medicareDataReader.getArrayFromFile());
   //const _licenceDataReader = new LicenceDataReader(path.join(baseFilePath, "Licences.json"));
   const _medicareService = new MedicareService(_medicareDataReader, _licenceDataReader);

   // console.log(_medicareDataReader.getArrayFromFile());
   // console.log(_licenceDataReader.getArrayFromFile());

   let shouldLoop = true;
   while (shouldLoop) {
       console.log("[1] Medicares");
       console.log("[2] Licences");
       console.log("[3] Exit");
       let userInput = await askQuestion("Select an option from above: ");
       switch (userInput) {
           case "1":
               console.log("[1] Add Medicare");
               console.log("[2] Search Medicares");
               console.log("[3] Search For Medicare");
               console.log("[4] Update Medicare");
               console.log("[5] Delete Medicare");
               console.log("[6] Go Back");
               let userInputMedicare = await askQuestion("Select an option from above: ");
               switch (userInputMedicare) {
                   case "1":
                       let medicareFirstName = await askQuestion("Enter Medicare First Name: ");
                       let medicareLastName = await askQuestion("Enter Medicare Last Name: ");
                       let medAge = await askQuestion("Enter Medicare Age: ");
                       let parsedMedicareAge = parseInt(medAge);
                       let licenceId = await askQuestion("Enter Licence's ID: ");
                       let newMedicare = new Medicare(
                           medicareFirstName,
                           medicareLastName,
                           parsedMedicareAge,
                           licenceId
                       );
                       _medicareService.addMedicare(newMedicare);
                       break;
                   case "2":
                       let searchTerm = await askQuestion("Enter search term: ");
                       let matchingMedicares = _medicareService.searchByName(searchTerm);
                       console.log(matchingMedicares);
                       break;
                       case "3":
                       let medId = await askQuestion("Enter medicare ID to search: ");
                      let searchedId= _medicareService.getMedicare(medId);
                       console.log(searchedId);
                       break;
                       case "4":
                        let medUpdFirstName = await askQuestion("Enter Medicare First Name: ");
                        let medUpdLastName = await askQuestion("Enter Medicare Last Name: ");
                        let medUpdAge = await askQuestion("Enter Medicare Age: ");
                        let parsedMedUpdAge = parseInt(medUpdAge);
                        let licId = await askQuestion("Enter Licence's ID: ");
                        let updMedicare = new Medicare(
                            medUpdFirstName,
                            medUpdLastName,
                            parsedMedUpdAge,
                            licId
                        );
                        _medicareService.updateMedicare(updMedicare);
                        //console.log(_studentData.addStudent(student))
                        break;
                        case "5":
                            let medIdToDelete = await askQuestion("Enter medicare ID to delete: ");
                           let deletedId= _medicareService.deleteMedicare(medIdToDelete);
                            console.log(`the medicare deatils of ${medIdToDelete} is deleted`);
                            break;
                   default:
                       console.log("Going back to main menu");
               }
               break;
           case "2":
               break;
           case "3":
               shouldLoop = false;
               break;
           default:
               console.log("Error: Could not read user input. Please enter a number from 1 to 3");
       }
   }
}




Program().then(() => {
    process.exit(0);
});