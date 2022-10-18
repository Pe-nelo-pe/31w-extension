(function(){

// ------------------------------------------Elements carrousel
    //Conteneur principal carrousel
    let elCarrousel = document.querySelector(".carrousel");

    //Bouton temporaire - ouvrir carrousel
    let elBtnModale = document.querySelector(".btn_modale");

    //Bouton fermeture carrousel
    let elBtnFermer = document.querySelector(".btn_fermer");

    //Conteneur figure (ensemble des images)
    let elmCarrousel__figure = document.querySelector(".carrousel__figure")

    //Formulaire (ensemble des btn radios)
    let elmCarrousel__form = document.querySelector(".carrousel__form")


// ------------------------------------------Elements galerie

    //Conteneur de la galerie
    let elmGalerie = document.querySelector('.galerie')

    let elmGalerieImg = document.querySelectorAll(".galerie figure img")

    let index = 0;
    let dernierIndex = -1;

// ------------------------------------------ Étape 1 - parcourir les img de la galerie


    for (const img of elmGalerieImg){

       ajouter_img_carrousel(img)
       ajouter_btn_radio()

       /**Function Ouvre modal */
        elBtnModale.addEventListener("mousedown", function(){
           elCarrousel.classList.add("carrousel--ouvrir")
           // ajouter_elmImg(img);
  
        } )
    }

    /**Function Ferme modal */
    elBtnFermer.addEventListener("mousedown", function(){
        elCarrousel.classList.remove("carrousel--ouvrir")
 
    } )


    function ajouter_img_carrousel(img){
        //let elmImg 
        let elmCarrousel__figure__img = document.createElement('img') // création d'un élément img
        elmCarrousel__figure__img.setAttribute("src", img.getAttribute("src"))// on récupère l'adresse URL de l'image de la galerie
        elmCarrousel__figure__img.classList.add("carrousel__figure__img")// ajout d'une classe css
        //elmCarrousel__figure__img.dataset.index = index;  // ajout index pour matcher avec les radios 
        elmCarrousel__figure.appendChild(elmCarrousel__figure__img)// ajouter l'élément img dans le carrousel
console.log(elmCarrousel__figure__img.dataset.index);
    }

    // ----------------- Ajout btn radio
    function ajouter_btn_radio(){
        let elmCarrousel__form__radio = document.createElement("input");
        elmCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio')
        elmCarrousel__form__radio.setAttribute('class', 'carrousel__form__radio')
        elmCarrousel__form__radio.setAttribute('type', 'radio')
        elmCarrousel__form__radio.dataset.index = index;
        index++;
        elmCarrousel__form.appendChild(elmCarrousel__form__radio)


            // ------------- Event sur radio - affiche bonne image
        elmCarrousel__form__radio.addEventListener('mousedown', function(){
console.log(this.dataset.index);
//condition pour désactiver l'image d'avant
           // elmCarrousel__figure.children[this.dataset.dernierIndex].classList.remove("carrousel__figure__img--activer")
            elmCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer")
        })

    }

})();