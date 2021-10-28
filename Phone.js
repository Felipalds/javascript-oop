"use strict";
exports.__esModule = true;
var Phone = /** @class */ (function () {
    function Phone(brand) {
        this.brand = brand;
        this.battery = 100;
        this.isOn = false;
    }
    Phone.prototype.getBrand = function () {
        return this.brand;
    };
    Phone.prototype.setBattery = function (battery) {
        this.battery = battery;
    };
    Phone.prototype.setOn = function (isOn) {
        this.isOn = isOn;
    };
    return Phone;
}());
exports["default"] = Phone;
