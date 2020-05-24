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
function addE(elem){
    [].push(this,elem);
}
let userInput1 = await askQuestion("Enter the first number: ");
let userInput2 = await askQuestion("Enter the first number: ");
let element={userInput1,userInput2};
books.addE(element);

console.log(books[0].title);
