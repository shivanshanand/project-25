class wall{
    constructor(x,y,b,c){
        this.body1=Bodies.rectangle(x,y-38,b,c, {isStatic:true});
        World.add(world,this.body1);
        this.image=loadImage("dust.jpg")

        this.body2=Bodies.rectangle(x-50,y-50,10,70, {isStatic:true});
        World.add(world,this.body2);

        this.body3=Bodies.rectangle(x+50,y+50,10,70, {isStatic:true});
        World.add(world,this.body3);

        this.width=b
        this.height=c
    }

    show(){
       // rect(this.body2.position.x,this.body2.position.x,10,70);
       // rect(this.body3.position.x,this.body3.position.x,10,70);

        push()
        translate(this.body1.position.x,this.body1.position.y);
        imageMode(CENTER);
        image( this.image, 0,0,60,80 ) ;
        pop()
    }
  }
