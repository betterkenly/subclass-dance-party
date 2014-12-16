var TangoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.color = 'grey';
  this.pairing = false;
  this.findPair();

};

TangoDancer.prototype = Object.create(Dancer.prototype);
TangoDancer.prototype.constructor = TangoDancer;
TangoDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if(!!this.pairing){
      var dx = this.$node.css('left').replace('px','')-this.pairing.$node.css('left').replace('px','')
      var dy = this.$node.css('top').replace('px','')-this.pairing.$node.css('top').replace('px','')
      var dc = Math.sqrt(dx*dx+dy*dy);

      var dxdc = Math.abs(dx/dc);
      var dydc = Math.abs(dy/dc);

      if(dx > 50){
        this.$node.css({left:'-='+dxdc+'px'})
      } else if(dx<-50){
        this.$node.css({left:'+='+dxdc+'px'})
      }

      if(dy > 50){
        this.$node.css({top:'-='+dydc+'px'})
      } else if(dy<-50){
        this.$node.css({top:'+='+dydc+'px'})
      }

      if(Math.abs(dy)<50 && Math.abs(dx)<50){
        var random = Math.floor(Math.random()*3)-1;
        console.log(random);
        this.$node.css({top:'+='+random+'px'});
        this.$node.css({left:'+='+random+'px'});
      }
  }
}

TangoDancer.prototype.findPair = function(){
  for(var i=0; i<window.dancers.length;i++){
    if(!window.dancers[i].pairing){
        this.pairing = window.dancers[i];
        window.dancers[i].pairing = this;
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        this.color = 'rgb('+r+','+g+','+b+')';
        window.dancers[i].color = 'rgb('+r+','+g+','+b+')';
    }
  }
}