const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lkeUrl= `${API_URL}${PEOPLE_ULR.replace(':id',1)}`
const opts = { crossDomain: true}

$.get(lkeUrl, opts, function(luke){
    console.log(`Hola yo soy, ${luke.name}`)
})

