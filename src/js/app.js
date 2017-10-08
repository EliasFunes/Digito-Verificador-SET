"use strict"

import dv from "./digitoVerificador.js"
import $ from "jquery"

require("../css/style.css")
require("../../node_modules/bootstrap/dist/css/bootstrap.css")

$(".dv").addClass("container p-3 mb-2 bg-info text-white")
    .append($("<center>")
        .append($("<h2>").text("Generar Digito Verificador"))
        .append($("<div>").addClass("row")             
            .append($("<div>").addClass("col-sm-4 col-md-4 col-lg-4 col-xl-4")
                .append($("<input>").addClass("control-label").attr({"id":"inputRuc","placeholder":"introduzca ruc", "style":"width:100%;"}))
            )
            .append($("<div>").addClass("col-sm-2 col-md-2 col-lg-2 col-xl-2")
                .append("-")
            )
            .append($("<div>").addClass("col-sm-2 col-md-2 col-lg-2 col-xl-2")
                .append($("<input>").attr({"id":"inputDv","disabled":"true", "style":"width:100%;"}))
            )
            .append($("<div>").addClass("col-sm-2 col-md-2 col-lg-2 col-xl-2").append($("<button>").addClass("btn btn-primary").attr({"id":"buttonGenerateDv","type":"button"}).text("Gen")))
        )
    )

$("#buttonGenerateDv").click(() => {
    var ruc = $("#inputRuc").val()
    $("#inputDv").val(dv(ruc))
})