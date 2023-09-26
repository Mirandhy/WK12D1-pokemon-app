const React = require('react')


class Show extends React.Component {
    render( ) {
        const { name, img } = this.props.pokemon//
        return (
          <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            
           
            <img
              style={{ width: "200px", height: "200px" }}
              src={`${img}.jpg`}
              alt=""
            />
            <nav>
              <a href="/pokemons">Back to Pokemons Index Page</a>
            </nav>
          </div>
        );
    }  
}


module.exports = Show;