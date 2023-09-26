require("dotenv").config( );
const express = require('express');
const app = express ( );
const PORT = process.env.PORT || 3000;
const Pokemon = require("./models/pokemon");
const mongoose = require("mongoose");

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

mongoose.connection.once("open", ( ) => {
    console.log(("connected to mongo"));
});

const jsxViewEngine = require('jsx-view-engine')
p
app.set('view engine', 'jsx')
app.set("views", "./views")
app.engine('jsx', jsxViewEngine( ))

// Middleware
// access data from POST request to server
app.use((req, res, next) => {
    console.log(("Middleware: I run for all routes"));
    next( );
});
app.use(express.urlencoded( {extended:false} ) )


// Root Page Route 
app.get("/", (req,res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
})


app.get('/pokemons', async (req, res) => {
    try {
       const foundPokemons = await Pokemon.find({ })
       res.status(200).render('pokemons/Index', {
        pokemons: foundPokemons,
       });
    } catch (err) {
    res.status(400).send(err)
    }   
});


// ///////////////////////with local db///////////////////////////////////////////

// Show the pokemon data as json 
// app.get("/pokemon",async(req,res)=>{
//     res.status(200).json({
//         pokemons: pokemon
//     })
// })

//show all the pokemon
// app.get('/pokemons', async (req, res) => {
//         res.status(200).render('pokemons/Index', {
//             pokemons: pokemon,
//         });

// });

//show individual pokemon
// app.get('/pokemons/:id', async (req, res) => {
//     const pokemonId=req.params.id
//     //pokemonId=4
//     const foundPokemon = pokemon[pokemonId]
//     //pokemon[4]
//     res.render('pokemons/Show', {
//         pokemon: foundPokemon
//         // { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" }
//     });
// })
// ///////////////////////with local db///////////////////////////////////////////


app.get("/pokemons/new", (req, res) => {
    console.log('New controller');
    res.render("Pokemons/New");
})

/
app.post("/pokemons", async (req, res) => {
   
    try {
        req.body.myFavPokemon = req.body.myFavPokemon === "on";
        const createdPokemon = await Pokemon.create(req.body)
        res.status(201).redirect('/pokemons');
    } catch (err) {
        res.status(400).send(err)
    }
});



app.get('/pokemons/:id', async (req, res) => {

    try {
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render('pokemons/Show', {
            pokemon: foundPokemon
        });
    } catch (err) {
        res.status(400).send(err)
    }
});




app.listen(PORT, ( ) => {
    console.log(`Listening on port: ${PORT}`);
})
