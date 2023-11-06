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
    let puckLeft = this.x - this.radius;
    let puckRight = this.x + this.radius;
    let puckBottom = this.y + this.radius;
    let puckTop = this.y - this.radius;
    
    let paddleLeft = paddle.x - paddle.w/2;
    let paddleRight = paddle.x + paddle.w/2;
    let paddleTop = paddle.y - paddle.h;
    let paddleBottom = paddle.y + paddle.h;
    
    
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
