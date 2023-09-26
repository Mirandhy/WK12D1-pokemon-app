const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

//  Index View for index Route
class Index extends React.Component {
    render ( ){
        const { pokemons } = this.props
        console.log(pokemons)
        return (
        <div>
            <h1 style={myStyle}>See All The Pokemon!</h1>
            <nav>
                <a href="/pokemons/new">Create a New Pokemon</a>
            </nav>
            <ul>
                {
                    pokemons.map(( pokemon, i ) =>{
                        return (
                          // update object to pokemon._id 
                          <li key={i}>
                            <a href={`/pokemons/${pokemon._id}`}>
                             
                              {/* <a href={`/pokemons/${ i }`}> */}
                              {pokemon.name.charAt(0).toUpperCase() +
                                pokemon.name.slice(1)}
                            </a>{" "}
                            is{" "}
                            {pokemon.myFavPokemon
                              ? `This is my favorite pokemon`
                              : `This is not my favorite pokemon`}
                            <br />
                          </li>
                        );
                    })
                }
            </ul>
        </div>
       ); 
    }
}

module.exports = Index;