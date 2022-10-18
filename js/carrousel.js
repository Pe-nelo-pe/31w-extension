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

    let elmGalerieImg = elmGalerie.querySelectorAll(".galerie figure img")


// ------------------------------------------ Étape 1 - parcourir les img de la galerie


    for (const img of elmGalerieImg){
       console.log(img.getAttribute("src"))

       ajouter_img_carrousel(img)
      // ajouter_btn_radio()

       /**Function Ouvre modal */
       // elBtnModale.addEventListener("mousedown", function(){
           // elCarrousel.classList.add("carrousel--ouvrir")
           // ajouter_elmImg(img);
  
        } //)
    //}

    /**Function Ferme modal */
    elBtnFermer.addEventListener("mousedown", function(){
        elCarrousel.classList.remove("carrousel--ouvrir")
 
    } )


    function ajouter_img_carrousel(img){
        //let elmImg 
        let elmCarrousel__figure__img = document.createElement('img') // création d'un élément img
        elmCarrousel__figure__img.setAttribute("src", img.getAttribute("src"))// on récupère l'adresse URL de l'image de la galerie
        elmCarrousel__figure__img.classList.add("carrousel__figure__img")// ajout d'une classe css
        elmCarrousel__figure.appendChild(elmCarrousel__figure__img)// ajouter l'élément img dans le carrousel

    //     elmCarrousel__figure.appendChild(elmImg) 
    //     elmImg.dataset.index = index // on index l'élément img pour pouvoir l'associé au bon radio bouton
    }

})();