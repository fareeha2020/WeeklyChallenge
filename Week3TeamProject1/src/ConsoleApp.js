const mainMenu=require("../src/UILayer/MainMenu");
async function Program() {
    // Your Code Here...

    await mainMenu();
   
}
Program().then(() => {
    process.exit(0);
});
