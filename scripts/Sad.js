"use strict";
exports.__esModule = true;
exports.SadState = void 0;
var SadState = /** @class */ (function () {
    function SadState() {
    }
    SadState.prototype.hug = function () {
        console.log("Thanks... I needed that...");
    };
    SadState.prototype.talk = function () {
        console.log("Hello...");
    };
    SadState.prototype.hit = function () {
        console.log("What is your problem?");
    };
    SadState.prototype.setPerson = function (person) {
        this.person = person;
    };
    return SadState;
}());
exports.SadState = SadState;
