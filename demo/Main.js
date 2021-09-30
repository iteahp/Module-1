let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let bird = new Bird(50,250);
let tube= new Tube(700,0 );
bird.draw(ctx)
function run(){
    // bird.down()
    // bird.draw(ctx)
    tube.draw(ctx)
}
 run()




