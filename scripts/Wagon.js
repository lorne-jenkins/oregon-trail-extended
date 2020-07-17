class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        let availableSeats = this.capacity
        return availableSeats
    }
    join(nextPassenger) {
        this.capacity = this.capacity - 1
        if (this.capacity >= 0) {
            this.passengers.push(nextPassenger)
            console.log('Who is with me?? ', this.passengers)
        } else {
            this.capacity = 0
            console.log('Sorry sucka! Catch the next wagon')
        }
    }
    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            if (this.passengers[index].isHealthy === false){
                return true 
            }
        } return false
    }
    totalFood() {
        let foodTotal = 0
        for (let index = 0; index < this.passengers.length; index++) {
            foodTotal = foodTotal + this.passengers[index].food
        }
        return foodTotal
    }
}