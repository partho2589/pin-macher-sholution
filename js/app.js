
function getPin (){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if( pinString.length == 4){
        return pin
    }
    else {
        // console.log(' get 3 disite pin', pin)
        return getPin();
    } 
}

function generatePine() {
    const pin = getPin();
   document.getElementById('display-pin').value = pin
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const calcInput = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    if(isNaN(number)){
        if( number == 'C'){
            calcInput.value = '';
        }
    }
    else{
   
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
     calcInput.value = newNumber;
    }
})