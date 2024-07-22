let secretNum = 0;
let tries = 0;
let randomNumList = [];
let maxNumber = 10;

asignTextElement("h1", "Secret number game!");
asignTextElement("p", "Enter a number between 1 and 10");

function verifyTry() {
  let userNum = parseInt(document.getElementById("userValue").value); //by adding parseInt the variable turns from string to #
  //console.log(userNum); //# entered in the input by the user
  console.log(userNum === secretNum); //is the # entered by the user the same as the random #
  console.log(`Number of tries: ${tries}`);

  if (userNum === secretNum) {
    asignTextElement(
      "p",
      `You got it! You tried ${tries} ${tries === 1 ? "time" : "times"}`
    );
    document.getElementById("reset").removeAttribute("disabled");
  } else {
    // User got it WRONG
    if (userNum > secretNum) {
      asignTextElement("p", "Go lower...");
    } else {
      asignTextElement("p", "Go higher...");
    }
  }
  tries++; //this will keep adding 1 by 1 with each time you try
  cleanInput();
}

function cleanInput() {
  document.querySelector("#userValue").value = "";
}

function asignTextElement(element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
  return; //this doesn't return anything... but it's good to always put it
}

function createSecretNumber() {
  let secretNumGeneraded = Math.floor(Math.random() * 10) + 1; //this will generate a random # between 1 and 10

  console.log(randomNumList);
  //If all the random #s have been created
  if (randomNumList.length == maxNumber) {
    asignTextElement("p", "GAME OVER! All the numbers have been played");
  } else {
    //it will say "true" or "false" with each new number (if it has been added to the randomNumList array)
    if (randomNumList.includes(secretNumGeneraded)) {
      return createSecretNumber();
    } else {
      randomNumList.push(secretNumGeneraded);
      return secretNumGeneraded;
    }
  }
}

function initialStats() {
  asignTextElement("h1", "Secret number game!");
  asignTextElement("p", `Enter a number between 1 and ${maxNumber}`);
  secretNum = createSecretNumber();
  cleanInput();
  tries = 1;
  console.log(secretNum);
}

function resetGame() {
  //clean input box
  //show starting message
  //generate a NEW random number
  //reset the # of tries
  initialStats();
  //disable the 'New Game' button
  document.querySelector("#reset").setAttribute("disabled", "true");
  return;
}

initialStats();
