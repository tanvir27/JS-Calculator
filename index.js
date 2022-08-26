function clr(){
    document.getElementById("result").value = result.innerText = " ";
}

function del(){
    result.value = result.value.slice(0, -1);
}

function display(value){
    document.getElementById("result").value+= value;
}

function calculation(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}