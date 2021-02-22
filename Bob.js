class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.1,
            density:3

        }
       this.x=x;
       this.y=y;
       this.r=r;
       this.body=Bodies.circle(this.x,this.y,this.r/2,options)
       World.add(world,this.body); 
    }
    display(){
        var bobpos=this.body.position;

        push()
        //rotate(this.body.angle);
        translate(bobpos.x,bobpos.y);
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r,this.r);
        pop()


    }
}