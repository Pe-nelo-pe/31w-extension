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
    $contenu = "<div class = 'carrousel'>
                    <button class='btn_fermer'>X</button>
                    <button class='fleche gauche'>
                        <svg width='60px' height='80px' viewBox='0 0 50 80' xml:space='preserve'>
                        <polyline fill='none' stroke='#FFFFFF' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' points='45.63,75.8 0.375,38.087 45.63,0.375 '/>
                        </svg>  
                    </button> 
                    <button class='fleche droite'>
                    <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='60px' height='80px' viewBox='0 0 50 80' xml:space='preserve'>
                        <polyline fill='none' stroke='#FFFFFF' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' points='
                        0.375,0.375 45.63,38.087 0.375,75.8 '/>
                    </svg>
                    </button>
                    <figure class='carrousel__figure'>
                    </figure>
                    <form class='carrousel__form'></form>
                </div>";
    return $contenu;
}

add_shortcode("nelo_carrousel", "genere_boite");