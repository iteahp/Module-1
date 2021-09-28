class Remote{
    code;
    constructor(code) {
        this.code = code
    }
    channelControl(tivi,num){
        tivi.channelControl(num)


    }
    soundControlUp(tivi,num){
      return    tivi.soundControlUp(num)

    }
    soundControlDown(tivi,num){
      return    tivi.soundControlDown(num)
    }
    setTivi(tivi){
         tivi.isOff = true
        console.log("Tivi turn off")
    }
}


