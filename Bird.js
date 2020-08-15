// create a new class
class Bird
{
  constructor(x, y) 
  {
    //give options for the bird
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,50, 50, options);
    this.width = 50;
    this.height = 50;
    
    //add the bird to the world
    World.add(world, this.body);
  }
  //display the bird
  display()
  {
    //nameSpace the position and angle
    var pos =this.body.position;
    var angle = this.body.angle;

    //make the bird move with the mouse
    pos.x =mouseX;
    pos.y =mouseY;

    //rotate the bird
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }

}
