class Bird{
    x
    y
    score

    constructor(x,y) {
        this.x = x
        this.y = y
        this.score = 0
        this.g =0.5
        this.y2 = 0

    }
    draw(ctx) {
        ctx.beginPath()
        let x = this.x
        let y = this.y
        let img =document.getElementById("imgBird")
        // img.src = "images/bird.png"
        // img.onload = function () {
            ctx.clearRect(0,0,500,900)
            ctx.drawImage(img,x,y,50,50)
        // }

    }
    down(){
        this.y+=2
    }
    control(){
        document.addEventListener('click',()=>{
            this.y -= 60

        })
    }
    changeImage(){

    }
}