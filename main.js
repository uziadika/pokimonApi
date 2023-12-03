async function ajaxRequest() {
    
    const response = await fetch("https://pokeapi.co/api/v2/pokemon") // לאן אני גולש
    console.log(response) // מדפיס את הפרומיס 

    const pokemons = await response.json() // מחלץ מתוך הפרומיס את המידע הרלוונטי
    console.log(pokemons) // מדפיס את כל המשתמשים

    displayPokemon(pokemons) // מדפיסה על המסך
}

function displayPokemon(pokemons) {
    console.log("pokemons")
    console.log(pokemons)
    const divResponse = document.getElementById("divResponse") // get the element\
    let html = "<ul>"
    for(const pokemon of pokemons.results) {
        const li = `
        <li> 
            Name: ${pokemon.name}
        </li>
        `
        html += li
    }
    html += "</ul>"
    divResponse.innerHTML = html
}


/*

    - fetch (לכתובת המיוחלת)
    - status check -  סטטוס הצלחה 200
    - convert response to json - .json()
    - display response with dynamic html

*/
