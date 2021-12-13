

//Variables
const URL = 'https://pokeapi.co/api/v2/pokemon-habitat/1'
console.log(URL)

//Element References
const $input = $('#input');
const $form = $('form');
const userInput = $input.val()


//Event Listeners
$form.on('submit', handleGetData);

//Functions

function handleGetData(evt) {
    evt.preventDefault();
    const userInput = $input.val();
    if (!userInput) return;
    $input.val('')
}

$.ajax(URL + userInput).then(function (data) {
    console.log(data)
    render(data);
}), function (error) {
    console.log('Somethings wrong')
    console.log(error);
}

function render(habitatData) {
    $('main').html(`
    <h3>Habitat: ${habitatData.name}</h3>
    <p>Pokemon: ${habitatData.pokemon_species}</p>
    `);
}



