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
