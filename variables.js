/**
 * Created by benjaminhuang on 7/15/17.
 */
var x;

x = 15;

console.log(x);

var y = 2;

var a = 1,
    b = 2,
    c = 3;

console.log(y);

console.log(a + b + c);

var z = "3";

console.log(typeof(y));

console.log(typeof z);

console.log(typeof (x > y));

console.log(typeof console);

z = "hello";

console.log(x * z);

console.log(typeof (x * z ));

console.log(parseInt(z));

console.log(typeof console.log);

var writeGreeting = function(){
    console.log("Hello");
}

writeGreeting();

var writeGreeting2 = function(x){
    if(x == "") {
        console.log("default");
    }else{
        console.log(x);
    }
}

writeGreeting2(process.argv[2]);