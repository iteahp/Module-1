let tivi = new Tivi(2,5)
let remote = new Remote(2)
    tivi.turnOn()
     tivi.channelControl(7)
     remote.channelControl(tivi,3)
    remote.soundControlUp(tivi,2)
    remote.setTivi(tivi)
    tivi.getSound()
    tivi.getChannel()



