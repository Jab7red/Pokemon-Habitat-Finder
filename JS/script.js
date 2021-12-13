console.log('JS is Working')

const url = 'https://pokeapi.co/api/v2/pokemon-habitat/'
console.log(url)

$.ajax(url).then(function(data) {
    console.log(data)
})

