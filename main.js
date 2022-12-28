//**************** *Exercise 1 : Evaluation***********
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Evaluate the comparisons found below:

// Look at this link for help

    5 >= 1
    //prediction: True, 5 est plus grand que 1
    //actual
    0 === 1
    //prediction: false
    //actual: false
    4 <= 1
    //prediction: false
    //actual: false
    1 != 1
       //prediction: True
    //actual: True
    "A" > "B"
    //prediction: false
    //actual: false
    "B" < "C"
        //prediction: True
    //actual: True
    "a" > "A"
    //prediction: True
    //actual: True
    "b" < "A"
    //prediction: false
    //actual: false
    true === false
    //prediction: false
    //actual: false
    
    true != true
    //prediction: false
    //actual: false


//**************** *Exercise 2 : Ask For Numbers***********

// Ask the user for a string of numbers separated by commas
let valeur = prompt("entre un nombre decimal");
parseInt(valeur)
// Hint: use some string methods
let nombre =valeur.split(',');
// Console.log the sum of the numbers.
console.log(Number(nombre[0])+Number(nombre[1]));




//**************** */ Exercise 3 : Find Nemo***********
// Instructions
// Hint: if statement (tomorrow’s lesson)
    
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
let myString =prompt("entrez Nemo une phrase comportant Nemo l'expression  ");
let minus=myString.toLowerCase()
console.log(minus)
 if (minus.includes("nemo")) {    // Find the word “Nemo”
  let value = minus.split(' ');
  console.log(value)
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
  console.log( "j'ai trouver nemo a la position "+value.indexOf("nemo"));
// If you can’t find Nemo, console.log “I can’t find Nemo”.
} else { console.log("je n'est pas trouver l'expresssion Nemo");}




// **************Exercise 4 : Boom************
// Instructions
// Hint: if statement (tomorrow’s lesson)
// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:
let nombres = prompt("entrez un numero");
parseInt(value)
let mot = "bm"
// If the number given is less than 2 : return “bom”
if (nombres<2) {
    console.log(nombres+" est plus petit que 2, boom")
} else  if(value>2){
    let tab_mot= mot.split("")
    for (let i=0; i < nombres; i++)
    {
        tab_mot.splice(1,null,'o')
    }
    tab_mot=tab_mot.join("")
    if (nombres %2 ==0 && nombres %5 ==0  ) {
        console.log(tab_mot.toUpperCase()+" !")
    } else if (value %2 ==0){
        console.log(tab_mot+" !")
        
    }else if (nombres %5 ==0){
        console.log(tab_mot.toUpperCase())
        
    }
}