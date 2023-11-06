class Paddle
  {
    constructor(spawnX)
    {
      this.x = spawnX;
      this.y = height / 2;
      this.w = 10;
      this.h = 96;
      this.speed = 0;
    }
    
    move()
    {
      this.y += this.speed;
    }
    
    draw()
    {
      fill(0);
      rectMode(CENTER);
      rect(this.x, this.y, this.w, this.h);
    }
  }