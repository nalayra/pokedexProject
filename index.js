const poke_container = document.querySelector('#poke_container')
const pokemons_number = 251;
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
    <div class='img-container' onclick="selectPokemon(${pokemon.id})">
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

const selectPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch (url);
    const poke = await res.json();
    displayPopup(poke)
}

const displayPopup = pokeman => {
    const type = pokeman.types.map((type) => type.type.name).join(', ');
    const htmlString = `
    <div class="popup">
        <button id="closeBtn" onclick="closePopup()">Close</button>
        <div class="card">
            <img class="card-image" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeman.id}.png' />
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p><small>Height: </small> ${pokeman.height} 
             | <small>Weight: </small> ${pokeman.weight} 
             | <small>Type: </small> ${type}
        </div>
    </div>
`;
    poke_container.innerHTML = htmlString + poke_container.innerHTML;
    console.log(htmlString)
}

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
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
