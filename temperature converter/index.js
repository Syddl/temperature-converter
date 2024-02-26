const submit_Btn = document.getElementById("submitBtn");
const fahRen = document.getElementById("fahTemp");
const celC = document.getElementById("celTemp");
const display = document.getElementById("displayEl");
const userIn = document.getElementById("userInput");


function renderTemp(){

    let userINT = userIn.value;

    if(fahRen.checked){
        let fahren = userINT * 1.8 + 32;
        display.textContent = `${fahren}°C`;

    }else if (celC.checked){
        let celsius = (userINT - 32) / 1.8;

        display.textContent = `${celsius}°F`;
    }
}
