/**
 *  @description Variables declaration block
*/
const moveCounts = document.querySelector('.moves');
const stars = document.querySelectorAll('.star');
let cards = [...document.getElementsByClassName('card')];
let counter = 0;
let isFlipped = false;
let lockCard = false;
let firstCard; //holds the first card
let secondCard; //holds the second card
let allMatchCards; //hold the total of all the match cards

/**
 * @function flipCard
 * @description flip the card upon mouse click
 * @this card
 */
function flipCard() {
  if (lockCard) return;
  if (this === firstCard) return;
  //start timer on first click
  if (time.textContent === '00:00:00') {
    timer();
  }

  this.classList.add('flip');

  if (!isFlipped) {
    //first click;
    isFlipped = true;
    firstCard = this;
    return;
  }

  //second click
  secondCard = this;
  lockCard = true;

  //check for match
  doesItMatch();
}

/**
 * @function doesItMatch
 * @description evaluates the cards for match
 */
function doesItMatch() {
  let isMatch = (firstCard.dataset.card === secondCard.dataset.card);
  isMatch ? match() : notMatch();

  //increment counter by one
  counter++
  moveCounts.textContent = counter;

  //remove one stars from the back at every 4 moves.
  removeStar();
}

/**
 * @function match
 * @description evaluates when cards match
 */
function match() {
  //add match to card's classList
  firstCard.classList.add('match');
  secondCard.classList.add('match');
  //remove card listening event
  firstCard.removeEventListener('click', flipCard, false);
  secondCard.removeEventListener('click', flipCard, false);

  //update the number of mach cards
  allMatchCards += 2;
  if (allMatchCards === 16) {
    clearTimeout(updateTime);
    showModal();
  }

  //reset cards variables
  resetVariables();
}

/**
 * @function notMatch
 * @description run when cards do not match
 */
function notMatch() {
  //add not-match to cards' classList
  firstCard.classList.add('not-match');
  secondCard.classList.add('not-match');

  setTimeout(() => {
    //remove the class;
    firstCard.classList.remove('flip', 'not-match');
    secondCard.classList.remove('flip', 'not-match');

    //reset variables
    resetVariables();
  }, 550);
}

/**
 * @function resetVariables
 * @description resets isFlipped, lockCard, firstCard and secondCard variables
 */
function resetVariables() {
  [isFlipped, lockCard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

/**
 * @description declare variables that are used for the timer function
 */
const time = document.getElementById('time');
let updateTime; //holds setTimeout function for the timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

/**
 * @function set_time
 * @description set the timer count for the game
 */
function set_time() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  time.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  timer();
}

/**
 * @function timer
 * @description update the timer every second
 */
function timer() {
  updateTime = setTimeout(set_time, 1000);
}


/**
 * @function shuffleCard
 * @description this shuffles the cards for the memory game
 * @param {array} shuffled - represents the cards to be shuffled
 */
let shuffleCard = (shuffled) => {
  let tempVal;
  let shuffleIndex;

  for (let presentIndex = shuffled.length; presentIndex != 0; presentIndex) {
    shuffleIndex = Math.floor(Math.random() * presentIndex);
    presentIndex--
    tempVal = shuffled[presentIndex];
    shuffled[presentIndex] = shuffled[shuffleIndex];
    shuffled[shuffleIndex] = tempVal;
  }

  return shuffled;
}

/**
 * @function resetGame
 * @description this is for resetting the game
 */
const resetGame = () => {
  //shuffle the array of cards
  cards = shuffleCard(cards);

  //update the html page with the shuffled cards
  cardWrapper.innerHTML = "";
  for (card of cards) {
    cardWrapper.appendChild(card);
    card.classList.remove('flip', 'match', 'not-match');
  }

  //clear timer
  clearTimeout(updateTime);
  time.textContent = `00:00:00`;

  //empty cards lists
  resetVariables();
  [allMatchCards, seconds, minutes, hours] = [0, 0, 0, 0];

  //refill all the star ratings
  for (star of stars) {
    if (star.classList !== 'checked') {
      star.classList.add('checked');
    }
  }

  //rest counter
  [moveCounts.textContent, counter] = [0, 0];
}


// reset game
const reset = document.querySelector('.reset');
const cardWrapper = document.getElementById('card-wrapper');
/**
 * @description executes the reset function upon page load or reset button click
 */
reset.addEventListener('click', resetGame, false);
document.addEventListener('DOMContentLoaded', resetGame, false);

/**
 * @function removeStar
 * @description reduce the star rating by one at every 5 moves
 */
function removeStar() {
  [star1, star2, star3, star4, star5] = [...stars]
  if (counter === 5) {
    star5.classList.remove('checked');
  } else if (counter === (5 * 2)) {
    star4.classList.remove('checked');
  } else if (counter === (5 * 3)) {
    star3.classList.remove('checked');
  } else if (counter === (5 * 4)) {
    star2.classList.remove('checked');
  } else if (counter === (5 * 5)) {
    if (star1.classList !== 'checked') {
      star1.classList.add('checked');
    }
  }
}

//adding keyboard shortcuts
//ESC = reset game
document.addEventListener('keydown', shortcuts, false);

/**
 * @function shortcuts
 * @description resets the game when a user presses the ESC key
 * @param {event} evt - targets the whole document for a keydown event
 */
function shortcuts(evt) {
  if (evt.key === 'Escape') {
    resetGame();
  }
}

/**
 * @description declare variables that holds the elements for the modal
 */
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const playBtn = document.getElementsByClassName('modal-play-btn')[0];
const docBtn = document.getElementsByClassName('modal-doc-btn')[0];
const starWrapper = document.getElementById('starWrapper');
const totalTime = document.getElementById('totalTime');
const totalMoves = document.getElementById('totalMoves');
const remainingStars = document.getElementById('remainingStars');

/**
 * @function showModal
 * @description displays the modal window
 */
function showModal() {
  if (modal.classList.contains('modal-hide')) {
    modal.classList.remove('modal-hide');
  }

  //update the modal summary section with the star rating, time count, and the moves info at the end of the game
  totalTime.textContent = `  ${time.textContent}`;
  totalMoves.innerHTML = `${moveCounts.innerHTML} moves(s)`;
  remainingStars.innerHTML = starWrapper.innerHTML;
}

/**
 * @description hides the modal window when the close button is clicked
 */
closeBtn.addEventListener('click', () => {
  if (modal.classList != 'modal-hide') {
    modal.classList.add('modal-hide');
    reload();
  }
}, false);

/**
 * @description hide modal when the modal body is clicked
 */
modal.addEventListener('click', (evt) => {
  if (evt.target === modal) {
    modal.classList.add('modal-hide');
    reload();
  }
}, false);

/**
 * @description set the docBtn to fire at a click event
 */
docBtn.addEventListener('click', documentation, false);

/**
 * @function documentation
 * @description redirect the browser to my github repository
 */
function documentation() {
    const repository = `https://github.com/Theshedman/memory-card-game`
    windows.location.assign(repository);
}

/**
 * @description set the playBtn to fire at a click event
 */
playBtn.addEventListener('click', backToGame, false);

/**
 * @function backToGame
 * @description return back to the game by hiding the modal and resetting the previous game
 */
function backToGame() {
    resetGame();
    modal.classList.add('modal-hide');
    reload();
}

/**
 * @function reload
 * @description refresh page
 */
function reload() {
  document.location.reload(true);
}

/**
 * @description set up the card click event
 */
cards.forEach(card => card.addEventListener('click', flipCard, false));