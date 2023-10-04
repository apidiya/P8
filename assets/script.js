const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Étape 2 : Ajoutez des Event Listeners sur les flèches 
// Sélection des éléments des flèches gauche et droite :je déclare une constante pour chaque fléche du document(page HTML) 
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Ajout des event listeners pour les clics sur les flèches
arrowLeft.addEventListener('click', function () {
	// code a executer a chaque clic
    console.log('Clic sur la flèche gauche');
});

arrowRight.addEventListener('click', function () {
    console.log('Clic sur la flèche droite');
});

// Étape 3: Ajoutez des bullet points au slider
// Je déclare la constante numberOfSlides qui va parcourir le tableau slides en début du code et définir le nombre d' éléments existants.
const numberOfSlides = slides.length;

// Sélection de l'élément où ajouter les points: on crée la constante dotsContainer en utilisant queryselector qui va selectionner tout les éléments contenant une classe .dots 
const dotsContainer = document.querySelector('.dots');

// Création et ajout des points au HTML en fonction du nombre de diapositives
for (let i = 0; i < numberOfSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
}

// Sélection de tous les points
const dots = document.querySelectorAll('.dot');

// Ajout d' un event listener pour chaque point
dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        // Code à exécuter lorsque le point est cliqué
        console.log('Clic sur le point', index + 1);
    });
});

// Ajoutez la classe "dot_selected" au premier point pour le différencier
dots[0].classList.add('dot_selected');


// Étape 4 : Modifiez le slide au clic sur le bouton
// Index de la diapositive actuelle
let currentIndex = 0;

// Fonction pour mettre à jour la diapositive
function updateSlide(index) {
    // Mettre à jour l'image
    const slideImage = document.querySelector('.banner-img');
    slideImage.src = `./assets/images/slideshow/${slides[index].image}`;

    // Mettre à jour le texte
    const slideText = document.querySelector('#banner p');
    slideText.innerHTML = slides[index].tagLine;

    // Mettre à jour la classe du bullet point actif
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Gérer le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= numberOfSlides) {
        currentIndex = 0;
    }
    updateSlide(currentIndex);
});

// Gérer le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = numberOfSlides - 1;
    }
    updateSlide(currentIndex);
});

// Appeler la fonction pour initialiser la première diapositive
updateSlide(currentIndex);