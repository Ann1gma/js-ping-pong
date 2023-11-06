class Puck

{
  constructor()
  {
   this.radius = 10;
    this.reset();
}
  
  reset()
  {
    this.x = width/2;
    this.y = height/2;
    this.xSpeed = 4;
    this.ySpeed = 4;
    
    if(random(1) > 0.5)
      {
        this.xSpeed *= -1;
      }
    
    
    if(random(1) > 0.5)
      {
        this.ySpeed *= -1;
      }
  }

  move()
  {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    this.bounceEdges();
    this.checkGoals();
  }
  
  checkCollision(paddle)
  {
    var puckLeft = this.x - this.radius;
    var puckRight = this.x + this.radius;
    var puckBottom = this.y + this.radius;
    var puckTop = this.y - this.radius;
    
    var paddleLeft = paddle.x - paddle.w/2;
    var paddleRight = paddle.x + paddle.w/2;
    var paddleTop = paddle.y - paddle.h;
    var paddleBottom = paddle.y + paddle.h;
    
    
    if (puckLeft < paddleRight &&
       puckRight > paddleLeft &&
       puckTop < paddleBottom &&
       puckBottom > paddleTop)
      {
        this.xSpeed *= -1;
      }
  }
  
  bounceEdges()
  {
    if(this.y + this.radius > height || 
       this.y - this.radius < 0)
      {
        this.ySpeed *= -1;
      }
  }
  
  checkGoals()
  {
    if (this.x + this.radius > width){
      this.reset();
      leftScore++;
    }
    
    if (this.x + this.radius < 0){
      this.reset();
      rightScore++;
    }
  }
  
  draw()
  {
    fill(0);
    circle(this.x, this.y, this.radius*2);
  }
  
}
