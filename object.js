var _this = this;
var carName = "Doge Viper"; // Simple way of storing data
// Simple object
var car = {
    // key:"value",
    name: "Nissan Gtr", // properties
    color: "Black",
    year: 2024,
    engine: 2.0,
    price: '$10000000',
    inStock: true,
    availableColors: ["Red", "Gray", "White"]
};
console.log(car); // log whole object
console.log('------------------------------------');
var person = {
    // key:"value",
    country: "USA",
    name: "Peter", // properties
    age: 35,
    city: "London",
    married: true,
    cars: ["McLaren", "Ferrari", "Bugatti"],
};
console.log(person); // log whole object
console.log(person.country); // log specific property
console.log(person['cars']); // another way to log specific property
console.log('------------------------------------');
var personTwo = {
    // key:"value",
    firstName: "M", // properties
    LatName: "Huzaifa", // properties
    age: 16,
    country: "Pakistan",
    city: "Karachi",
    married: false,
    fullName: function () {
        console.log('kuch bhi', this); // log this object
        console.log(this.firstName + " " + this.LatName);
    },
    getBirthYear: function () {
        console.log(_this); // log this object
        console.log('age', _this.duration); // log undefined because of arrow function
        return 2024 - _this.duration; // return NaN
    }
};
// Invoke personTwo method
personTwo.fullName();
// Invoke personTwo method
console.log(personTwo.getBirthYear()); // will return NaN because of arrow function
// Update personTwo property
personTwo.age = 16;
console.log(personTwo);
console.log('------------------------------------');
var pet = {
    name: "luccy",
    color: "gray",
    age: 2,
    food: "Milk",
    eat: function () {
        console.log('I am eating', this.food); // log food property
    }
};
console.log(pet);
console.log('------------------------------------');
// Optional property
var pet2 = {
    name: "Jack",
    color: "persian",
    age: 3,
    food: "Fish",
};
console.log(pet2.food); // log food property
console.log('------------------------------------');
var age = 24;
console.log('------------------------------------');
var pet3 = {
    name: "Tommy",
    color: "Gray and white",
    age: 5,
    food: "Jerry",
};
console.log(pet3);
console.log('------------------------------------');
var pet4 = {
    name: "Luna",
    color: "Brown",
    age: 1,
    food: "Cheese",
    eat: function () {
        console.log('I am eating', this.food); // log food property
    }
};
if (pet4.eat) {
    pet4.eat();
}
var john = {
    name: "Aizal",
    age: 22,
    sleep: function () {
        console.log('I am sleeping');
    },
    legs: 2,
    hand: 2
};
console.log(john);
console.log('------------------------------------');
var spiderMan = {
    name: "Rock",
    age: 30,
    sleep: function () {
        console.log('I am sleeping');
    },
    legs: 2,
    hand: 2,
    superPower: "Climb on buliding",
    heroName: "The Rock"
};
