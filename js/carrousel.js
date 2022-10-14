(function(){
   
    let elBtnModale = document.querySelector(".btn_modale");
    let elBtnFermer = document.querySelector(".btn_fermer");
    let elCarrousel = document.querySelector(".carrousel")

       /**Function Ouvre modal */
    elBtnModale.addEventListener("mousedown", function(){
        elCarrousel.classList.add("carrousel--ouvrir")
  
    } )

    /**Function Ferme modal */
    elBtnFermer.addEventListener("mousedown", function(){
        elCarrousel.classList.remove("carrousel--ouvrir")
 
    } )

})();