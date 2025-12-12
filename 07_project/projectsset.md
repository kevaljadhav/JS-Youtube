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