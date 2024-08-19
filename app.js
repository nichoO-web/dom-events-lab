/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number') || event.target.classList.contains('operator')) {
    // Do something with a number
    display.innerText = display.innerText += event.target.innerText;
  }

  if (event.target.innerText === 'C') {
    // Do something with this operator
    display.innerText = '';
  }

  if (event.target.innerText === '=') {
    // Do something with this operator
    const answer = eval(display.innerText);
    display.innerText = answer;
  }

  if (display.innerText === '') {
    
  }
});
/*-------------------------------- Functions --------------------------------*/

 