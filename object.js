/**
 * Created by benjaminhuang on 7/15/17.
 */

var dice = require("./dice");
var die = dice.die;


console.log(die);
console.log(die.size);

die.size = 10;
console.log(die.size);

console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("total number of rolls "+die.totalRolls);
