let display = document.getElementById('result');

let buttons = Array.from(document.getElementsByClassName('btn'));
let btns = [1,2,3,4,5,6,7,8,9,"+"];
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerHTML = '';
                break;
            case '=':
                if(display.innerHTML != ""){
                    try{
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = "Error"
                    }
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                if(display.innerHTML == "" && (e.target.innerHTML == "+" || e.target.innerHTML == "-"|| e.target.innerHTML == "/"|| e.target.innerHTML == "*" || e.target.innerHTML == ".")){
                    display.innerHTML = ""
                }
                else if((display.innerHTML.slice(-1) ==  "."|| display.innerHTML.slice(-1) == "+"|| display.innerHTML.slice(-1) == "-"|| display.innerHTML.slice(-1) == "/"|| display.innerHTML.slice(-1) == "*") && (e.target.innerHTML == "+" || e.target.innerHTML == "-"|| e.target.innerHTML == "/"|| e.target.innerHTML == "*" || e.target.innerHTML == ".")){

                }
                else{
                    display.innerText += e.target.innerText;
                }
        }
    });
});

document.addEventListener('keydown', (event) => {
    if(event.key === "C") display.innerHTML = "";
    else if(event.key === "Enter") display.innerText = eval(display.innerText);
    else if(event.key === "Backspace") display.innerHTML = display.innerHTML.slice(0,-1);
    else if(event.key == "=") {
        try{
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = "Error"
        }
    }
    if(event.key in btns || event.key == "+" || event.key == "-"|| event.key == "/"|| event.key == "*"){
        display.innerText += event.key;
    }
})