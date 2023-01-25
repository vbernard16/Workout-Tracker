let muscle = 'traps'

const fs = require('fs')


const findExcercise = () => {
    fetch('https://api.api-ninjas.com/v1/exercises?muscle=' + muscle, {
        method: 'GET',
        headers: { 
            'X-Api-Key': 'tJMdYgOIxjC1C4hooOO97Q==4l0sIKX6GjLneaYj',
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        },
    })
    .then((result) => result.json())
    .then(async result => {
        await fs.writeFileSync('traps.json', JSON.stringify(result), 'utf-8')
    })
    .catch(error => console.log(error))
}

findExcercise()