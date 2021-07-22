const bill = document.querySelector('.input__bill');
const billInput  = bill.value;
console.log(bill)
const peopleInput = document.querySelector('.amount__people').value;
const tipInput = document.querySelector('.input__tip-custom').value;
// buttons
const fivePercent = document.getElementById('five__percent');
const tenPercent = document.getElementById('five__percent');
const fifteenPercent = document.getElementById('five__percent');
const twentyFivePercent = document.getElementById('five__percent');
const fiftyPercent = document.getElementById('five__percent');
const reset = document.querySelector('.amount__calculation-reset');

bill.addEventListener('change', function (e) {
  // billInput = bill.value;
  // console.log(billInput);
  console.log(e.target.value)
  document.querySelector('.amount__calculation-total-total').textContent = "$" + e.target.value;
})