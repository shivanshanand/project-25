class paper{
    constructor(x,y,radius){
        var op={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius/2,op);
        this.radius= radius;
        this.image=loadImage("paper.png");
        World.add(world,this.body);

    }

    display(){
        push(); 
        translate(this.body.position.x, this.body.position.y,this.radius);
        
        image( this.image, 0,0,50,50) ; 
        rotate(this.body.angle); 
        pop();
    }



















}
