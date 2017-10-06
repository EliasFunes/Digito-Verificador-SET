"use strict"

require("!style-loader!css-loader!./style.css")
require("!style-loader!css-loader!./node_modules/bootstrap/dist/css/bootstrap.css")
//require("!font-awesome-webpack!./node_modules/font-awesome-webpack/font-awesome.config.js")

var dv = require("./digitoVerificador.js")
var $ = require("jquery")

$("body")
    .append($("<center>")
        .append($("<div>").addClass("container-fluid")
            .append($("<div>").addClass("row").append($("<input>").addClass("control-label").attr({"id":"inputRuc","placeholder":"introduzca ruc"})))
            .append($("<div>").addClass("row").append($("<button>").addClass("btn btn-primary").attr({"id":"buttonGenerateDv","type":"button"}).text("Generar Digito Verificador")))
            .append($("<div>").addClass("row").append($("<input>").attr({"id":"inputDv"})))
        )
    )
    //.append($("<i>").addClass("fa fa-play-circle").attr("aria-hidden","true"))    
    

$("#buttonGenerateDv").click(() => {
    var ruc = $("#inputRuc").val()
    $("#inputDv").val(dv(ruc))
})







