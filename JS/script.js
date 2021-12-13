console.log('JS is Working')

//Variables
const url = 'https://pokeapi.co/api/v2/pokemon-habitat/'
console.log(url)

//Element References
const $name = $('name');
const $input = $('#input');
const $form = $('form');
const userInput = $input.val()

//Event Listeners
$form.on('submit', handleGetData);

//Function

function handleGetData(evt) {
    evt.preventDefault();
    const userInput = $input.val();
    if (!userInput) return;
    $input.val('')
}

$.ajax(url + userInput).then(function (data) {
    console.log('Habitat')
    render(data);
}), function (error) {
    console.log('Somethings wrong')
    console.log(error);
}

function render(habitatData) {
    $('main').html(`
    <h3>Habitat: ${habitatData.name}</h3>
    <p id="name">Pokemon: ${habitatData.url}</p>
    `);
}


