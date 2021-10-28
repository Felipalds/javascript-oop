"use strict";
exports.__esModule = true;
var Caneta = /** @class */ (function () {
    function Caneta() {
        this.tampar();
    }
    Caneta.prototype.rabiscar = function () {
        console.log("Rabiscando");
    };
    Caneta.prototype.setCarga = function () {
        console.log("Recarregando...");
        this.carga = 100;
    };
    Caneta.prototype.tampar = function () {
        console.log("Tampando");
        this.tampada = true;
    };
    Caneta.prototype.getModelo = function () {
        return this.modelo;
    };
    return Caneta;
}());
exports["default"] = Caneta;
