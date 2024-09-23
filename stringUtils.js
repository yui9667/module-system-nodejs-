"use strict";
//Part 1: Create Your Own Custom Module:
Object.defineProperty(exports, "__esModule", { value: true });
exports.countCharactersTwo = exports.capitalizeFirstLetter = exports.countCharacters = exports.reverseString = void 0;
var reverseString = function (str) {
    return str.split('').reverse().join('');
};
exports.reverseString = reverseString;
var countCharacters = function (str) { return str.length; };
exports.countCharacters = countCharacters;
var capitalizeFirstLetter = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
//Part 4: Go a step Further
var countCharactersTwo = function (str) {
    var charactersSpace = str.split('');
    var filteredCharacter = charactersSpace.filter(function (item) { return item !== ' '; }).length;
    return filteredCharacter;
};
exports.countCharactersTwo = countCharactersTwo;
