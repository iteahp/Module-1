class Tivi{
    channel
    sound
    isOff
    constructor(channel,sound) {
        this.channel =channel
        this.sound = sound

    }
    getSound(){
        return console.log("TV is at  " + this.sound + " volume")
    }getChannel(){
        return console.log("TV is on channel " + this.channel)
    }
    channelControl(channel) {
        if (this.tiviStatus() === true) {
            this.channel = channel
            console.log(" Go to Channel " + channel)
        }
    }
    soundControlUp(num){
        if (this.tiviStatus() === true) {
            this.sound += num
            console.log("Sound up " + num)
        }else {
            console.log("Tivi is off")
        }

    }
    soundControlDown(num){
        if (this.tiviStatus() === true){
            this.sound -= num
            console.log("Sound down " + num)
        }else {
            console.log("Tivi is off")
        }
    }
    turnOn(){
         this.isOff = false
         console.log("Turn on")
    }
    tiviStatus(){
        if (this.isOff==true){
            console.log("TV is off")
            return false
        }else {
            console.log("TV is on")
            return true

        }
    }
}
