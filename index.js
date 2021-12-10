const poke_container = document.querySelector('#poke_container')
const pokemons_number = 150;
const typeColors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
};

const mainTypes = Object.keys(typeColors);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
        await fetchAPokemon(i);
    }
}

const fetchAPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokeCard(pokemon);
}
fetchPokemons();

function createPokeCard(pokemon) {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    
    const poke_types = pokemon.types.map(data => data.type.name)
    const type = mainTypes.find(type => poke_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = typeColors[type];
    pokemonElement.style.backgroundColor = color;

    const pokeInnerHTML = `
        <div class='img-container'>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png'
        </div>
        <div class='info'>
            <h3 class='name'>${name}</h3>
            <small class='type'>Type: <span>${type}</span></small>
        </div>
        <span class='number'>#${pokemon.id.toString().padStart(3, '0')}</span>
    `;
    pokemonElement.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonElement);
}


//----------------------SCROLL TO TOP BUTTON--------------//

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




//-------------ADDED FROM ORIGINAL PROJECT---------------//

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
