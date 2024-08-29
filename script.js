// Sélection des éléments du carrousel
const texts = document.querySelectorAll('.textCarousell, .carousellText2, .carousellText3');
const dots = document.querySelectorAll('.dot');

let position = 0;

const updateCarousel = (newPosition) => {
    position = newPosition;
    
    // Masquer tous les textes
    texts.forEach(text => text.classList.add('hidden'));
    
    // Afficher le texte actuel
    texts[position].classList.remove('hidden');
    
    // Mettre à jour les dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[position].classList.add('active');
}

// Ajout des événements sur les dots
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        updateCarousel(index);
    });
});

// Initialisation de l'affichage
updateCarousel(0);

// Menu hamburger
const button = document.querySelector(".hamburger__toggle");
button.addEventListener("click", () => {
    button.classList.toggle("toggled");
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-open');
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////ISOTOPE///////////////////////////////////////////////////////////////


  // Attendre que le DOM soit complètement chargé
  document.addEventListener('DOMContentLoaded', function() {
    // Initialiser Isotope
    var grid = document.querySelector('.grid');
    var iso = new Isotope(grid, {
      itemSelector: '.plats',  // Sélectionne l'élément à filtrer
      layoutMode: 'fitRows'
    });

    // Gérer les filtres
    var filtersElem = document.querySelector('#filters');
    filtersElem.addEventListener('click', function(event) {
      if (!event.target.matches('button')) {
        return;
      }
      var filterValue = event.target.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });

    // Ajouter la classe 'is-checked' sur le bouton actif
    var buttonGroups = document.querySelectorAll('.button-group');
    for (var i = 0; i < buttonGroups.length; i++) {
      var buttonGroup = buttonGroups[i];
      buttonGroup.addEventListener('click', function(event) {
        if (!event.target.matches('button')) {
          return;
        }
        var button = event.target;
        buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
        button.classList.add('is-checked');
      });
    }
  });



