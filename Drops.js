class Drops{
    constructor(x,y){
    var options={
        friction : 0.1,
        isStatic:false
    }

        this.body = Bodies.circle(x,y,2,options);
        this.radius = 2;
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("blue");
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}