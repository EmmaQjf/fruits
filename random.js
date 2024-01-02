// Notes to follow
// app.listen
// app.set
// app.get..  asking for the server for data, file
// app.post  .. put data in the database
// app.put  .. have data stored in database, change the data 
// app.delete

// what is the purpose of package.json?
// The file provides the npm package manager with various information to help identify the project and handle dependencies

// only express(no /..) means node project knows to look for the modules directory 
const express = require("express") //imported express from node modules , express is a function

//invoke the express function, store it in the object called app
const app = express();
const path = require('path');
const fs = require('fs')

//organization code starts
/* setup our database */
app.engine('liberty', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if(err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', `<title>${options.title}</title>`)
            .replace('#message#', `<h1>${options.message}</h1>` )
            .replace('#h2#', 'jerery is DOPE')
            .replace('#content#', `<div>${Array.isArray(options.content)? options.content.map((item) => {
                return `<li>${item}</li>`
            }): options.content}</div>`)
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'liberty')
//organization code ends




// middleware starts

//day 2 middleware runs first , brower will ask for script.js and style.css file after the html page is rendered and check whether those files exist 
// day 2 let the css, js to be used for the html page
// put it before route
// app.use(express.static('public'))


// app.use((req, res, next) => {
//     console.log(req.ip, 'hey Emma')
//     next() //middleware is done finishing, which route does it match
// })
//  Day 2 this is what express.static is for, with it we do not have to write a bunch app.get to send clients css, js. middleware automatically do it for use. 
//  Day 2 app.get('/script.js', (req, res)=> {
//     res.sendFile(`${__dirname}/public/script.js`)
// })

// day 2 app.get('/style.css', (req, res)=> {
//     res.sendFile(`${__dirname}/public/style.css`)
// })

// middleware ends






// routes start

//'/' ---- listening for the root
// req-- user request/what user sends to us , res=> response 
// get -- what you want users to see, http verb
// event listeners on the backend is called routes 

// app.get('/', (req, res) => {
// //    res.send('<h1>Hello Emma!</h1>')
// //day 2  __dirname --current working directory 
// //day 2 only send html file without any styling and js
// // res.sendFile(path.resolve(__dirname), 'public','index.html')
// res.sendFile(`${__dirname}/public/index.html`)
// })

// How does res.redirect work?
// app.get('/about',(req, res)=> {
//     res.redirect('about/me')
// })

// app.get('/about/me',(req,res)=> {
//     res.send('<h1>I am cool</h1>')
// })

// app.get("/:name",(req, res) => {
//     res.send(`Hello ${req.params.name}`)
// })
// what is params?
// {
//     name: ...waiting to be calle, like event.target
// }


// button.addEventListener ('click', (evt) => {
//     console.log(evt.target)
// }) similar 



// let express to listen to port 3000
// default ports the application use, test the code 
// default ports    80-http     443-https    22 shh 
//div mode 3000, 3001, 8000,8080
// app.listen connects the node.js and express 
// what ports do, how you want me to tell you we succeeded
// I can USE the method and setup a server that is listening to HTTP requests.


app.get('/', (req, res) => {
    res.render('template', { title: 'I am DJ Khaled', message: 'We The Best!', content: 'All I Do is Win' })
  })

app.get('/about', (req, res) => {
    res.redirect('/about-me')
})

app.get('/about-me', (req, res) => {
    res.render('jeremy', { title: 'DJ KHALED', message: 'It Breaks My Heart!', content: 'They Ain\'t Believe in Us But God Did' })
  })

app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who The Best! We!!!', content: 'We Taking Over, Major Key Alert, Y\'all know who it is, All I do is win, God Did!!!' })
  })

app.listen (3000, () => {
    console.log("We in the building")
})

// routes end 





// npm start to get the server  running 
// control + C to stop the server running 
//localhost:3000 to see it on webpage 


// nodemon everytime we made the change to code, the page will automatically be updated. so we do not have to stop the server to make changes. 
// add nodemon package : npm i -D nodemon
// 1. update the following the code on package.json, added "dev": "nodemon"
//  "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node server.js",
//     "dev":"nodemon"
//   },

// in the terminal , type npm run dev


// rest -- each data type will have all 7 rest

// nodemon watch extensions:js,mjs,cjs,json watch the change on those file types
// watching path(s). *.*  -- . current w
