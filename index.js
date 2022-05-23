const pokeContainer = document.getElementById('poke_container');
// const poke_id = document.getElementById('poke-id');
const pokemonButton = document.getElementById('pokemon-search-button');


// async to fetch the API data in const pokemon
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);

    //eventListener when click on button it gets the value from the input and print on poke-container (page was refreshing constantly, so I added a preventDefault)
    pokemonButton.addEventListener("click", (e) =>{
        let value = document.getElementById('pokemon-search-input').value;

        pokeContainer.innerText = value;
        console.log(value);
        e.preventDefault();
        getPokemon();
    })


}


getPokemon();


    // pokemonButton.addEventListener("click", getPokemon)
    // {
    //     const name = document.getElementById('pokemon-search-input').value;
    //     getPokemon(name);
    //     console.log(name);
    // }







