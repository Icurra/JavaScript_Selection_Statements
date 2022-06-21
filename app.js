console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let rand = 7;
let userInput = window.prompt("Guess a number between 1 and 100");
if (userInput < rand) {
  console.log("Too low!");
} else if (userInput > rand) {
  console.log("Too high!");
} else {
  console.log("Congrats! You guessed the correct Number!");
}
// Exercise 2
let userInput2 = window.prompt("What is your favorite movie genre?");

switch (userInput2) {
  case "SciFi":
    console.log("A Trip to the Moon was the first SciFi film in 1902.");
    break;
  case "Mystery":
    console.log(
      "Chocolate syrup was used to simulate blood on corpses in earlier films."
    );
    break;
  case "Romance":
    console.log(
      "Audrey Hepburn has been credited with 34 acting roles during her carreer."
    );
    break;
  case "Drama":
    console.log(
      "The longest continuous dramatic performance was called 'The Bald Soprano'. It lasted 23 hours, 33 minutes and 54 seconds!"
    );
    break;
  case "Comedy":
    console.log(
      "Coming to America was the first film in which Eddie Murphy set up his schtick of playing multiple characters."
    );
    break;
  default:
    console.log("Just watch Treasure Planet and thank me later.");
}
