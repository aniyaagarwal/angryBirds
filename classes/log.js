class Log extends Parent{
   constructor(x, y, h, angle){
       super(x, y, 20, h, angle)
       Matter.Body.setAngle(this.body, angle);
       this.image = loadImage("assets/wood2.png")
       }

}