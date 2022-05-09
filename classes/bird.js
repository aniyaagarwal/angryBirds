class Bird extends Parent {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.image = loadImage("assets/bird.png");
        this.smokeImage = loadImage("assets/smoke.png");
        this.trajectory = [];
    }

    display() {
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        super.display();
        if (this.body.velocity.x > 5 && this.body.position.x > 250) {
            var pos = [this.body.position.x, this.body.position.y];
            this.trajectory.push(pos);
        }
       
        for (var i = 0; i < this.trajectory.length; i++) {
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1], 10, 10);
        }
    }
}