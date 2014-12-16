var SwingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.distance = Math.floor(Math.random()*100)+1;
  this.x = 0;
  this.direction = 'left';
};
;
SwingDancer.prototype = Object.create(Dancer.prototype);
SwingDancer.prototype.constructor = SwingDancer;
SwingDancer.prototype.step = function(){
 Dancer.prototype.step.call(this);

 if(this.direction === 'right'){
 	this.x++;
 	this.$node.css({left: '+=1px'});
 	if(this.x > this.distance){
 		this.direction = 'left';
 	}
 } else if (this.direction === 'left'){
	this.x--;
	this.$node.css({left: '-=1px'});
	if(this.x < -this.distance){
		this.direction = 'right';
	}
}

 
 //this.$node.css({left: '-='+this.distance+'px'},'slow');
}