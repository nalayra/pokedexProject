//API URL for list of all pokemon
const URL = `https://pokeapi.co/api/v2/pokemon/`;
const pokedex = document.getElementById("pokedex");
console.log(pokedex);


//Function to fetch pokemon from PokeAPI
// const fetchPokemon = () => {
    
    // for (let i = 1; i < 9; i++){
    // fetch(`${URL}${i}`)
    // .then(res => res.json())
    // .then(data => {
    //     const pokemon = {
    //         name: data.name,
    //         id: data.id,
    //         image: data.sprites['front_default'],
    //         type: data.types.map(type => type.type.name).join(', ')
    //     };
    //     displayPokemon(pokemon);
    // });
    // };

// const displayPokemon = pokemon => {
//     console.log(pokemon)
//     const html = `<li>Bulbasaur</li>`;
//     pokedex.innerHTML = html;

// }

// };
// fetchPokemon();


                //Current Code
const fetchPokemon = () => {
    
    const promises = [];
    for (let i = 1; i < 9; i++){
    promises.push(fetch(`${URL}${i}`)
    .then(res => res.json()))
    }

    Promise.all(promises).then(results => {
        const pokemon = results.map( data =>({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map(type => type.type.name).join(', ')
        }))
        displayPokemon(pokemon);
    })
    };

//! The li was referenced in the HTML file tag as a <ul>, so I made updates so I could style via CSS
const displayPokemon = pokemon => {
    console.log(pokemon)
    const pokemonHTML = pokemon.map ( pokemon => `
    <li class="card">
        <img class="card-image" src="${pokemon.image}"/>
        <h2 class="card-title" >${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">Type: ${pokemon.type}</p>
    </li>
    `)
    .join('');
    pokedex.innerHTML = pokemonHTML;

}
fetchPokemon();



const li = document.createElement("favorites-list")


//^ <div> #id variables from HTML
const randomPoke = document.getElementById("pokemon-randomize");
const randomBox = document.getElementById("randomize-box");

const favoritePoke = document.getElementById("pokemon-favorites");
const favoriteBox = document.getElementById("favorites-box");
    favoritesBox.append(li)

const searchPoke = document.getElementById("pokemon-search")



//^ eventListener for randomPoke
        //^ CREATE ONE SUBMIT EVENT LISTENER FOR BOTH BUTTONS?
randomPoke.addEventListener('submit', (event) => {
     event.preventDefault();
})

//^ eventListener for favoritePoke
favoritePoke.addEventListener('submit', (event) => {
     event.preventDefault();
})
//^ eventListener for searchPoke
searchPoke.addEventListener('click', () => {

})

