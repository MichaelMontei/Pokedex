# Pokedex

## Learning objectives
- see the TODO README file!

## Structured Steps with what I did.

- [X] Get the data from the API and console log
	- Made an Async function that fetches all data from the API and put that into a const pokemon.

- [X] Get to log only one pokemon in the console log
	- Changed the API link to https://pokeapi.co/api/v2/pokemon/bulbasaur to get the data from 1 pokemon into the console log.

- [X] Get the input from the user => when clicked on button show this in the poke_container.
	- Made a form in HTML to get input from user and button to search.
	- Made an eventListener to get the user input value and print the value inside the poke_container.
	- ERROR: the page automatically refresh?

- [X] Page automatically refreshes when the input shows on the poke_container
	- Found something called preventDefault() that you can add on an eventListener to prevent this from happening.

- [ ] Need to find a way how I can go through all pokemon and match the input field with that particular pokemon
	- So far I found that you can use template literals ${} with the API to pass certain data and push that inside the poke_container.
	- This part took me quite some time to figure out.
	- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

- [ ] Need a way to print the "template" containing (ID) (NAME) (IMG) (MOVES) (EVOLUTION) to the poke_container.
	