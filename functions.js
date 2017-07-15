/**
 * Created by benjaminhuang on 7/15/17.
 */
//Simulate of Rolling Two Dices//

var rollDice = function () {
    return Math.ceil(6 * Math.random());
}


for(i =0; i< 10; i++) {
    console.log("");
    var firstDice = rollDice();
    var secondDice = rollDice();
    console.log(firstDice);
    console.log(secondDice);
    console.log(firstDice + secondDice);
}