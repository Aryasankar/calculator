
// display
function display(num) {
    output.value +=num;
}

// clear =C

function clearAll() {
   output.value='' 
}

function removeLast() {
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}

function evaluateExp() {
    output.value=eval(output.value)
}

