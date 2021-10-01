let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let birdImg = new Image();
let backGround = new Image();
let tubeUp = new Image();
let tubeDown = new Image();
let dieImg = new Image()
let startImg = new Image()
startImg.src = "images/message.png"
dieImg.src = "images/gameover.png"
birdImg.src = "images/bird.png";
backGround.src = "images/nenchinh.png";
tubeUp.src = "images/ongtren.png";
tubeDown.src = "images/ongduoi.png";
let flyAudio = new Audio('audio/wing.wav')
let dieAudio = new Audio('audio/die.wav')
let upCoreAudio = new Audio('audio/point.wav')
let hitAudio = new Audio("audio/hit.wav")
let score = 0;
let bestScore = 0
let distance2Tube = 140;
let distanceToTubeDown;

let bird = {
    x: backGround.width / 5,
    y: backGround.height / 2
}
let tube = [];
tube[0] = {
    x: canvas.width,
    y: 0
}
context.drawImage(backGround, 0, 0)
context.drawImage(startImg, 350, 0)

function run() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    document.getElementById('start').disabled = true
    document.getElementById('reset').disabled = true
    context.drawImage(backGround, 0, 0);
    context.drawImage(birdImg, bird.x, bird.y, 30, 30);
    let i = 0
    for (; i < tube.length; i++) {
        distanceToTubeDown = tubeUp.height + distance2Tube;
        context.drawImage(tubeUp, tube[i].x, tube[i].y);

        context.drawImage(tubeDown, tube[i].x, tube[i].y + distanceToTubeDown);

        tube[i].x -= 5;

        if (tube[i].x === 450) {
            tube.push({
                x: canvas.width,
                y: Math.floor(Math.random() * tubeUp.height) - tubeUp.height

            })
        }
        if (tube[i].x === 0) tube.splice(0, 1);

        if (tube[i].x === bird.x) {
            upCoreAudio.play()
            score++;

        }

        if (bird.y + birdImg.height === canvas.height ||
            bird.x + birdImg.width >= tube[i].x && bird.x <= tube[i].x + tubeUp.width
            && (bird.y <= tube[i].y + tubeUp.height ||
                bird.y + birdImg.height >= tube[i].y + distanceToTubeDown)
        ) {
            hitAudio.play()
            dieAudio.play()
            drawGameOver()
            i = 0
            score = 0
            bird = {
                x: backGround.width / 5,
                y: backGround.height / 2
            }
            tube.splice(0, 1)
            document.getElementById('reset').disabled = false
            return;
        }


    }
    context.fillStyle = "#000";
    context.font = "20px Verdana";
    context.fillText("Score : " + score, 10, canvas.height - 20)


    bird.y += 3;
    requestAnimationFrame(run);

}

document.addEventListener("keydown", function () {
    bird.y -= 60;
    flyAudio.play()
})

function drawGameOver() {
    context.beginPath()
    context.drawImage(dieImg, 350, canvas.height / 2 - 100)
    context.closePath()
    context.beginPath()
    context.fillStyle = "#ffcc66"
    context.fillRect(300, canvas.height / 2 - 50, 300, 200)
    context.beginPath()
    context.fillStyle = "red"
    context.font = "30px Algerian"
    context.fillText("Score : " + score, 370, canvas.height / 2 + 20)
    context.closePath()
    checkScore()
    context.beginPath()
    context.fillStyle = "red"
    context.font = "30px Algerian"
    context.fillText("best : " + bestScore, 370, canvas.height / 2 + 70)
    context.closePath()
}

function checkScore() {
    if (score > bestScore) {
        bestScore = score
    }
}
