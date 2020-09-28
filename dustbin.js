class dustbin {
  constructor(x,y,width,height){
      var options={
      isStatic:true
      }
  
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.height=height;
      this.width=width;
      this.image=loadImage("sprites/dustbingreen.png");
       World.add(world,this.body);
  }
  display(){
      var pos =this.body.position;
    
      fill("white");
    
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y+5);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop();

    }
  };