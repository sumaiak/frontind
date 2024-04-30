document.getElementById('buttons').addEventListener('click', function(event) {
    const display = document.getElementById('display');
    const buttonText = event.target.innerText;

    if (buttonText !== '=' && buttonText !== 'C') { 
        display.innerText += buttonText;
    }
});

document.getElementById('calculate').addEventListener('click', function(event) {
    event.stopPropagation(); 
    const display = document.getElementById('display');
    const expression = display.innerText;

    display.innerText = eval(expression);
});

document.getElementById('reset').addEventListener('click', function() {
    const display = document.getElementById('display');
    display.innerText = ''; 
});