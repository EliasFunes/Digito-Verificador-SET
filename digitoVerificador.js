"use strict"
// =============================================================================
// CALCULO DE DIGITO VERIFICADOR SEGUN SET en JS
// =============================================================================
module.exports = function generarRucDigitoVerificador(p_numero) {
    return (p_numero, p_basemax = 11) => {
        p_numero = String(p_numero);
        p_basemax = Number(p_basemax);
        var v_total = 0;
        var v_resto = 0;
        var k = 0;
        var v_numero_aux = 0;
        var v_digit = 0;
        var v_numero_al = "";
        for (var i = 0; i < p_numero.length; i++) {
            var c = Number(p_numero.charAt(i));       
            v_numero_al += c.toString();
        } 
        k = 2;
        v_total = 0;
        for (var i = v_numero_al.length - 1; i >= 0; i --) {
            if(k > p_basemax){k = 2};
            v_numero_aux = Number(v_numero_al.charAt(i));
            v_total += (v_numero_aux * k);
            k = k + 1;    
        }
        v_resto = v_total % 11;  
        if(v_resto > 1){v_digit  = 11 - v_resto} else { v_digit = 0};
        return v_digit;
    }    
}
