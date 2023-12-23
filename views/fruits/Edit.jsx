const React = require('react')

function Edit (props) {
    //Object destructuring in JavaScript is a feature that allows you to extract multiple properties from an object in a single line.after this line of code is executed, you can use name, _id, readyToEat, and coloras standalone variables in your code.
    const { name, _id, readyToEat, color} = props.fruit
    return(
        <div>
           <h1>{name} Edit Page</h1>
           <a href = '/fruits'>Go Back to Index Page</a>
           <form action={`/fruits/${_id}?_method=PUT`} method="POST"> 
              Name: <input type="text" name="name" defaultValue={name}/><br/>
              Color: <input type="text" name="color" defaultValue={color}/><br/>
              
              Is Ready To Eat: {readyToEat? <input type="checkbox" name="readyToEat" defaultChecked/>: <input type = 'checkbox' name = 'readyToEat'/> }<br/>
              <input type="submit" value="Update Fruit"/> 
           </form>
        </div>
    )
}

module.exports = Edit