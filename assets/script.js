// Définition des diapositives
const slides = [
    {
      "image": "slide1.jpg",
      "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
      "image": "slide2.jpg",
      "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
      "image": "slide3.jpg",
      "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
      "image": "slide4.png",
      "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
  ];
  
  // Sélection des éléments du DOM
  const arrowLeft = document.querySelector('.arrow_left');
  const arrowRight = document.querySelector('.arrow_right');
  const dotsContainer = document.querySelector('.dots');
  const slideImage = document.querySelector('.banner-img');
  const slideText = document.querySelector('#banner p');
  const dots = [];
  
    // Ajout d'un event listener pour la flèche droite
    arrowRight.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % numberOfSlides;
      updateSlide(currentIndex);
    });
    
    // Ajout d'un event listener pour la flèche gauche
    arrowLeft.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + numberOfSlides) % numberOfSlides;
      updateSlide(currentIndex);
    });
    
  // Index de la diapositive actuelle
  let currentIndex = 0;
  
  // Fonction pour mettre à jour la diapositive
  function updateSlide(index) {
    const path = './assets/images/slideshow/';
  
    // Mettre à jour l'image
    slideImage.src = `${path}${slides[index].image}`;
  
    // Mettre à jour le texte
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
  
  // Nombre de diapositives
  const numberOfSlides = slides.length;
  
  // Création et ajout des bullet points au HTML
  for (let i = 0; i < numberOfSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dots.push(dot); // Ajouter le point au tableau des points
    dotsContainer.appendChild(dot);
  
    // Ajout d'un event listener pour chaque point
    dot.addEventListener('click', function () {
      currentIndex = i;
      updateSlide(currentIndex);
    });
  }
  
  // Appeler la fonction pour initialiser la première diapositive
  updateSlide(currentIndex);
  