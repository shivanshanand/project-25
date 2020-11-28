class wall{
    constructor(x,y,b,c){
        this.body1=Bodies.rectangle(x,y,b,c, {isStatic:true});
        World.add(world,this.body1);
        this.image=loadImage("dust.jpg");
        
        this.body2=Bodies.rectangle(x,y,b,c, {isStatic:true});
        World.add(world,this.body2);
        
        this.body3=Bodies.rectangle(x,y,b,c, {isStatic:true});
        World.add(world,this.body3);

        this.width=b
        this.height=c
    }

    show(){
       push()
        translate(this.body1.position.x,this.body1.position.y);
        rotate(this.body1.angle);
        imageMode(CENTER);
        image( this.image, 0,0, this.width, this.height ) ;
        pop()
    }
  }
