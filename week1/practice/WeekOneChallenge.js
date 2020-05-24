const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){

    let books=[
        {title:"Fairy Tales",
        author:"Peter"},
       {title:"Harry Potter",
        author:"Rowling"},
        {title:"Learn to Code",
        author:"Luke"},
        {title:"Barbie",
        author:"Fareeha"},
        {title:"The Prince",
        author:"David"},
        {title:"Little Bear",
        author:"Andrew"},
        {title:"Frog and Toad",
        author:"Arnold"}
    ];

    function byAuthorName(authorName)
    {
     
     if(books[].author==authorName){
         return "YES-This author book is currently available";
     }else{
         return "SORRY-This author's book is currently available";
     }
    }
    function byTitle(book)
       {
       if(book.title==userInput1){
            return ;;
        } else {
            return "sorry this title book is unavialable";
            
        }

    }
    function getAllAuthors(book){
        return book.author;
    }
    function getAllTitles(book){
        return book.title;
    }
    // Library book console app
    console.log("welcome to Library Book Search App");
    
    while(true)
    {
        //console.log("Select below options to search a book");
        console.log("1.Find a book by Author Name");
        console.log("2.Find a book by Title");
        console.log("4:.exit");

        let userInput = await askQuestion("Select an option from above: ");
        if (userInput=="1") {
            console.log("You have selected to find a book by Author Name");
            // console.log("Please enter any from this author names:");
            // let allAuthors=books.map(getAllAuthors);
            // console.log(allAuthors);
            let authorName=await askQuestion("please enter Author Name:");
         let foundBook=byAuthorName(authorName);
        //  console.log( `The Book Name is ${foundBook.author}`);
        //  console.log( `The Book title is ${foundBook.title}`);
         console.log();

       


            
        } else if(userInput=="2") {
            console.log("You have selected to find a book by Title");
           // console.log("Please enter any from this Title:");
            // let allTitles=books.map(getAllTitles);
            // console.log(allTitles);
             let title=await askQuestion("please enter Title Name:");
           let x= books.find(byTitle);
            console.log(x);
            console.log();

            }
            else if (userInput == "4") {
                break;
            } else {
                // Error: couldn't read input
                console.log("Error: please enter a number 1 - 4");
            }

console.log("thank you for using this service:press 4 to exit")
    }
}
Program().then(() => {
    process.exit(0);
});