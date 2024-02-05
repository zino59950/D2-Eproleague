function toggleClasses() {
    var divJoueurs = document.getElementById('divJoueurs');
    
    // Inverser l'état de la classe 'hidden' pour montrer ou cacher les divs
    divJoueurs.classList.toggle('hidden');
    
    // Sélectionner toutes les divs enfants de divJoueurs et inverser leur état 'hidden'
    var enfantsDivJoueurs = divJoueurs.querySelectorAll('.hidden');
    enfantsDivJoueurs.forEach(function(div) {
        div.classList.toggle('hidden');
    });
}