class paper{
    constructor(x,y,r){
       this.x=x
       this.y=y
       this.r=r
       this.body=Bodies.circle(this.x,this.y,(this.r-20)/2) 
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        //making changes to the physics body like translate and rotate
        push();
        //changing the origin of the body to pos.x , pos.y
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        //taking back the changes
        pop();
      }
}