// create a new class
class Pig
{
  constructor(x, y) 
  {
    //give options for the pig
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,50, 50, options);
    this.width = 50;
    this.height = 50;
    
    //add the pig to the world
    World.add(world, this.body);
  }
  //display the pig
  display()
  {
    //nameSpace the position and angle
    var pos =this.body.position;
    var angle = this.body.angle;

    //rotate the pig
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    rect(0, 0, this.width, this.height);
    pop();
  }

}
