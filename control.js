/**
 * Created by benjaminhuang on 7/15/17.
 */
var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;

}


var roll = getDieRoll(6);

if (roll >= 5){
    console.log("You rolled a great rolll "+ roll);
}else {
    console.log("You rolled a " + roll);
}