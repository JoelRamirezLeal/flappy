var Menu = {

    preload: function(){
        juego.stage.backgroundColor = '#fff';
        juego.load.image('boton','img/btn.png');
    },

    create:function(){
        var boton = this.add.button(juego.width/2, juego.height/2, 'boton', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);

        var txtTitle = juego.add.text(juego.width/2, juego.height/2-150, "Flappy Bird", {font: "bold 36px sans-serif", fill:"#000", align:"center"});
        txtTitle.anchor.setTo(0.5);

        var txtIniciar = juego.add.text(juego.width/2, juego.height/2-100, "Inicia el juego", {font: "bold 24px sans-serif", fill:"#000", align:"center"});
        txtIniciar.anchor.setTo(0.5);
    },

    iniciarJuego: function(){
        this.state.start('Juego');
    }
}