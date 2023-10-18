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

// Sélection des éléments du DOM
let slidePosition = 0;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector("#banner .banner-img");
const bannerTxt = document.querySelector("#banner p");
const dots = document.querySelector(".dots");
const pathImg = "assets/images/slideshow/"

// Ecouter les flèches au clic

arrowLeft.addEventListener("click", function () {
	console.log("clic gauche");
	slidePosition = slidePosition - 1;
	if (slidePosition < 0) {
		slidePosition = slides.length - 1;
	}
	console.log("Position",slidePosition);
	modifySlide(slidePosition);
	bulletPoints();
})

arrowRight.addEventListener("click", () => {
	console.log("clic droit");
	slidePosition = slidePosition + 1;
	if (slidePosition > (slides.length - 1)) {
		slidePosition = 0;
	}
	console.log("Position",slidePosition);
	modifySlide(slidePosition);
	bulletPoints();
})


// Création d'une fonction appelée au clic pour modifier le slide

function modifySlide(id) {
	bannerTxt.innerHTML = slides[id].tagLine;
	bannerImg.src = pathImg + slides[id].image; // concaténer le chemin et l'image
}

function bulletPoints() {
	i=0;
	dots.innerHTML="";
	for (const point of slides) {
		console.log(i);
		if (i === slidePosition) {
			dots.innerHTML += "<div class='dot dot_selected'></div>";
		} else {
			dots.innerHTML += "<div class='dot'></div>";
		}
		i++;
	}
}

// Afficher la slide initiale
bulletPoints();
modifySlide(slidePosition);



