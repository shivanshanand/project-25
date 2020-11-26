class wall{
    constructor(x,y,b,c){
        this.body=Bodies.rectangle(x,y,b,c, {isStatic:true});
        World.add(world,this.body);
        this.image=loadImage("dust.jpg");

        this.width=b
        this.height=c
    }

    show(){
        fill("red")
        rectMode(CENTER);
        rect( this.body.position.x , this.body.position.y, this.width, this.height ) ;
    }
  }