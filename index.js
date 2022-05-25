const pokemonButton = document.getElementById('pokemon-search-button');
const url = `https://pokeapi.co/api/v2/pokemon/`;

// async to fetch the API data in const pokemons
async function getPokemon () {
    let value = document.getElementById('pokemon-search-input').value;
    const data = await fetch(`${url}${value}`);
    const response = await data.json();
    const evoData = await fetch (response.species.url);
    const evoResponse = await evoData.json();
    const chainData = await fetch (evoResponse.evolution_chain.url)
    const chainResponse = await chainData.json();
    const evolveToPokemon = chainResponse.chain.species.name;
    const evolveToPokemonTwo = chainResponse.chain.evolves_to[0].species.name;
    const evolveToPokemonThree = chainResponse.chain.evolves_to[0].evolves_to[0].species.name;
    console.log(response);
    console.log(evolveToPokemon);
    console.log(evolveToPokemonTwo);
    console.log(evolveToPokemonThree);


    const pokemonsArr = [];
    pokemonsArr.push(evolveToPokemon);
    pokemonsArr.push(evolveToPokemonTwo);
    pokemonsArr.push(evolveToPokemonThree);


    if(evolveToPokemon){
        console.log("no evolutions found");
    }else{

    }
    document.querySelector(".evolution").innerHTML = " ";
    if(evolveToPokemonTwo) {
        document.querySelector(".evolution").innerHTML += "Evolves into: " + evolveToPokemonTwo;
    }else{

    }

    if(evolveToPokemonThree === evolveToPokemonThree){
        document.querySelector(".evolution").innerHTML += "<br>Evolves into: " + evolveToPokemonThree;
    }else{

    }

    //console.log(response);
    //console.log(response.name, response.id, response.sprites, response.abilities[0].ability.name, response.moves[0].move.name, response.types[0].type.name);

    //had to rewrite this since some pokemon only have 1 move.
    document.querySelector(".name").innerHTML = "Name: " + response.name;
    document.querySelector(".id").innerHTML = "ID: " + response.id;
    document.querySelector(".types").innerHTML = "Types: " + response.types[0].type.name;
    document.querySelector(".abilities").innerHTML = "Abilties: " + response.abilities[0].ability.name;

    addImage();
    moves();


    function addImage() {
        let pic = document.querySelector(".sprites");
        let img = new Image(200, 200);
        img.src = response.sprites.front_shiny;
        pic.innerHTML = '';
        pic.appendChild(img);
    }


    //some Pokemons only have 1 move
    function moves() {
        const move = [];

        if (response.moves.length === 1) {
            move.push(response.moves[0].move.name);
            document.querySelector(".moves").textContent = "Moves: " + move;
        } else {
            for (let i = 0; i < 4; i++) {
                move.push(response.moves[i].move.name);
            }
            document.querySelector(".moves").textContent = "Moves: " + move;
        }
    }


    // document.querySelector(".stats").innerHTML = `
    //     <div id="stats">
    //         <h2>Name: ${response.name}</h2><br><h2>ID: ${response.id}</h2>
    //         <img src="${response.sprites.front_shiny}" alt="pokemon">
    //         <p>Abilities: <h3>${response.abilities[0].ability.name}, ${response.abilities[1].ability.name}</h3></p><br>
    //         <p>Moves: <h3>${response.moves[0].move.name}</h3></p>
    //         <p>Types: <h3>${response.types[0].type.name}</h3></p>
    //     </div>
    // `;

}
//eventListener when click on button it gets the value from the input and print on poke-container (page was refreshing constantly, so I added a preventDefault)
    pokemonButton.addEventListener("click", (e) => {
        let value = document.getElementById('pokemon-search-input').value;
        e.preventDefault();
        getPokemon();

    });








