var RunnyDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this,top,left,timeBetweenSteps);
  this.dx = Math.random()*5;
  this.dy = Math.random()*5;
};

RunnyDancer.prototype = Object.create(BlinkyDancer.prototype);
RunnyDancer.prototype.constructor = RunnyDancer;
RunnyDancer.prototype.step = function(){
 BlinkyDancer.prototype.step.call(this);
 this.$node.css({left: '+='+this.dx+'px'})
 this.$node.css({top: '+='+this.dy+'px'});

 //console.log(this.$node.css('left').replace('px',''))
 var x = -(-this.$node.css('left').replace('px',''))
 var y = -(-this.$node.css('top').replace('px',''))

 if(x>$('body').width()-this.$node.css('width').replace('px','') || x<0){
 	this.dx = -this.dx;
 }
 if(y>$('body').height()-this.$node.css('height').replace('px','') || y<0){
 	this.dy = -this.dy;
 }
 
}