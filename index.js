const pokeContainer = document.getElementById('stats');
const pokemonButton = document.getElementById('pokemon-search-button');
const url = `https://pokeapi.co/api/v2/pokemon/`;
const url2 = 'https://pokeapi.co/api/v2/pokemon-species/';

// async to fetch the API data in const pokemon
async function getPokemon () {
    const value = document.getElementById('pokemon-search-input').value;
    const data = await fetch(`${url}${value}`);
    const response = await data.json();
    console.log(response);
    console.log(response.name, response.id, response.sprites, response.abilities[0].ability.name, response.moves[0].move.name, response.types[0].type.name);

    //had to rewrite this since som pokemon only have 1 move.
    let name = document.querySelector(".name").innerHTML = "Name: "  + response.name;
    let id = document.querySelector(".id").innerHTML = "ID: "  + response.id;
    let type = document.querySelector(".types").innerHTML = "Types: "  + response.types[0].type.name;
    let abilities = document.querySelector(".abilities").innerHTML = "Abilties: "  + response.abilities[0].ability.name;

    addImage();
    moves();


    function addImage(){
        let pic = document.querySelector(".sprites");
        let img = new Image(200, 200);
        img.src = response.sprites.front_shiny;
        pic.innerHTML ='';
        pic.appendChild(img);
    }

    //some Pokemons only have 1 move
    function moves (){
        const move = [];

        if (response.moves.length === 1){
            move.push(response.moves[0].move.name);
            document.querySelector(".moves").textContent="Moves: " + move;
        }else{
            for (let i = 0; i < 4; i++) {
                move.push(response.moves[i].move.name);
            }
            console.log(move)
            document.querySelector(".moves").textContent="Moves: " + move;
        }}


    // async function getEvolution () {
    //     const evolutionData = await fetch(url2) + response.name;
    //     const evolutionResponse = await evolutionData.json();
    //     console.log(evolutionResponse);




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
    pokemonButton.addEventListener("click", (e) =>{
        let value = document.getElementById('pokemon-search-input').value;
        e.preventDefault();
        getPokemon();

    })

getPokemon();








