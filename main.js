"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringUtils_1 = require("./stringUtils");
var path_1 = require("path");
var fs_1 = require("fs");
//Part 2: Import and Test your Module
//Write a sentence about why leaning Node.js is important
//Personally, I find Node.js very interesting. Although it uses the same JavaScript, the way it's used on the front-end and back-end is quite different. Node.js can handle a large number of network requests at the same time, making it very useful for both developers and users. It also allows for the development of large-scale applications. So understanding Node.js is important.
var result = (0, stringUtils_1.reverseString)('It`s good weather today');
console.log(result); //yadot rehtaew doog s`tI
var count = (0, stringUtils_1.countCharacters)('hello world');
console.log(count); //11
console.log((0, stringUtils_1.capitalizeFirstLetter)('yui')); //Yui
//Part 3:Use built-in Modules(fs an path)
fs_1.default.writeFileSync('reversed.txt', result);
var filepath = path_1.default.join(__dirname, 'reversed.txt');
console.log(filepath); //Users/yuijensen/module-week6/reversed.txt
console.log('Files written successfully!!');
//Part 4: Go a step Further
var noSpaceLetter = (0, stringUtils_1.countCharactersTwo)('Hello world');
console.log(noSpaceLetter); //10
