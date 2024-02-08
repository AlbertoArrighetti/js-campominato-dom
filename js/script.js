// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
// - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// -----------------------------------------------------------------------------------------
// TEST 




// -----------------------------------------------------------------------------------------


// prelevo il bottone 
const buttonElement = document.querySelector("#generateBtn");
// prelevo la tabella 
const gridElement = document.querySelector("#grid");


// prelevo l'elemento con le varie difficoltà
let selectedElement = document.getElementById("mySelect");


// al click genero la tabella 
buttonElement.addEventListener("click", 
    function(){

        // ogni volta che si preme il btn si elimina la griglia precedente
        gridElement.innerHTML = "";
        
        let gridNumber;

        // - con difficoltà 1
        if (selectedElement.value == "easy"){
            // 10 x 10 
            gridNumber = 100;

        // - con difficoltà 2
        }else if (selectedElement.value == "medium"){
            // 9 x 9
            gridNumber = 81;

        // - con difficoltà 3
        }else if (selectedElement.value == "hard"){
            // 7 x 7 
            gridNumber = 49;

        // Altrimenti se non si seleziona 
        }else{
            alert("Selezionare una difficoltà")
        }

        // aggiungo la classe alla griglia per selezionare quale quadrato prelevare 
        gridElement.className = selectedElement.value;

        // aggiungo la classe alla mia griglia 
        gridElement.classList.add("my_grid");




        // genero un array 
        const bombArray = []

        while (bombArray.length < 16){
            let randomNumber = Math.floor(Math.random() * gridNumber) + 1;

            if (!bombArray.includes(randomNumber)) {
                bombArray.push(randomNumber);
            }

        }
        console.log(bombArray);





        for (let i = 0; i < gridNumber; i++) {

            // creo un elemento con la classe my_square
            const newSquare = document.createElement("div");
            newSquare.classList.add("my_square");

            // gli inserisco il numero da 1 a 100 
            newSquare.innerHTML = i + 1;

                
            // lo inserisco nella griglia 
            gridElement.append(newSquare);


            // al click di questa casella aggiungi o rimuovi una classe 
            newSquare.addEventListener("click",
                function() {
                    this.classList.add("active_square");

                    // in console 
                    console.log(this.innerText);

                }
                )       
        }  
    }
)


// -----------------------------------------------------------------------------------------
// FUNZIONI



// genera un array di numeri della lunghezza che gli indico 
function getRandomNumbersArray(myNumber) {
    // crea l'array 
    const numbersArray = [];

    while (numbersArray.length < myNumber) {

        // inserisci il numero solo se non è già presente
        const newNumber = generateRandomNumber(myNumber);

        // controllo se il numero appena generato è già presente dentro il nostro array
        if( ! numbersArray.includes(newNumber) ) {
            // se non lo è lo inserisco 
            numbersArray.push(newNumber);
        }
    }

    return numbersArray;
}




