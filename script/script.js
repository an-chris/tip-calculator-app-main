// Input field
const bill = document.querySelector('.input__bill');
const billInput = bill.value;
const people = document.querySelector('.amount__people');
const peopleInput = people.value
const tip = document.querySelector('.input__tip-custom');
const tipInput = tip.value
// Buttons
const fivePercent = document.getElementById('five__percent');
const tenPercent = document.getElementById('five__percent');
const fifteenPercent = document.getElementById('five__percent');
const twentyFivePercent = document.getElementById('five__percent');
const fiftyPercent = document.getElementById('five__percent');
const reset = document.querySelector('.amount__calculation-reset');

// Get bill value and display into total amount
bill.addEventListener('change', function (e) {
  // e is the event, target is the element that triggered the event which was trigger by the input,
  // and the value is the value of the input element
  console.log(e.target.value);
  let totalCalc = document.querySelector('.amount__calculation-total-total').textContent = '$' + e.target.value;
  console.log(e);
});

// Calculate custom tip and display it
tip.addEventListener('change', function (e) {
  let tipCalc = document.querySelector('.amount__calculation-tip-total').textContent = '$' + e.target.value * document.querySelector('.amount__calculation-total-total').textContent.substring(1) / 100;
  console.log(tipCalc);
});


 // Divide bill/tip evenly by the number of people
people.addEventListener('change', function (e) {
  let divideBill = document.querySelector('.amount__calculation-total-total').textContent = '$' + document.querySelector('.amount__calculation-total-total').textContent.substring(1) / e.target.value;
  let divideTip = document.querySelector('.amount__calculation-tip-total').textContent = '$' + document.querySelector('.amount__calculation-tip-total').textContent.substring(1) / e.target.value;
  // console.log(divideBill, divideTip);
  // console.log(typeof(divideBill), typeof(divideTip));
  let roundDivideBill = document.querySelector('.amount__calculation-total-total').textContent = '$' + Math.round(100 * divideBill.substring(1)) / 100;
  let roundDivideTip = document.querySelector('.amount__calculation-tip-total').textContent = '$' + Math.round(100 * divideTip.substring(1)) / 100;
  console.log(Math.round(100 * divideBill.substring(1)) / 100);
  
})
