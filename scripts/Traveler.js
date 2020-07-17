class Traveler {
    constructor (name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
       this.food = this.food+2
       if (this.food > 0){
           this.isHealthy = true
       }
    }   
    eat () {
        this.food = this.food - 1
        if (this.food <= 0){
            this.isHealthy = false
            this.food = 0
        }
    }   
}