// collection == table

const mongoose = require('mongoose')

//schema --tells mongoDB via mongoose that what does the data look like to be allowed in the database
const fruitSchema = new mongoose.Schema({
  name: { type: String, require: true },
  color: { type: String, require: true },
  readyToEat: Boolean
})

// Fruit object
//The .model() function makes a copy of schema. 
const Fruit = mongoose.model('Fruit', fruitSchema) // use fruitSchema to build a Fruit1 object and link it with the mongoDB the Fruit2 Collection in the database
module.exports = Fruit