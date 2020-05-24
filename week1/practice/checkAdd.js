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
    // Your Code Goes Here...
    let books=[
        {title:"Fairy Tales",
        author:"Peter"},
    
    ];
    // function addElement(x,y){
    //     x=books.title;
    //     y=books.author;
    //     let z={x,y};
    //  books.push(z);
    // }
   // console.log(books[1].title);
    let userInput1 = await askQuestion("Enter thetitler: ");
    let userInput2 = await askQuestion("Enter the author: ");
    books.push({author:userInput1,title:userInput2});
    console.log(books);

    // var element={userInput1,userInput2};
    // add(element);
    // function add(element){
    //     cart=[];
    //     let id=books.length-1;
    // cart[id]=element;
    // cart.push(element);
    // }
    
    // userInput1=element.author;
    // userInput=element.title;
    
    //addElement(userInput1,userInput2);
   // let element={userInput1,userInput2};
   // books.push(element);
   // addElement(element);
    
    console.log(books[0].title);
    console.log(books[1].title);
}

Program().then(() => {
    process.exit(0);
});