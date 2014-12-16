var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
 Dancer.prototype.step.call(this);
 var r = Math.floor(Math.random()*256);
 var g = Math.floor(Math.random()*256);
 var b = Math.floor(Math.random()*256);
 this.color = 'rgb('+r+','+g+','+b+')';
}