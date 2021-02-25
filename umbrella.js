class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.animation = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png")
        World.add(world, this.umbrella);
        
        }

   
    display(){

        var pos = this.umbrella.position;
        //animationMode(CENTER);
        animation(this.animation,pos.x,pos.y +230,300,300);



    }
}