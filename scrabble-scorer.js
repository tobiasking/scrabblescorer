// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let playerInput = "";

function initialPrompt() {
   playerInput = input.question("Let's play some scrabble!\nPlease enter your word: ")
};
function simpleScore(answer){
 answer = answer.toUpperCase();
 arraySimple = answer.split('');
 simpleWord = arraySimple.length
  return simpleWord;
}


function vowelBonusScore(answer){
  answer = answer.toUpperCase();
  vowelArray = answer.split('');
  vowelScore = 0
    for(let i=0; i<vowelArray.length ; i++){
      if (vowelArray[i] === 'A' || vowelArray[i] === 'E' || vowelArray[i] === 'I' || vowelArray[i] === 'O' || vowelArray[i] === 'U'){
        vowelScore+=3
      } else {
        vowelScore +=1
      }
    }
  return vowelScore;
};

  


function scrabbleScore(answer){
  answer = answer.toLowerCase()
  letterPoints = 0
  for(let i = 0; i<answer.length; i++){
    letterPoints += newPointStructure[answer[i]]
  }
  return letterPoints
};

let simpleObject = {
  scoring: 'Simple Score',
  text: 'Each letter gets you 1 point.',
  scoreFunction: simpleScore
};

let vowelObject = {
  scoring: 'Bonus Vowels',
  text: '3x points for vowels!',
  scoreFunction: vowelBonusScore
};

let scrabbleObject = {
  scoring: 'Scrabble',
  text: 'Scrabble scoring as you know and love it.',
  scoreFunction: scrabbleScore
}

const scoringAlgorithms = [simpleObject, vowelObject, scrabbleObject]

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n\n");
  for(let i = 0; i<scoringAlgorithms.length; i++){
    console.log(`${i} – ${scoringAlgorithms[i].scoring}: ${scoringAlgorithms[i].text}`)
  }
  scorerPromptReturn = input.question("Enter 0, 1, or 2: ");
  scorerPromptReturn = Number(scorerPromptReturn)
  console.log (`Score for '${playerInput}': ${scoringAlgorithms[scorerPromptReturn].scoreFunction(playerInput)}`)
}

function transform(pointStructure) {
  let newPointStruct = {};
  for (key in pointStructure) {
    for (let i = 0; i < pointStructure[key].length; i++){
      let letterItem = pointStructure[key][i];
      letterItem = letterItem.toLowerCase();
      newPointStruct[letterItem] = Number(key);
    };
  };
  return newPointStruct;
};

let newPointStructure = transform(oldPointStructure);


function runProgram() {
   initialPrompt();
   scorerPrompt();
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

