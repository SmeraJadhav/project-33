class Snow{
    constructor(){
        var option={
            isStatic:false
        }
        this.image=loadImage("snow4.webp");
        this.body=Bodies.circle(random(1,800),10,10,option);
        World.add(world,this.body)

    }
    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,10,10) 
    }
}