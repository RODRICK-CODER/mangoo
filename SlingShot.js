class SlingShot{
    constructor(bA,bB){
        var options={
            bodyA:bA,
            pointB:bB,
            length:100,
            stiffness:0.005,
        }
        this.slingShot=Constraint.create(options);
        World.add(world,this.slingShot);
    }
        fly(){
            this.slingShot.bodyA=null;
        }
        attach(body){
            this.slingShot.bodyA=body;
        }
    
    display(){
        if(this.slingShot.bodyA){
        var pa=this.slingShot.bodyA.position;
        var pb=this.slingShot.pointB;
        
        strokeWeight(3);
        line(pa.x,pa.y,pb.x,pb.y)
        }
        
    }

}