/* MODO ESCURO */

function mudartema() {

    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "night" ? "day" : "night";
  
}