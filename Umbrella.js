class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body = Bodies.circle(x,y,40,options);
        this.radius = 100;
        World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}