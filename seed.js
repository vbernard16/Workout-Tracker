const muscleList = [
    'abdominals',
    'abductors',
    'adductors',
    'biceps',
    'calves',
    'chest',
    'forearms',
    'glutes',
    ' hamstrings',
    'lats',
    'lower back',
    'middle back',
    'neck',
    'quadriceps',
    ' traps',
    'triceps'
]

const fs = require('fs')

muscleList.map((muscle) => {
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
            await fs.writeFileSync(`${muscle}`+'.json', JSON.stringify(result), 'utf-8')
        })
        .catch(error => console.log(error))
    }
    findExcercise()
})



