class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':0,
            'density':0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=hiehgt;
    World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);

        FileList(225);
        rect(this.body.position.x, this.body.position.y, this.width, this. height);
    }
};