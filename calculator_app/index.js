let container = document.getElementById("container");
let display = document.getElementById("result");

let buttonArr = Array.from(document.querySelectorAll("button"));
let operationArr = [];

buttonArr.forEach((el) => {
  if (el.classList.value.includes("oper")) {
    operationArr.push(el.innerText);
  }
});
buttonArr.forEach((el) => {
    el.addEventListener("click", (event) => {
        let nodeId = event.target.id
        let char = event.target.innerText

        if(display.innerText.includes('Infinity')){ //-Infinity
            onClear()
        }
        switch(nodeId){
            case "buttoncl":
                onClear();
                break;
            case "equal":
                onEqual();
                break;
            case 'del':
                onDelete();
                break;
            case 'C':
                onClear();
                break;
            default:
                let current_display = display.innerText;
                if (!(current_display === "" && operationArr.includes(char) && char !== "-")) { //let's put - at the start, otherwise does nothing
                    if (operationArr.includes(current_display[current_display.length - 1]) && operationArr.includes(char)) { //replases operation at the end
                        if(current_display !== "-"){ //does not let us change the start operation from - to another one
                            display.innerText = current_display.substring(0, display.innerText.length - 1) + char;
                        }
                    } else {
                        display.innerText += char;
                    }
                }
        }
 
    });
});


function onClear(){
    display.innerText = "";
}

function onEqual(){
    if (display.innerText !=='' && display.innerText !=='-') {
        if (operationArr.includes(display.innerText[display.innerText.length - 1])) { //deletes the last operation
            onDelete(display.innerText)
        }
        display.innerText = eval(display.innerText);
    }
}
function onDelete(){
    display.innerText = display.innerText.substring(0,display.innerText.length - 1);
}
