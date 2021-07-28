// Input field
const bill = document.querySelector('.input__bill');
const billInput = bill.value;
const people = document.querySelector('.amount__people');
const peopleInput = people.value
const customTip = document.querySelector('.input__tip-custom');
const customTipInput = customTip.value

// Buttons
const fivePercent = document.getElementById('five__percent');
const tenPercent = document.getElementById('ten__percent');
const fifteenPercent = document.getElementById('fifteen__percent');
const twentyFivePercent = document.getElementById('twenty-five__percent');
const fiftyPercent = document.getElementById('fifty__percent');
const reset = document.querySelector('.amount__calculation-reset');


// Get bill value and display into total amount
bill.addEventListener('change', function (e) {
  // e is the event, target is the element that triggered the event which was trigger by the input,
  // and the value is the value of the input element
  let totalCalc = document.querySelector('.amount__calculation-total-total').textContent = '$' + e.target.value;
  console.log(billInput);
});

// Calculate custom tip and display it
customTip.addEventListener('change', function (e) {
  let tipCalc = document.querySelector('.amount__calculation-tip-total').textContent = '$' + e.target.value * document.querySelector('.amount__calculation-total-total').textContent.substring(1) / 100;
  console.log(tipCalc);
});

// Tip % buttons
fivePercent.addEventListener('click', function () {
  const bill = document.querySelector('.input__bill');
  const billInput = bill.value;
  let tipFivePercent = document.querySelector('.amount__calculation-tip-total').textContent= '$' + parseInt(billInput) * .05;
  console.log(tipFivePercent);
});

tenPercent.addEventListener('click', function () {
  const bill = document.querySelector('.input__bill');
  const billInput = bill.value;
  let tipTenPercent = document.querySelector('.amount__calculation-tip-total').textContent= '$' + parseInt(billInput) * .1;
  console.log(tipTenPercent);
});

fifteenPercent.addEventListener('click', function () {
  const bill = document.querySelector('.input__bill');
  const billInput = bill.value;
  let tipFifteenPercent = document.querySelector('.amount__calculation-tip-total').textContent= '$' + parseInt(billInput) * .15;
  console.log(tipFifteenPercent);
});

twentyFivePercent.addEventListener('click', function () {
  const bill = document.querySelector('.input__bill');
  const billInput = bill.value;
  let tipTwentyFivePercent = document.querySelector('.amount__calculation-tip-total').textContent= '$' + parseInt(billInput) * .25;
  console.log(tipTwentyFivePercent);

});

fiftyPercent.addEventListener('click', function () {
  const bill = document.querySelector('.input__bill');
  const billInput = bill.value;
  let tipFiftyPercent = document.querySelector('.amount__calculation-tip-total').textContent= '$' + parseInt(billInput) * .5;
  console.log(tipFiftyPercent);
});

 // Divide bill/tip evenly by the number of people
people.addEventListener('change', function (e) {
  let divideBill = document.querySelector('.amount__calculation-total-total').textContent = '$' + document.querySelector('.amount__calculation-total-total').textContent.substring(1) / e.target.value;
  let divideTip = document.querySelector('.amount__calculation-tip-total').textContent = '$' + document.querySelector('.amount__calculation-tip-total').textContent.substring(1) / e.target.value;
  let roundDivideBill = document.querySelector('.amount__calculation-total-total').textContent = '$' + Math.round(100 * divideBill.substring(1)) / 100;
  let roundDivideTip = document.querySelector('.amount__calculation-tip-total').textContent = '$' + Math.round(100 * divideTip.substring(1)) / 100;
});

// Change background color when bill input field contains numbers
bill.addEventListener('input', event => {
  reset.style.backgroundColor = event.target.value.trim() ?  'hsl(185, 41%, 84%)' : 'hsl(186, 14%, 43%)';
})



// Reset the calculator 




