// create a new class
class Log
{
  constructor(x, y,height,angle) 
  {
    //give options for the log
    var options = 
    {
        'restitution':0.8,
        'friction':1.5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 20, height, options);
    this.width = 20;
    this.height = height;
    Matter.Body.setAngle(this.body,angle);
    //add the box to the world
    World.add(world, this.body);
  }
  //display the log
  display()
  {
    //nameSpace the position and angle
    var pos =this.body.position;
    var angle = this.body.angle;

    //rotate the log
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("brown");
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();
  }

}
