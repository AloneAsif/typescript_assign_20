// Question no 20 

let my_Fav_things = ['mount everset', 'chocolates', 'video games', 'paris', 'kaghan']

console.log(my_Fav_things)

for(let fav of my_Fav_things){
    console.log(fav)
}

// Question no 21  making objects

interface studentData{
    name: string
    age: number
    qualification: string
}

const studentOne: studentData = {
    name: 'asif',
    age: 23,
    qualification: 'intermediate'
}

const studentTwo: studentData = {
    name: 'yasir',
    age: 25,
    qualification: 'master'
}


console.log(`student name is ${studentOne.name} age is ${studentOne.age} and qualification is ${studentOne.qualification}`)
