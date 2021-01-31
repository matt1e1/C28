
class Spring {

    constructor(b1,b2){

        var props = {
            bodyA: b1,
            stiffness: 0.04,
            length:1,
            bodyB: b2
        }
        this.chain = Matter.Constraint.create(props);
        World.add(world, this.chain);
    }

    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);

    }


}





