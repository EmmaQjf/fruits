//DotEnv is a lightweight npm package that automatically loads environment variables from a .env file into the process.env object.
require('dotenv').config() //.env file turn the mongodb string into javascript options
const express = require("express") //imported express from node modules , express is a function
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Fruit = require('./models/fruit')//get the models/fruit.js and table

const PORT = process.env.PORT || 3000

//invoke the express function, store it in the object called app to use its methods later
const app = express();


//Accessing your variables is super easy! They are attached to the process.env object, so you can access them using the pattern process.env.KEY.  
mongoose.connect(process.env.MONGO_URI) //connect mongoose and server that houses the mongoDB(the data)
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
})  // check mongoose is connected to mongoDB

app.listen(PORT, () => {
    console.log(`the port at ${PORT} is connected`)
})
//organization code starts
/* setup our database */

//organization code ends




// middleware starts
//The URLEncode method applies URL encoding rules, including escape characters, to a specified string. 
app.use(express.urlencoded({extended: true})) //build a ssr website (html)
//set up the engine
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())


// middleware ends




//routes start
//INDUCES


//INDEX  --eg:SHOW A LIST OF CONTENT;list all fruits
app.get('/fruits', async(req, res)=> {
    try{
      const foundFruits = await Fruit.find({})
      res.render('fruits/Index',{
        fruits: foundFruits
      } )
    }catch (error) {
      res.status(400).send({message: error.message})

    }
})

// When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes.
//NEW --show users a form to fill out to create a fruit ; bring the form to user so they can see it

app.get('/fruits/new', (req, res) => {
    //The res.render() function is used to render a view and sends the rendered HTML string to the client. 
    res.render('fruits/New')
})

//DELETE ---backend only functionality that is used to delete a fruit

//UPDATE ---backend only functionality that is used to update a fruit


//CREATE --backend only functionality that is used to create a fruit, when the form is completed ===> the new page is going to send data to the create route

app.post('/fruits', async (req, res) => {
    //The req.body property contains key-value pairs of data submitted in the request body. 
    //By default, it is undefined and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json(). 
    if(req.body.readyToEat === 'on'){
      req.body.readyToEat = true
    }else {
      req.body.readyToEat = false
    } // data massaging to transform the data type. when using the checkbox and it is checked, it returns string'on', so we return readyToEat to boolean value which meets the requirement of the database structure that readyToEat is a boolean.
    try{
       const createdFruit = await Fruit.create(req.body)
       res.redirect(`/fruits/${createdFruit._id}`)
    //    res.send(createdFruit)
    }catch(error){
       res.status(400).send({message: error.message})
    }
})

//EDIT --- show you a form that lets you edit the fruit.

//SHOW  -- shows you 1 individual fruit 
app.get('/fruits/:id', async (req, res) => {
    try {
        const foundFruit = await Fruit.findOne({_id: req.params.id})
        res.render('fruits/Show', {
            fruit: foundFruit
        }) // the curly braces is the props 
    } catch (error) {
        res.status(400).send({message: error.message})

    }
})

// routes end 

