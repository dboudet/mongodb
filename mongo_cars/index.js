require("dotenv/config")  // pull in .env file to hide db connection string and creds
const mongoose = require("mongoose")   // pull in mongoose library

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })   // connect to MongoDB Atlas db
    .then( () => console.log("Now connected to MongoDB."))
    .catch(err => console.log("Error establishing connection:" , err))

// create schema for data formats
const carSchema = mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: Number,
    type: [String]
})

// create Model (capital letter) to  use the schema, passing in model name (Movie) and schema
const Car = mongoose.model('Car', carSchema )

// record count
function getallCarsCount() {
    Movie.find()
        .countDocuments()
        .then(count => console.log("Total number of records:", count))
        .catch(err => console.log(err))
}
getallCarsCount()

// function to add a car
function addCar() {
    const newCar = new Car({
        make: "BMW",
        model: "760i",
        year: 2017,
        type: ["luxury","sedan"]
    })
    newCar.save()
    .then(() => console.log("New car has been added."))
    .catch( err => console.log("Error: car was not saved." , err ))
}
addCar()

// function to get all cars
function getAllCars() {
    Car.find()
        .then(allCars => console.log("Here are all the cars:", allCars))
        .catch(err => console.log("An error has occurred in listing the cars." , err))
}
getAllCars()

//function to filter and sort results
function getCarsFilteredSorted(carLimit) {
    Car.find()
        .limit(carLimit)
        .sort({year : -1})
        .then(cars => console.log("Here the filtered results:", cars))
        .catch(err => console.log(err))
}
const limitCarList = 3
getCarsFilteredSorted(limitCarList)

getallCarsCount()