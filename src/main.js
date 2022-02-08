var math = require('mathjs');

function eraseStr() {
    var i = 0;
    var txt = document.getElementById("calcul").value;
    var newTxt = txt.replace(txt, ' ');
    document.getElementById("calcul").value = newTxt;
}

function fillInput(nb) {
    var txt = document.getElementById("calcul").value;
    txt = txt + nb;
    document.getElementById("calcul").value = txt;
}

function printResult() {
    whole_calc += document.getElementById("calcul").value;
    eraseStr();
    console.log(whole_calc);
    console.log(math.eval(finalResult));
}

function addElement() {
    whole_calc += document.getElementById("calcul").value + '+';
    eraseStr();
    console.log(whole_calc);
    for (var i = 0; whole_calc[i]; i++) {
        if (whole_calc[i] == '+') {
            console.log("DEBUG");
        }
    }
}
var whole_calc = '';
