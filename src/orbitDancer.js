var OrbitDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.timeBetweenSteps = this.timeBetweenSteps/100;
  this.radius = Math.floor(Math.random()*100)+1;
  this.cx = left;
  this.cy = top;
  this.radian = 0;
};

OrbitDancer.prototype = Object.create(Dancer.prototype);
OrbitDancer.prototype.constructor = Dancer;
OrbitDancer.prototype.lineUp = function(x,y,orientation){
  if(orientation === 'x'){
    this.$node.animate({left: x+'px'},'slow');
    this.cx = x;
  } else if (orientation === 'y'){
    this.$node.animate({top: y+'px'},'slow');
    this.cy = y;
  }
}

OrbitDancer.prototype.ungroup = function(){
  this.$node.animate({left: this.left+'px', top: this.top+'px'});
  this.cx = this.left;
  this.cy = this.top
}

OrbitDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var dx = this.$node.css('left').replace('px','')-this.cx;
  var dy = this.$node.css('top').replace('px','')-this.cy;
  var dc = Math.sqrt(dx*dx+dy*dy);

  //
  var dxdc = this.cx + this.radius * Math.sin(this.radian);
  var dydc = this.cy + this.radius * Math.cos(this.radian); 
  if(this.radian>360){
    this.radian = 0
  }
  this.radian = this.radian+this.radius/1800;

  console.log(dxdc,dydc);
  this.$node.css({left: ''+dxdc+'px', top: ''+dydc+'px'});
}