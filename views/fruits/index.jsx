const React = require('react')
function Index (props){
    return(
        <div>
            <h1>Fruit Index Page</h1>
            <a href = '/fruits/new'>Create A new Fruit Here</a>
            <ul>
                {
                    props.fruits.map((fruit) => {
                        return (
                            //by placing the curly braces around the variable css, you are telling the parser "take the contents of the variable css and put them here". (Technically its evaluating the content)
                            //use curly braces to embed a JavaScript expression in an attribute
                            <li key={fruit._id}>
                               <a href = {`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}
                            </li>
                        )
                    })
               
                }
            </ul>
            
        </div>
    )
}

module.exports = Index