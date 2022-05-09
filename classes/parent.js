class Parent{
    constructor(x, y, w, h,angle){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("assets/base.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.width,this.height);
        pop();
    }
};