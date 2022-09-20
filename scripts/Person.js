"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Happy_1 = require("./Happy");
var Person = /** @class */ (function () {
    function Person() {
        this.setState(new Happy_1.HappyState());
    }
    Person.prototype.setState = function (state) {
        this.state = state;
        this.state.setPerson(this);
    };
    Person.prototype.hug = function () {
        this.state.hug();
    };
    Person.prototype.talk = function () {
        this.state.talk();
    };
    Person.prototype.hit = function () {
        this.state.hit();
    };
    return Person;
}());
exports.Person = Person;
