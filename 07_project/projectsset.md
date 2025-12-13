# Solution code
## project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'brown') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'red') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```

## Porject 2 Solution

```javascript
const form = document.querySelector('form');

// IF WE DECLARE HEIGHT OUTSIDE EVENT AND IF WE DO SUBMIT EMPTY BOX VALUE IT WILL PASS EMPTY VALUE THAT'S WHY WE DON'T USE IT OUT SIDE OF EVENT

// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const resluts = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    resluts.innerHTML = `Plz Give A Valid Height ${height}`;
  } else if (weight == '' || weight < 0  || isNaN(weight)) {
    resluts.innerHTML = `Plz Give A Valid Height ${weight}`;
  } else if (weight <= 18.6) {
    resluts.innerHTML = `Under Weight BCZ of  Less than 18.6 = ${weight}`;
  } else if (weight <= 18.6 || weight >= 24.9) {
    resluts.innerHTML = `Normal Range BCZ of 18.6 and 24.9 = ${weight}`;
  }else if (weight >= 24.9) {
    resluts.innerHTML = `Overweight BCZ of Greater than 24.9 = ${weight}`;
  }
   else {
    const bmi =  (weight / ((height*height)/10000)).toFixed(2)
    //Show the Results
    resluts.innerHTML = `<span> ${bmi}</span>`
  }


  // resluts.innerHTML = `${height}`
  // resluts.innerHTML = `${weight}`
});

```
## Project 3 Solution
```javascript
// const clock = document.querySelector('clock');
const clock = document.getElementById('clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 Solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```

## Project 5 Solution
```javascript


```