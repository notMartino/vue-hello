function init() {

    new Vue({
        el: '.container',
        data: {
            testo: 'Ciao Mondo!',
            imgSrc: 'img/douglas-costa-0.jpg',
            cont: 0
        },
        methods: {
            imgSwitch: function () {
                if (this.cont >= 1) {
                    this.cont = 0;
                }else{
                    this.cont++;
                }
                this.imgSrc = 'img/douglas-costa-'+ this.cont  +'.jpg';
            }
        }
    });
}

$(init);