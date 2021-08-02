class Boat {
    constructor(x, y, width, height,Sreeram) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
      };
      this.image = loadImage("assets/boat.png");
      this.width = width;
      this.height = height;
      this.Sreeram = Sreeram;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    
      World.add(world, this.body);
    }
    remove(index) {
        Matter.World.remove(world, boats[index].body);
        boats.splice(index, 1);
    
      }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,  0, this.Sreeram, this.width, this.height);
      pop()
    }
  }
  