const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!!

const color1 = getInput(1);
const color2 = getInput(2);

if(color2 !== undefined){
    if(isValidPrimary(color1.toLowerCase()) && 
        isValidPrimary(color2.toLowerCase()) &&
        color1 !== color2){
        console.log(colorCombinator(color1, color2))
        }else {
            console.log('Colors must be two different valid primary colors')
        }  
}else if(color1 !== undefined){
    if(isValidSecondary(color1.toLowerCase())){
        console.log(colorDeconstructor(color1))
    }else{
        console.log('color must be a valid secondary color')
    }
}else{
    console.log('Command must include valid color/s')
}