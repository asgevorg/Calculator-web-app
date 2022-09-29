//filter keyboard inputs

let display = document.getElementById('result');

//innerHTML and innerText read, div changing, eval !  

let buttons = document.querySelector(".buttons");
let btns = [1,2,3,4,5,6,7,8,9];
let symb = ["+", "-", "*", "/", "."];

function digit(number, operator = null){
    if(operator == null) return number;
    return operator(number);
}

function zero(operator = null) {
    return digit(0,operator)
}
function one(operator = null) {
    return digit(1,operator)
}
function two(operator = null) {
    return digit(2,operator)
}
function three(operator = null) {
    return digit(3,operator)
}
function four(operator = null) {
    return digit(4,operator)
}
function five(operator = null) {
    return digit(5,operator)
}
function six(operator = null) {
    return digit(6,operator)
}
function seven(operator = null) {
    return digit(7,operator)
}
function nine(operator = null) {
    return digit(9,operator)
}

function add(sec_operator){
    return (first_operator) => sec_operator + first_operator
}
function sub(sec_operator){
    return (first_operator) =>  first_operator - sec_operator
}
function mul(sec_operator){
    return (first_operator) =>  first_operator * sec_operator
}
function div(sec_operator){
    return (first_operator) =>  {
        if(sec_operator) return first_operator / sec_operator
        else return "Undefined"
    }
}

//map change to foreach
//change to functions

buttons.addEventListener('click', e => {
    switch(e.target.innerText){
        case 'C':
            display.innerText = '';
            break;
        case '=':
            if(display.innerText != ""){
                try{
                    text_display(eval(display.innerText));
                } catch {
                    text_display("Error")
                }
            }
            break;
        case '←':
            if (display.innerText){
               text_display(display.innerText.slice(0, -1));
            }
            break;
        default:
            //definitive guide book, == and ===, change line 30 to function
            if(display.innerText == "" && (e.target.innerText in symb)){
                console.log("mm")
                display.innerText = ""
            }
            else if((display.innerText.slice(-1) ==  "."|| display.innerHTML.slice(-1) == "+"|| display.innerHTML.slice(-1) == "-"|| display.innerHTML.slice(-1) == "/"|| display.innerHTML.slice(-1) == "*") && (e.target.innerHTML == "+" || e.target.innerHTML == "-"|| e.target.innerHTML == "/"|| e.target.innerHTML == "*" || e.target.innerHTML == ".")){

            }
            else{
                display.innerText += e.target.innerText;
            }
    }
})
function text_display(txt){
    display.innerText = txt
}
// document.addEventListener('keydown', (event) => {
//     if(event.key === "C") display.innerHTML = "";
//     else if(event.key === "Enter") display.innerText = eval(display.innerText);
//     else if(event.key === "Backspace") display.innerHTML = display.innerHTML.slice(0,-1);
//     else if(event.key == "="){
//         try{
//             display.innerText = eval(display.innerText);
//         } catch {
//             display.innerText = "Error"
//         }
//     }
//     if(event.key in btns || event.key == "+" || event.key == "-"|| event.key == "/"|| event.key == "*"){
//         display.innerText += event.key;
//     }
// })