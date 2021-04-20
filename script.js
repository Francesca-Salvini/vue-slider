// CONSEGNA

// ESERCIZIO: Creare uno slider di immagini
// BONUS: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

var app = new Vue(
    {
        el: '#root',
        data: {
            currentActive : 0,
            carouselImages: [
               'img/campagna.jpg',
               'img/cascate.webp',
               'img/fiori.jpeg',
               'img/montagne.webp'
            ],
        },
        methods: {},
        created() {}
    }
);

