import {
  reverseString,
  countCharacters,
  capitalizeFirstLetter,
  countCharactersTwo,
} from './stringUtils';
import path from 'path';
import fs from 'fs';

//Part 2: Import and Test your Module
//Write a sentence about why leaning Node.js is important
//Personally, I find Node.js very interesting. Although it uses the same JavaScript, the way it's used on the front-end and back-end is quite different. Node.js can handle a large number of network requests at the same time, making it very useful for both developers and users. It also allows for the development of large-scale applications. So understanding Node.js is important.
const result = reverseString('It`s good weather today');
console.log(result); //yadot rehtaew doog s`tI

const count = countCharacters('hello world');
console.log(count); //11

console.log(capitalizeFirstLetter('yui')); //Yui

//Part 3:Use built-in Modules(fs an path)
fs.writeFileSync('reversed.txt', result);
const filepath: string = path.join(__dirname, 'reversed.txt');
console.log(filepath); //Users/yuijensen/module-week6/reversed.txt
console.log('Files written successfully!!');

//Part 4: Go a step Further
const noSpaceLetter = countCharactersTwo('Hello world');
console.log(noSpaceLetter); //10
