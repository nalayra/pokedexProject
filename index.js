//API URL for list of all pokemon
const URL = `https://pokeapi.co/api/v2/pokemon/`;

//constants identifyers
const mainForm = document.querySelector("#main-form")
let mainImage = mainForm.querySelector("img")
const pokemonName = mainForm.querySelector("h4")

//constants references
const pokedex = document.getElementById("pokedex");
const promises = [];  //this creates 'promises' array
  
//big boy fetch
const fetchPokemon = () => {

//gets URL for each pokemon and puts it in 'promises' array
for (let i = 1; i < 9; i++){
    promises.push(fetch(`${URL}${i}`)
    .then(res => res.json()))
}

//adds in all of the info for each pokemon into 'promises' array
Promise.all(promises).then(data => {

    const pokemon = data.map( (result, index) => ({
        name: result.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        apiURL: result.forms[0].url,
        type: result.types.map(type => type.type.name).join(', ')
    }))

    console.log(data)
    console.log(pokemon)
    displayPokemon(pokemon);
});
};

fetchPokemon();
//! The li was referenced in the HTML file tag as a <ul>, so I made updates so I could style via CSS
const displayPokemon = pokemon => {
    const pokemonHTML = pokemon.map ( poke => `
    <li class="card" onclick="selectPokemon(${poke.id})">
        <img class="card-image" src="${poke.image}"/>
        <h2 class="card-title" >${poke.id}. ${poke.name}</h2>
        <p class="card-subtitle">Type: ${poke.type}</p>
    </li>
    `)
    .join('');
    pokedex.innerHTML = pokemonHTML;
}

const selectPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch (url);
    const poke = await res.json();
    updatePicture(poke);
}

//updates the main picture to the one you click on
const updatePicture = (poke) => {
    mainImage.src = poke.sprites['front_default']   
}
