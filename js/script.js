
// La partita termina quando il giocatore clicca su una bomba 
// o quando raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

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



        // mostro in pagina le caselle azzeccate 
        // inizializzo lo score a zero 
        let score = 0;

        // genero un array 
        const bombArray = []

        while (bombArray.length < 16){
            let randomNumber = Math.floor(Math.random() * gridNumber) + 1;

            if (!bombArray.includes(randomNumber)) {
                bombArray.push(randomNumber);
            }

        }

        for (let i = 0; i < gridNumber; i++) {

            // creo un elemento con la classe my_square
            const newSquare = document.createElement("div");
            newSquare.classList.add("my_square");

            // gli inserisco il numero da 1 a 100 
            newSquare.innerHTML = i + 1;

            if(bombArray.includes(i)){
                // se il numero è presente gli aggiungo la classe bomb 
                newSquare.classList.add("bomb");
            }




            // lo inserisco nella griglia 
            gridElement.append(newSquare);


            // al click di questa casella aggiungi o rimuovi una classe 
            newSquare.addEventListener("click",
                function() {
                    
                    // se è una bomba 
                    if(this.classList.contains("bomb")){
                        // allora aggiungo lo sfondo rosso
                        this.classList.add("defeat");

                        // blocco le azioni sulla griglia  
                        gridElement.classList.add("grid-block");
                    }else {
                        
                        // altrimenti coloro la casella 
                        this.classList.add("active_square");
                        // e le blocco 
                        newSquare.classList.add("square-block")

                        // aggiungo un punto 
                        score = score + 1;
                        
                        document.getElementById("result").innerText = "Il tuo punteggio è: " + score;
                        
                    }

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




