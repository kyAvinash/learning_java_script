// This is my first and complete java script tutorial.
console.log('Hello World!')


let name="Avinsh";
console.log(name);

// rules of Variables- they cannot be reserved keywords.
// They should be meaningful.
// They cannot start with number (1name)
// They cnnot be a space or hyphen(-)
// They are case sensitive.

let firstName;  // this is camel notation. Its recommended to use it.
let FirstName;

// There are two ways to declear the variable in JS.

let firstName1="Aviansh", lastName="yadav";


// That is the modern way and best practice now a days.
let firstName2="Avinash";
let lastName2="Yadav";

console.log("name "+name);
console.log("first name "+firstName1);
console.log("last name "+lastName);
console.log("first name2 "+firstName2);
console.log("last name2 "+lastName2);



/* 
Now we will learn about constants in this only.
*/ 

let interestRate=0.3;
interestRate=1;
console.log("Interest Rate "+interestRate);


/* value of constant can't be change. 
so if we don't want that value will change than define variable as const.
*/

const interestRate1=0.9;

// error occured: index.js:48  Uncaught TypeError: Assignment to constant variable. at index.js:48:14
//interestRate1=0.1;
console.log("value of constant int rate "+interestRate1);



//Primitive Types or Value Types.  leter we learned about Reference Type.

// String
// Number
// Boolean
// undefined
// null

let myName="Avinash";  // String Literal.
let age=30; // Number Literal.
let isApproved=true; // Boolean Literal.
let FstName=undefined; // if we not decleard any thing than that value of undefined.
let selectedColor=null; 


// Dynamic Type.
/*  There are two type of programming language. first is
-> Static (Statically-typed)

In static language when we declear the variable like that

int ab=10; so here type of ab is int we can't change the type of ab int to string.
String name="Avinash";

here we can't change type of variable once set.

-> Dynamic (Dynamically-typed) 

In dynamic oriented language like JavaScript, type of variable
can be change at run time.
*/

/*
let let myName="Avinash";  // String Literal.
let age=30; // Number Literal.
let isApproved=true; // Boolean Literal.
let FstName=undefined; // if we not decleard any thing than that value of undefined.
let selectedColor=null; 
*/
console.log("Its Avinash name type: "+typeof myName);
console.log("Its age type: "+typeof age);
console.log("Its boolean type: "+typeof isApproved);
console.log("Its undefined: "+typeof FstName);
console.log("Its null type: "+typeof selectedColor);


console.log("changing the different type of value.");

myName=null;  // String Literal.
age=undefined; // Number Literal.
isApproved="Avinash"; // Boolean Literal.
FstName=28.8; // if we not decleard any thing than that value of undefined.
selectedColor=1000; 


console.log("After changing the value to variables check type of variables")


console.log("Its Avinash name type: "+typeof myName);
console.log("Its age type: "+typeof age);
console.log("Its boolean type: "+typeof isApproved);
console.log("Its undefined: "+typeof FstName);
console.log("Its null type: "+typeof selectedColor);


// In Reference Types 
// -> Object

/* 
A object is any programming language is object like in real life.
think of a persion, a persion have name, age, address, and so on...

when we are dealing with multiple relative variables, than we can put that variabless inside the object.
For Example: 
let name="avinash";
let age=30;

*/

// { } is curly braces known as object literals.


let person={
name:"Avinash",
age:30
};

console.log(person);
// two ways to change value or acces class elements.
// 1-> . Dot notation

person.name="Avinash yadav";
console.log(person);

// 2-> [] Bracket Notation.
person["name"]="Kumar";
console.log(person);



// -> Array  is object in javaScript
let selectedColors=["red","white"];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);

selectedColors[2]="green";

console.log(selectedColors);

selectedColors[3]=100;

console.log(selectedColors);

console.log(selectedColors.length);




// -> Function:  is a set of statments, perform a task with calculate a value.
// this function is Performing task: when we pass first name and last name as paremiter. 
// than function recive that argument and print  Hello than first name and than last name.
function greet(name,lastName){
    console.log("Hello "+ name +" "+lastName);
}

greet("Avinash","Yadav");
greet("Marry","Joy");
greet("Rohan","Nanu");
greet("Jai","Ram");

function square(number){
    return number*number;
}

let number=square(10);
console.log("Square of the number ",number);


number=square(12);
console.log("Square of the number ",number);