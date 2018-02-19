var Game_Over={
  preload: function(){
    juego.stage.backgroundColor = '#fff';
    juego.load.image('boton','img/btn.png');
  },
  create: function(){
    var boton = this.add.button(juego.width/2, juego.height/2, 'boton', this.iniciarJuego, this);
    boton.anchor.setTo(0.5);

    var txtTitle = juego.add.text(juego.width/2, juego.height/2-200, "Juego Terminado", {font: "bold 36px sans-serif", fill:"#000", align:"center"});
    txtTitle.anchor.setTo(0.5);

    var txtEtiquetaPuntos = juego.add.text(juego.width/2+10, juego.height/2-150, " puntos", {font: "bold 24px sans-serif", fill:"#000", align:"center"});
    txtEtiquetaPuntos.anchor.setTo(0.5);

    if(puntos==-1)
        puntos=0;
    var txtPuntos = juego.add.text(juego.width/2-42, juego.height/2-150, puntos.toString(), {font: "bold 24px sans-serif", fill:"#000", align:"center"});
    txtPuntos.anchor.setTo(0.5);

    var txtIniciar = juego.add.text(juego.width/2, juego.height/2-100, "¿Reiniciar juego?", {font: "bold 24px sans-serif", fill:"#000", align:"center"});
    txtIniciar.anchor.setTo(0.5);
  },
  iniciarJuego: function(){
    this.state.start('Juego'); 
  }  
};