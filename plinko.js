class Plinko{
     constructor(x,y){
          var options = {
               restitution:0.4,
               isStatic:true

          }

          this.body = Bodies.circle(x,y,10,options);

          fill(255);

          /*this.color = color(random(0,255),random(0,255),random(0,255));          
          fill(this.color);*/

          World.add(world,this.body);
     }

     display(){

          var pos = this.body.position;

          push();                         
          translate(pos.x,pos.y);
          noStroke();
          ellipseMode(RADIUS);
          ellipse(0,0,10,10);
          pop();
          
     }
}