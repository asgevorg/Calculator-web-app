str = "1+2+(3*1)"
function evaluate(str){
    filtered = str[0].replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e));
    console.log(filtered);
}
evaluate(str)