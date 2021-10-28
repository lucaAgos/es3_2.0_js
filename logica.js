
var n1;
var stringa;
var string2;
var risultato;




$("#btn1").click(function () {
    if($("#numero").val()!=null){
         n1 = parseInt($("#numero").val());
         stringa = " <td>" + n1 + "</td> ";
         n2 = parseInt($("#numero2").val());
         string2 = " <td>" + n2 + "</td> ";
        $("#contenitore").append(stringa);
         risultato= n1+n2;
        $("#contenitore").append(" <td>" +"+"+ "</td> ");
        $("#contenitore").append(string2);
        $("#contenitore").append(" <td>" + risultato + "</td> ");
        $("#contenitore").append(" <tr>" + "</tr> ");
    }
});

$("#btn2").click(function () {
    if($("#numero").val()!=null){
         n1 = parseInt($("#numero").val());
         stringa = " <td>" + n1 + "</td> ";
         n2 = parseInt($("#numero2").val());
         string2 = " <td>" + n2 + "</td> ";
        $("#contenitore").append(stringa);
        var risultato= n1-n2;
        $("#contenitore").append(" <td>" +"-"+ "</td> ");
        $("#contenitore").append(string2);
        $("#contenitore").append(" <td>" + risultato + "</td> ");
        $("#contenitore").append(" <tr>" + "</tr> ");
    }
});


$("#btn3").click(function () {
    if($("#numero").val()!=null){
         n1 = parseInt($("#numero").val());
         stringa = " <td>" + n1 + "</td> ";
         n2 = parseInt($("#numero2").val());
         string2 = " <td>" + n2 + "</td> ";
        $("#contenitore").append(stringa);
        var risultato= n1*n2;
        $("#contenitore").append(" <td>" +"*"+ "</td> ");
        $("#contenitore").append(string2);
        $("#contenitore").append(" <td>" + risultato + "</td> ");
        $("#contenitore").append(" <tr>" + "</tr> ");
    }
});

$("#btn4").click(function () {
    if($("#numero").val()!=null){
         n1 = parseInt($("#numero").val());
         stringa = " <td>" + n1 + "</td> ";
         n2 = parseInt($("#numero2").val());
         string2 = " <td>" + n2 + "</td> ";
        $("#contenitore").append(stringa);
         risultato= n1/n2;
        $("#contenitore").append(" <td>" +"/"+ "</td> ");
        $("#contenitore").append(string2);
        $("#contenitore").append(" <td>" + risultato + "</td> ");
        $("#contenitore").append(" <tr>" + "</tr> ");
    }
});