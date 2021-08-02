class CannonBall{
    constructor(x, y) {
      var options = {
        isStatic: true,
        restitution: 0.8,
        friction : 1.0,
        density:1.0
      };
      this.image = loadImage("assets/cannonball.png");
      this.r = 40
      this.body = Bodies.circle(x, y, this.r, options);
      this.path=[]
      World.add(world, this.body);
    }

    shoot(){
    var velocity=p5.Vector.fromAngle(cannon.angle)
    velocity.mult(20)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();

      if(this.body.velocity.x>0&&this.body.position.x>300){
        var position=[this.body.position.x,this.body.position.y]
        this.path.push(position)
      }
      //initial value, ending value, increase
      for(var i=0;i<this.path.length;i++){
        image(this.image,this.path[i][0],this.path[i][1],5,5)
      }
    }
  }
  