var flag = 0;
function addthis(t) {
    if (flag === 0) {
        document.getElementById("show").value += t.innerText;
    } else {
        document.getElementById("show").value = t.innerText;
        flag = 0
    }
}
function calculate() {
    flag = 1;
    document.getElementById("show").value =  eval(document.getElementById("show").value);
    var f = document.createElement("li");
    f.innerText = document.getElementById("show").value;
    document.getElementsByTagName("ul")[0].appendChild(f);
}
function cleardata() {
    document.getElementById("show").value = "";
}
function backspace() {
    document.getElementById("show").value = document.getElementById("show").value.slice(0,-1);
}