class Block{
    constructor(x, y, width, height) {
        var options = {
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }

      vanish(){
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility)
        pop();
      }


      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();

        }else{
        this.vanish();
        }
}
}
