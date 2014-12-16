var StretchDancer = function(top, left, timeBetweenSteps){
  SwingDancer.call(this,top,left,timeBetweenSteps);
  this.stretch = Math.floor(Math.random()*100);
  this.sizing = 'grow';
  this.initSize = 0;
};

StretchDancer.prototype = Object.create(SwingDancer.prototype);
StretchDancer.prototype.constructor = StretchDancer;
StretchDancer.prototype.step = function(){
 SwingDancer.prototype.step.call(this);

 if(this.sizing === 'grow'){
 	this.initSize++;
 	this.$node.css({height: '+=1px',width: '+=1px'});
 	if(this.initSize > this.stretch){
 		this.sizing = 'shrink';
 	}
 } else if(this.sizing === 'shrink'){
 	this.initSize--;
 	this.$node.css({height: '-=1px',width: '-=1px'});
 	if(this.initSize < -this.stretch){
 		this.sizing = 'grow';
 	}
 }
}