
var charge = 15;
let total = 0;

//Function to ask for card or cash
function cardCash() {
    if (document.getElementById('payment1').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';

    } else document.getElementById('ifYes').style.visibility = 'hidden';
    
}


//Function to calculate the tip
window.onload = () =>

        document.querySelector('#calculate').onclick = calculateTip;
        document.getElementById('ct').innerHTML = z;

 
function calculateTip() {
    let amount = 15;
    let tax = 0.07;
    let service = document.querySelector('#services').value;
 
    console.log(service);
    if (service === 'Select') {
        alert("Please enter valid values");
        return;
    }


    let total = ((amount * service) + amount) + amount * tax;
    total = total.toFixed(2);
 
    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}

//Function to display the time the food will be ready by 30 + minutes

function displayTime() {
    var d1 = new Date (),
    d2 = new Date ( d1 );
    d2.setMinutes ( d1.getMinutes() + 30 );
    document.querySelector('#ct').style.display = 'block';
    
    return d2;
}