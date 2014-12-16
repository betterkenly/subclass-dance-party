// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this.timeBetweenSteps = timeBetweenSteps;
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  this.color = 'rgb('+r+','+g+','+b+')';

  this.top = top;
  this.left = left;


  this.setPosition(top, left);
  this.step();

};

Dancer.prototype.step = function(){
  this.$node.css({'background-color': this.color});
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

Dancer.prototype.lineUp = function(x){
  this.$node.animate({left: x+'px'});
}

Dancer.prototype.setPosition = function(top, left){
  var size = Math.floor(Math.random()*75)+25;
  var styleSettings = {
    top: top,
    left: left,
    height: size+'px',
    width: size+'px'
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.ungroup = function(){
  this.$node.animate({left: this.left+'px'});
}

