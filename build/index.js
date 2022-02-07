"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Caneta_1 = __importDefault(require("./Caneta"));
var Helloworld = /** @class */ (function () {
    function Helloworld() {
        console.log("Hello world");
    }
    return Helloworld;
}());
var canetaAzul = new Caneta_1.default();
canetaAzul.rabiscar();
console.log(canetaAzul);
