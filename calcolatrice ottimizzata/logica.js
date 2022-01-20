//localStorage.setItem("tabella", "dd");
//console.log(localStorage.getItem("tabella"));
//$("#contenitore").append(localStorage.getItem("tabella"));
localStorage.clear();
tabeleArray = [];
$("#btn1").click(function () {
    calcolo("+");
});
$("#btn2").click(function () {
    calcolo("-");
});
$("#btn3").click(function () {
    calcolo("*");
});
$("#btn4").click(function () {
    calcolo("/");
});
var calcolo = function (segno) {
    var input1 = $("#numero");
    var input2 = $("#numero2");
    var n1 = parseInt(input1.val());
    var n2 = parseInt(input2.val());
    switch (segno) {
        case "+":
            var risultato = n1 + n2;
            break;
        case "-":
            var risultato = n1 - n2;
            break;
        case "*":
            var risultato = n1 * n2;
            break;
        case "/":
            var risultato = n1 / n2;
            break;
    };
    if (input1.val() && input2.val()) {
        var string =
            "<tr><td>" +
            n1 +
            "</td>" +
            "<td style=text-align:center>" +
            segno +
            "</td>" +
            "<td>" +
            n2 +
            "</td>" +
            "<td>" +
            risultato +
            "</td></tr>";
        tableArray.push(string);
        console.log(tableArray);
       
        var table = localStorage.getItem("tabella");
        //localStorage.clear();
        localStorage.setItem("tabella", JSON.parse(tableArray));
        $("#contenitore").append(string);
        input1.val("");
        input2.val("");
    }
}
