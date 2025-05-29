

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

    const names = [
        "Jeff",
        "Annie",
        "Troy",
        "Shirley",
        "Pierce",
        "Abed",
        "Britta"
    ]

    for (name of names) {
        console.log(name)
    }
 
}

module.exports = { uppg6 };