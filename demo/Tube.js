class Tube{
    x;
    y;
    constructor(x,y) {
        this.x = x
        this.y = y
        // this.image =image


    }
    // draw(ctx){
    //     ctx.beginPath()
    //     let img = new Image()
    //     let x = this.x
    //     let y = this.y
    //     img.src = this.image
    //     img.onload = function (){
    //         ctx.drawImage(img,x,y)
    //     }
    //     ctx.closePath()
    // }
    // move(){
    //     this.x -=2
    // }
    draw(ctx) {
        let distanceToLowerTube
        let distance2Tubes = 140
        let imgTubeUp = document.getElementById("imgTubeUp")
        let imgTubeDown = document.getElementById("imgTubeDown")
        // imgTubeUp.src = 'images/ongtren.png'
        // imgTubeDown.src = 'images/ongduoi.png'
        let tube = []
        tube[0] = {
            x1: this.x,
            y1: this.y
        }

        let i = 0
        for (; i < 5; i++) {
            // ctx.clearRect(0,0,900,700)
            distanceToLowerTube = imgTubeUp.height + distance2Tubes
            ctx.drawImage(imgTubeUp, tube[i].x1, tube[i].y1)
            ctx.drawImage(imgTubeDown, tube[i].x1, tube[i].y1 + distanceToLowerTube)
            tube[i].x1 -= 5
            if (tube[i].x1 === 450) {
                tube.push({
                    x1: 900,
                    y1: Math.floor(Math.random() * imgTubeUp.height) - imgTubeDown.height
                })
            }
            if (tube[i].x1 === 0) {
                tube.splice(0, 1)
            }
        }


    }





}