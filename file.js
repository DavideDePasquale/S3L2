/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
      
       const changeTitle = function (){ 
      h1 = document.querySelector("h1");
      console.dir(h1);
      h1.innerText = "ciao Davide";};
      changeTitle(); 

      /* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */
     const addClassToTitle = function () {
         let title = document.querySelector("h1");
         title.classList.add('myHeading');
     }
      addClassToTitle();

      /* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

     /*          const changePcontent = function (newtext) {
            const parag = document.querySelectorAll("div p");
            parag.forEach(function(p){ 
             p.innerText = newtext
            ;});}
            changePcontent("ciao a tutti");         fatto con chatGPT           */
    


      /* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

      const changeUrls = function () {
        let newLink = document.querySelector("a");
        newLink.href= "https://www.google.com";};
        changeUrls();





      /* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

      const addToTheSecond = function () {
      let newLi = document.getElementById("secondList");
      let newElement = document.createElement("li");
      newElement.innerText = "Nuovo Elemento";
      newLi.appendChild(newElement);}
      addToTheSecond();




      /* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

      const addParagraph = function () {
          const fisrtDiv = document.querySelector("div");
          const newAddPar = document.createElement("p");
           newAddPar.innerText="Questo è un nuovo paragrafo aggiunto al primo div";
           fisrtDiv.appendChild(newAddPar)
        }
        addParagraph();
 


      /* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

      const hideFirstUl = function () {
     const firstUl = document.querySelector("ul");
     firstList.onclick = function() {
       firstList.remove();
     }
    }
     hideFirstUl();




      /* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

     /* const paintItGreen = function () {
      const lists = document.querySelectorAll("ul");
       lists.forEach(list => { 
        lists.style.backgroundcolor="green";
       })
       }
       paintItGreen(); */




      /* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

      const makeItClickable = function () {
       let h1 = document.querySelector("h1");
       h1.addEventListener("click", function() {
            h1.textContent=h1.textContent.slice(0,-1);
                        });
       };
       makeItClickable()

      /* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

      const revealFooterLink = function () {}

      /* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

      const generateTable = function () {}

      /* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

      const addRow = function () {}

      /* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

      const hideAllImages = function () {}

      /* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

      function getRandomColor (){
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i=0; i<6; i++){
            color += letters[Math.floor(Math.random()*16)]
        }
        return color;
      }

      document.addEventListener("DOMContentLoaded", function(){
        const h2 = document.getElementById("Cambia colore");
        h2.addEventListener("click", function() {
            h2.style.color = getRandomColor();
        })
      });
      getRandomColor()