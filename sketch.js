leftScore = 0;
rightScore = 0;

function setup() {
  createCanvas(400, 300);
  
  puck = new Puck();
  paddleLeft = new Paddle(16);
  paddleRight = new Paddle(width - 16);
}

function draw() {
  background(255, 150, 255);
  
  puck.move();
  paddleLeft.move();
  paddleRight.move();
  
  puck.checkCollision(paddleLeft);
  puck.checkCollision(paddleRight);
  
  drawScores();
  puck.draw();
  paddleLeft.draw();
  paddleRight.draw();
}

function keyPressed()
{
  if(key == 'w')
    {
      paddleLeft.speed = -2;
    }
  if (key == 's')
    {
      paddleLeft.speed = 2;
    }
  
  if(keyCode == UP_ARROW)
    {
      paddleRight.speed = -2;
    }
  if (keyCode == DOWN_ARROW)
    {
      paddleRight.speed = 2;
    }
}

function keyReleased()
{
  if(key == 'w' || key == 's')
    {
      paddleLeft.speed = 0;
    }
  
  if(keyCode == UP_ARROW || keyCode == DOWN_ARROW)
    {
      paddleRight.speed = 0;
    }
}



function drawScores()
{
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(leftScore, 16, 16);
  text(rightScore, width-16, 16);
  
}