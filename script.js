const radioBtns = document.querySelectorAll('.tip');
const numAmount = document.querySelector('.num-amount');
const numTotal = document.querySelector('.num-total');
let billInput = document.getElementById('bill-input');
let numPeople = document.getElementById('num-people');
const tipCustom = document.getElementById('tip-custom');
const reset = document.querySelector('.btn-reset');


radioBtns.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        const percentage = ((Number(billInput.value) * Number((btn.value)/ 100)) / Number(numPeople.value)).toFixed(2)
        const percentTimes = Number(numPeople.value).toFixed(2);

        numAmount.textContent = percentage;
        numTotal.textContent = (percentage * percentTimes).toFixed(2);  
    })
})



reset.addEventListener('click', function(){
    numAmount.textContent = '0.00'
    numTotal.textContent = '0.00'
    tipCustom.value = '0'
    numPeople.value = '0'
    billInput.value = '0'
})