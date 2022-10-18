<?php

/**
package Carrousel
Version 1.0.0
*/

/**
Plugin Name: nelo_carrousel 
Version 1.0.0
*/

// filemtime();  // retourne en milliseconde le temps de la dernière sauvegarde
// plugin_dir_path(); // retourne le chemin du répertoire du plugin
// __FILE__ ;// le fichier en train de s'exécuter
// wp_enqueue_style(); // Intègre le link:css dans la page
// wp_enqueue_script(); // intègre le script dans la page
// wp_enqueue_scripts();

function neloc_enqueue(){
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style("neloc_style_carrousel",
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css,
                     false);
    wp_enqueue_script("neloc_js_carrousel",
                     plugin_dir_url(__FILE__) . "js/carrousel.js",
                     array(),
                     $version_js,
                     true);
}

add_action("wp_enqueue_scripts", "neloc_enqueue");

function genere_boite(){
    $contenu = "<button class='btn_modale'> Boîte modale </button>
                <div class = 'carrousel'>
                    <button class='btn_fermer'>X</button>
                    <figure class='carrousel__figure'>
                    </figure>
                    <form class='carrousel__form'></form>
                </div>";
    return $contenu;
}

add_shortcode("nelo_carrousel", "genere_boite");