"use strict";
exports.__esModule = true;
exports.HappyState = void 0;
var Sad_1 = require("./Sad");
var HappyState = /** @class */ (function () {
    function HappyState() {
    }
    HappyState.prototype.hug = function () {
        console.log("Awwww, thank you! :D");
    };
    HappyState.prototype.talk = function () {
        console.log("Hello! How are you?");
    };
    HappyState.prototype.hit = function () {
        console.log("Ouch!");
        this.person.setState(new Sad_1.SadState());
    };
    HappyState.prototype.setPerson = function (person) {
        this.person = person;
    };
    return HappyState;
}());
exports.HappyState = HappyState;
