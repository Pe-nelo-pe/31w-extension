(function(){

// ------------------------------------------Elements carrousel
    //Conteneur principal carrousel
    let elCarrousel = document.querySelector(".carrousel");

    //Bouton fermeture carrousel
    let elBtnFermer = document.querySelector(".btn_fermer");

    //Conteneur figure (ensemble des images)
    let elmCarrousel__figure = document.querySelector(".carrousel__figure")

    //Formulaire (ensemble des btn radios)
    let elmCarrousel__form = document.querySelector(".carrousel__form")

    let elBtnDroit = document.querySelector(".droite");
    let elBtnGauche = document.querySelector(".gauche");

  

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

       //Event listener sur les img de la galerie
       img.addEventListener('mousedown', function(){
            elCarrousel.classList.add("carrousel--ouvrir")
            elmCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer");
            elmCarrousel__form.children[this.dataset.index].checked = true;
            dernierIndex = this.dataset.index;
       })

     
      
    } 

    
    /**Function Ferme modal */
    elBtnFermer.addEventListener("mousedown", function(){
        elCarrousel.classList.remove("carrousel--ouvrir")

        if(dernierIndex != -1){ //condition pour désactiver l'image d'avant
            elmCarrousel__figure.children[dernierIndex].classList.remove("carrousel__figure__img--activer");
        }
    } )


    function ajouter_img_carrousel(img){
        img.dataset.index = index;
        let elmCarrousel__figure__img = document.createElement('img') // création d'un élément img
        elmCarrousel__figure__img.setAttribute("src", img.getAttribute("src"))// on récupère l'adresse URL de l'image de la galerie
        elmCarrousel__figure__img.classList.add("carrousel__figure__img")// ajout d'une classe css
        elmCarrousel__figure__img.dataset.index = index;  // ajout index pour matcher avec les radios 
        elmCarrousel__figure.appendChild(elmCarrousel__figure__img)// ajouter l'élément img dans le carrousel

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
            if(dernierIndex != -1){ //condition pour désactiver l'image d'avant
                elmCarrousel__figure.children[dernierIndex].classList.remove("carrousel__figure__img--activer");
            }
            elmCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__img--activer");
            dernierIndex = this.dataset.index;
        })
        elBtnDroit.addEventListener('mousedown', function(){
            //let elmCarrousel__figure = document.querySelector('.carrousel__figure')
            if(dernierIndex != -1){ //condition pour désactiver l'image d'avant
                elmCarrousel__figure.children[dernierIndex].classList.remove("carrousel__figure__img--activer");
            }
            console.log(elmCarrousel__figure.children[index]);
            elmCarrousel__figure.children[this.dataset.index].nextElementSibling.classList.add("carrousel__figure__img--activer");
            index++;
            dernierIndex = this.dataset.index;
    })
        
    }

})();