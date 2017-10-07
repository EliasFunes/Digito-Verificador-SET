"use strict"

require("../css/style.css")
require("../../node_modules/bootstrap/dist/css/bootstrap.css")

import dv from "./digitoVerificador.js"
import $ from "jquery"

$(".dv")
    .append($("<center>")
        .append($("<div>").addClass("container-fluid")
            .append($("<div>").addClass("row").append($("<input>").addClass("control-label").attr({"id":"inputRuc","placeholder":"introduzca ruc"})))
            .append($("<div>").addClass("row").append($("<button>").addClass("btn btn-primary").attr({"id":"buttonGenerateDv","type":"button"}).text("Generar Digito Verificador")))
            .append($("<div>").addClass("row").append($("<input>").attr({"id":"inputDv"})))
        )
    ) 
    
$("#buttonGenerateDv").click(() => {
    var ruc = $("#inputRuc").val()
    $("#inputDv").val(dv(ruc))
})