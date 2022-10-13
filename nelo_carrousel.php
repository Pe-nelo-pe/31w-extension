<?php

/**
package Carrousel
Version 1.0.0
*/

/**
Plugin Name: nelo_carrousel 
Version 1.0.0
*/

function genere_boite(){
    $contenu = "
    <style>
        .carrousel{
            border: 2px solid black;
            background-color: green;
            heigth: 200px;
            padding: 25px;
        }
    </style>
    <div class = 'carrousel'>Carrousel</div>";
    return $contenu;
}

add_shortcode("nelo_carrousel", "genere_boite");