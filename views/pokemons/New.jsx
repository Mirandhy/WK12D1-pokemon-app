const React = require("react")

//Form request for new pokemon

class New extends React.Component{
    render( ){
        return (
            <div>
                <h1>New Pokemon Page</h1>
                <form action = "/pokemons" method="POST">
                    Name: <input type = "text" name="name"/> <br/>
                    My Favorite Pokemon: <input type = "checkbox" name="myFavPokemon"/> <br/>
                    Image URL: <input type = "text" name="img"/> 
                    <input type ="submit" value="Create Pokemon" />
                </form>
                <nav>
                    <a href="/pokemons">Back to Pokemons Index Page</a>
                </nav>
            </div>
        )
    }
}




module.exports = New;