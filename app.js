var events=require('events');

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
