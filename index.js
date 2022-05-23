const pokeContainer = document.getElementById('stats');
const pokemonButton = document.getElementById('pokemon-search-button');
const url = `https://pokeapi.co/api/v2/pokemon/`;

// async to fetch the API data in const pokemon
async function getPokemon () {
    const value = document.getElementById('pokemon-search-input').value;
    const data = await fetch(`${url}${value}`);
    const response = await data.json();
    console.log(response.name, response.id, response.sprites, response.abilities[0].ability.name, response.moves[0].move.name);

//insert all the data into the querySelector, some pokemon have 80+ moves...

    document.querySelector(".stats").innerHTML = `
        <div id="stats">
            <h3>Name: ${response.name}</h3><h3>ID: ${response.id}</h3>
            <img src="${response.sprites.front_default}" alt="pokemon">
            <h3>Abilities: ${response.abilities[0].ability.name}</h3>
            <h3>Moves: ${response.moves[0].move.name}, ${response.moves[1].move.name}, ${response.moves[2].move.name}, ${response.moves[3].move.name}</h3>
        </div>
    `;
}

//eventListener when click on button it gets the value from the input and print on poke-container (page was refreshing constantly, so I added a preventDefault)
    pokemonButton.addEventListener("click", (e) =>{
        let value = document.getElementById('pokemon-search-input').value;
        e.preventDefault();
        getPokemon();
    })

getPokemon();


    // pokemonButton.addEventListener("click", getPokemon)
    // {
    //     const name = document.getElementById('pokemon-search-input').value;
    //     getPokemon(name);
    //     console.log(name);
    // }







