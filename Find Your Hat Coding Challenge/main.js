const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(inputArray) {
    this.field = inputArray;
  }

  printField() {
    for(let i = 0; i < this.field.length;i++)
      console.log(this.field[i]);
  }

  updateField(direction){
    if(direction = 'u'){
      this.field[0][0] = 8  ;
      console.log('You went upwards!');
    }
    
  }

  generateField(){}

}

const myField = new Field([
['*', '░', 'O'],
['░', 'O', '░'],
['░', '^', '░'],
]);

function promptUser(){
  
  myField.printField();

  // Get user input
  let direction = prompt('Enter a direction!');

  // Check if user input is out of bounds or against an obstacle.
  let validDirection = true; //checkBounds(direction);

  if (validDirection = true) {
    myField.updateField(direction);
    console.log('\n');
    myField.printField();
  } else {
    console.log('Sorry, that direction is invalid!');
  }
}

promptUser();

function playGame(){

  console.log('Welcome to the "Find Your Hat" Game!'+ '\n');
  console.log('Move your character by typing either: "u" for up, "d" for down, "l" for left, or "r" for right' + '\n');

  //When gameState is true, the game is on. When gameState is false, the game is over.
  let gameState = true; 
  while(gameState == true){
    promptUser();
  }
}