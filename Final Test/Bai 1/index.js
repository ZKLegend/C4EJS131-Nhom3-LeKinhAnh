let result = [];

function checkPrime(number) {
    for (n = 2; n < number; n++) {
        if (number % n === 0) {
            return false;
        }
    }
    return true;
}

function createArray() {
    let a = document.getElementsByClassName('numberA')[0].value;
    let b =document.getElementsByClassName('numberB')[0].value;
    if (a > b) {
        return false;
    }
    for (i = a; i < b; i++) {
            let test = checkPrime(i);
            if (test) {
                result.push(i);
            }
}
console.log(result);
}

function displayResult() {
    for  (i = 0; i < result.length; i++) {
        let p = document.createElement("p");
        p.innerText = result[i];
        document.body.appendChild(p);
    }
}

let button = document.querySelector('.button');
button.addEventListener('click', displayResult);



