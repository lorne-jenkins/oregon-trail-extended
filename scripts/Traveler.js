class Traveler {
    constructor(name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food = this.food + 2
        if (this.food > 0) {
            this.isHealthy = true
        }
    }
    eat() {
        this.food = this.food - 1
        if (this.food < 0) {
            this.isHealthy = false
            this.food = 0
        }
    }
}
// The Doctor class will extend the Traveler class and have one additional method:
// heal(traveler) - set the traveler's isHealthy property to true.

class Doctor extends Traveler {
    constructor(name, food) {
        super(name, food)
    }
    heal(traveler) {
        traveler.isHealthy = true
    }
}

// The Hunter class will extend the Traveler class, but it will start with 2 food instead of 1. The Hunter class should also have the following methods:

// hunt() - Increase the hunter's food by 5. (A normal traveler gains only 2.)
// eat() - Consumes 2 units of food. If the hunter doesn't have 2 food when they are instructed to eat, they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy.
// giveFood(traveler, numOfFoodUnits) - 
// Transfers numOfFoodUnits from the hunter to the traveler. If the hunter doesn't have enough food, then no food should be transferred.

class Hunter extends Traveler {
    constructor(name, food) {
        super(name, food)
        this.food = this.food+1
    }
    hunt() {
        this.food = this.food + 5
        if (this.food > 0) {
            this.isHealthy = true
        }
    }
    eat() {
        if (this.food >= 2) {
            this.food = this.food - 2
        } else {
            this.food = 0
            this.isHealthy = false
        }

        // if (this.food <= 0) {
        //     this.isHealthy = false
        //     this.food = 0
        // }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            traveler.food = traveler.food + numOfFoodUnits
            this.food = this.food - numOfFoodUnits
        }
    }
}