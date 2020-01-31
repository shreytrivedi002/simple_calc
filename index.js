// document.write("hello")

// prompt("enter text")
function add() {
    var num1 = prompt('enter number one');
    var num2 = prompt('enter number two');
    var num3 = parseInt(num1) + parseInt(num2);
    document.write(num3)
        // document.write("first number is : ", num1);
        // document.write("second number is :", num2);
        // document.getElementsByClassName("result").innerHTML(num3);
        // return (num3)

}
// ......................................................................

function sub() {
    var num1 = prompt('enter number one');
    var num2 = prompt('enter number two');
    var num3 = parseInt(num1) - parseInt(num2);
    document.write(num3)
}

function mul() {
    var num1 = prompt('enter number one');
    var num2 = prompt('enter number two');
    var num3 = parseInt(num1) * parseInt(num2);
    document.write(num3)
}

function div() {
    var num1 = prompt('enter number one');
    var num2 = prompt('enter number two');
    var num3 = parseInt(num1) / parseInt(num2);
    document.write(num3)
}

function power() {
    var num1 = prompt('enter number one');
    var num2 = prompt('enter number two');
    var num3 = Math.pow(parseInt(num1), parseInt(num2));
    document.write(num3)
}

function sqroot() {
    var num1 = prompt('enter number one');

    var num3 = Math.sqrt(parseInt(num1));
    document.write(num3)
}