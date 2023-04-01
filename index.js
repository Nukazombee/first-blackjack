

let cards = [];//empty.we want to store numeric values of cards in an array

let sum = 0;//initial launch sets sum of cards to 0

let hasBlackJack = false;//initial launch sets it to false
let isAlive = false;//this var changes when player gets sum 22+ and ...
//...prevents player from asking a new card (player dies)


let message = "";//top line writes things like More cards? or Blackjack!

let messageEl = document.getElementById("message-el");
//namimg long string on the right with the variable mesageEl (faster code)

let sumEl = document.querySelector("#sum-el");
//alternative method. More powerful one. Same for sum-of-cards-string

let cardsEl = document.getElementById("cards-el");
//same for cards- string number 2

let player = {
  name: "Tim",
  chips: 120
}//creating an object to contain two properties (faster code)



let playerEl = document.getElementById("player-el");
//and namimg long string for player info on the right with the var



function getRandomCard() {

  let randomNumber = Math.floor( Math.random()*13) + 1;
  /*The expression Math.floor( Math.random()*13) + 1 generates a random 
  number between 1 and 13 (inclusive) using the following logic:

Math.random() generates a random number between 0 and 1 (not inclusive)
Math.random()*13 generates a random number between 0 and 13 (not inclusive)
Math.floor( Math.random()*13) generates a random number between 0 and 12 
(inclusive)
Math.floor( Math.random()*13) + 1 generates a random number between 1 and 
13 (inclusive).
So the function getRandomCard() will return a number between 1 and 13.

Why 1-13? 1 is for ACE, 2-10 for number cards, 11,12,13 are JQK cards.

  */
  if (randomNumber > 10)//JQK = 10 points
  {
    return 10;
  } else if (randomNumber === 1)//1 = ACE = 11 points
  {
    return 11;
  } else// all other numbers 
  {
    return randomNumber;//returns value to caller
  }

}



function startGame() {//after player pushed button START GAME (onclick)
  
  isAlive = true;//player is 'alive' - didnt get 22+ points yet
  hasBlackJack = false;//player didnt get 21 points yet
  let firstCard= getRandomCard();//straight away genereating... 
  let secondCard= getRandomCard();//...first two cards
  cards = [firstCard, secondCard];
  //adding elements to previously created array 

  sum = firstCard + secondCard;
  //updating var sum
  renderGame();//launching update function 1st time to set displayed info
}

function renderGame() {//this function is called to update vars and text

  

  cardsEl.textContent = "Cards:";//addresses to textContent method ...
    //...of cardsEl element to change its value to Cards:

  for (let i=0; i< cards.length; i++)//loop goes through all items in ...
  {//... cards[] and ADDS their values to cardsEl via textContent method
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;//updates sumEl text to Sum + value

  if (sum <= 20 ){
    message="Do you want another card?";
    //checks sum to update message
  } else if (sum===21) {
    player.chips += 100;//modifies player.chips $
    message="Blackjack!";
    hasBlackJack = true;
    
  } else {
    player.chips -= 50;
    message="FAIL";
    isAlive = false;
    
  }
  playerEl.textContent = player.name + ": $" + player.chips;
  //updates pleyerEl content
  messageEl.textContent = message;//updates message
}

function newCard() {//triggers when NEW CARD button is pushed onclick
  if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard();//addresses to a function above to get a...
    //...number returned
  sum += card;
  cards.push(card);//adds new element to cards[]
  renderGame();//triggers game update to refresh values displayed
  }
  
}



