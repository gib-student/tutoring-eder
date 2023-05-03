// Function declaration
function add(number1, number2){
    let sum = number1 + number2;
    return sum;
}

// Get addend1 and addend2 and sum them together
function addNumbers () {
    // Grab the <p> element with an ID of 'addend1'
    let addend1 = document.getElementById('addend1');
    // Pull the value out of the element
    let number1 = addend1.textContent;

    // Grab the <p> element with an ID of 'addend2'
    let addend2 = document.getElementById('addend2');
    // Pull the value out of the element
    let number2 = addend2.textContent;

    // Calculate the sum by calling the 'add()' function and store the result
    // in 'sum'
    let sum = add(number1,number2);

    // Grab the <p> element with an id of 'sum'
    let sumElement = document.getElementById('sum');
    // Change the 'textContent' property of the element to the sum
    sumElement.textContent = sum;
}