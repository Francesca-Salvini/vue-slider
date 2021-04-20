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
        methods: {
            changePic() {
                this.nextPic();
            },
            nextPic() {
                const nxtImg = this.currentActive + 1;

                if ( nxtImg > this. carouselImages.length - 1 ) {
                    this.currentActive = 0;
                } else {
                    this.currentActive = nxtImg;
                }
            },

            prevPic() {
                const prevImg = this.currentActive - 1;
                if( prevImg < 0) {
                    this.currentActive = this.carouselImages.length - 1;
                } else {
                    this.currentActive = prevImg;
                }
            }
        },
        created() {
            
            setInterval( ( ) =>  {
                this.changePic();
            }, 3000);
                
            
        }
    }
);

