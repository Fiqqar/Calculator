const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempresult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearall = document.querySelector(".all-clear");
const clearlast = document.querySelector(".last-entity-clear");
let dis1 = "";
let dis2 = "";
let result = null;
let lastoperation = "";
let havedot = false;
numbers.forEach((number) =>{
    number.addEventListener("click", (e) =>{
        if(e.target.innerText === "."&& !havedot) {
            havedot = true;
        }
        else if(e.target.innerText === "."&& havedot) {
            return;
        }
        dis2 += "" + e.target.innerText;
        display2.innerText = dis2;
    });
});

operations.forEach((operation) =>{
    operation.addEventListener("click", (e) =>{
        if(!dis2) { return; }
        havedot = false;
        const operationname = e.target.innerText;
        if(dis1 && dis2 && lastoperation) {
            mathoperations();
        }
        else {
            result = parseFloat(dis2);
        }
        clearvar(operationname);
        lastoperation = operationname;
        console.log(result);
    });
});
function mathoperations(){
    if(lastoperation === "X") {
        result = result * parseFloat(dis2);
    }
    else if(lastoperation === "/") {
        result = result / parseFloat(dis2);
        if(result % parseFloat(dis2)>0) { 
            havedot = true;
        }
    }
    else if(lastoperation === "+") {
        result = result + parseFloat(dis2);
    }
    else if(lastoperation === "-") {
        result = result - parseFloat(dis2);
    }
    else if(lastoperation === "%") {
        result = result % parseFloat(dis2);
    }
}
function clearvar(name = "") {
    dis1 += dis2 + "" + name + "";
    display1.innerText = dis1;
    display2.innerText = "";
    dis2 = "";
    tempresult.innerText = result;
}

equal.addEventListener("click", (e) =>{
    if(!dis1 || !dis2 ) {
        return;
    }
    havedots = false;
    mathoperations();
    clearvar();
    display2.innerText = result;
    tempresult.innerText = "";
    dis2 = result;
    dis1 = "";
});
clearlast.addEventListener("click", (e) => {
    display2.innerText = "";
    dis2 = "";
});

clearall.addEventListener("click", (e) => {
    display1.innerText = "";
    display2.innerText = "";
    dis1 = "";
    dis2 = "";
    tempresult.innerText = "";
    result = "";
    lastoperation = "";
    havedot = false;
});