class Spring {

    constructor(b1,p2){

        var props = {
            bodyA: b1,
            stiffness: 0.04,
            length:1,
            pointB: p2
        }
        this.chain = Matter.Constraint.create(props);
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA) {
            var posA = this.chain.bodyA.position;
            var posB = this.chain.pointB;
            line(posA.x,posA.y,posB.x,posB.y);
        }

    }

    flight(){

        this.chain.bodyA=null

        
    
    }
}





