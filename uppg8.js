

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const people = [
    {name:"Jeff", age:32},
    {name:"Britta", age:25},
    {name:"Annie", age:21},
    {name:"Troy", age:21},
    {name:"Pierce", age:74}
]

function overThirties () {
   for (person of people) {
    if (person.age > 30) {
        console.log(person.name)
    }
   }
}

overThirties(people)
}

module.exports = { uppg8 };