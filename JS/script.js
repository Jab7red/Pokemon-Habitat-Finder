//Variables
const link = 'https://pokeapi.co/api/v2/pokemon-habitat/'
console.log(link)

//Element References
const $input = $('input[type="text"]');
const $form = $('form');
const userInput = $input.val();

//Event Listeners
$form.on('submit', handleGetData);

//Functions
function handleGetData(evt) {
    evt.preventDefault();

    const userInput = $input.val()
    if (!userInput) return;
    $input.val('')

    $.ajax(link + userInput).then(function (data) {
        data.pokemon_species.forEach(pokemon => {
            const pokemonName = pokemon.name
            console.log(pokemonName)
        });
        render(data);
    }), function (error) {
        console.log('Somethings wrong')
        console.log(error);
    };


};

function render(habitatData) {
    $('main').html(`
    <h3>Habitat: ${habitatData.name} ID #${habitatData.id}</h3>
    <p>Pokemon: ${habitatData.pokemonName}</p>
    `);
};

//write a forEach method