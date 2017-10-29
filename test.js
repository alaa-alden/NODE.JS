//....1....console.log("welcome with app");

/*...4....
setTimeout(function () {
 console.log("welcome");
},3000);

var time=0;
var timer=setInterval(function () {
  time+=2;
  console.log(time+ " each 2 second call it");
  if (time>6){
    clearInterval(timer);
  }
},2000);
console.log(__dirname);
*/
/* .........5...............
var sayBye =function(){
  console.log("Bye");
};
var callFun=function(){
  sayBye();
};
callFun();
*/

/*.........6....... if the file
var counter = function(arr){
  return "there are "+arr.length +" elements in the array";
};
module.exports=counter;
// in the onther way :
var counter=require('./app');
//call();
var array =['one',"two",'three','four'];
console.log(counter(array));
*/
 /*...........7................
 //in app
 var stuff =require('./stuff');
 console.log(stuff.counter([1,2,3,45,6]));
// in stuff
/* .... use one and two
var counter=function(arr){
  return `there is ${arr.length} elements in array`;
};
var adder=function (a,b) {
  return `the sum A abd B is ${a+b}`;
}
var ip =3.14;
*/
/*....1
module.exports.ip=ip;
module.exports.counter=counter;
module.exports.adder=adder;
*/
/*.........3
module.exports={
'counter':counter
,
'ip':ip
,
'adder':adder
};

//........3
module.exports.counter=function(arr){
  return `there is ${arr.length} elements in array`;
};
................*/



//////////////////the eight part
/*var events=require('events');

var myEmitter=new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});
myEmitter.emit('someEvent','its working');

var util= require('util');

var person=function(name){
  this.name=name;
};
util.inherits(person,events.EventEmitter);

var alaa=new person('alaa');
var nene=new person ('nene');
var meme=new person('meme');
var people=[alaa,meme ,nene];
people.forEach(function(person1){
            person1.on('speak',function (mssg) {
              console.log(person1.name + ' said : ' +mssg);
            });
});
alaa.emit('speak','hi , Im alaa');
*/


//// 9
/* synchronous
var fs = require('fs');
var readme= fs.readFileSync('readme.txt','utf8');
console.log(readme);
fs.writeFileSync('write.txt',readme);
*/
/* asynchronous
var fs=require('fs');
var readme=fs.readFile("readme.txt",'utf8',function (err,data) {
  console.log(err);
  fs.writeFile("test.txt",data);

});
console.log("I run fast");
*/
