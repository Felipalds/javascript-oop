"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Caneta = /** @class */ (function () {
    function Caneta() {
        this.modelo = "Fina";
        this.cor = "Azul";
    }
    Caneta.prototype.rabiscar = function () {
        console.log("Rabiscando");
    };
    return Caneta;
}());
exports.default = Caneta;
