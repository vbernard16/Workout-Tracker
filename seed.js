const muscleList = [
	'abdominals',
	'abductors',
	'adductors',
	'biceps',
	'calves',
	'chest',
	'forearms',
	'glutes',
	' hamstrings', // does the extra space here in the string through anything off ?
	'lats',
	'lower back',
	'middle back',
	'neck',
	'quadriceps',
	' traps', // does the extra space here in the string through anything off ?
	'triceps',
]

const fs = require('fs')

muscleList.map((muscle) => {
    const findExcercise = () => { // i'd move this function expression outside fo the map call back, ( that way it only gets defined once instead of n times )
        fetch('https://api.api-ninjas.com/v1/exercises?muscle=' + muscle, {
            method: 'GET',
            headers: { 
                'X-Api-Key': '',
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json'
            },
        })
        .then((result) => result.json())
        .then(async result => {
            await fs.writeFileSync(`${muscle}`+'.json', JSON.stringify(result), 'utf-8') // slick move here writing to a file as json. Now how about getting that data into the db ? 
        })
        .catch(error => console.log(error))
    }
    findExcercise() 
})
