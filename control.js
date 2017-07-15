/**
 * Created by benjaminhuang on 7/15/17.
 */
var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;

}


var roll = getDieRoll(6);

while(roll < 4){
    roll = getDieRoll(6);
}

do {

    if (roll >= 5) {
        console.log("You rolled a great rolll " + roll);
    } else {
        console.log("You rolled a " + roll);
    }

    roll = getDieRoll(6);

}while( roll < 3)

var sum = 0;
var count = 0;
for( var i =0; i < 10; i ++){
    roll = getDieRoll(6);
    sum += roll;
    count = i;
}

console.log("Your average roll: "+sum/count);

//array
var things =[1,2,3,4,7,9, "pizza"];

for(var i=0; i < things.length; i++){
    console.log(things[i]);
}

for(var i = 0; i < process.argv.length; i++){
    console.log(process.argv[i]);
}