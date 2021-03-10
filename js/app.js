var bad_answer = 0;
var you_win = 0;
var ismap = false;

var activity = {

  // Escenarios //---------------------------------------------------------------
  escenarios : function() {
    ismap = false;
    $('#activity').load('./htmls/escenarios.html');
  },

// Escenario 1-Perdida Intergaláctica //---------------------------------------------------------------

  popupA : function() {
    ismap = false;
    $('#activity').load('./htmls/perdida-intergalactica/pop-up-perdida-destruccion-h.html');
  },

  popupNeutralizadorA : function() {
    ismap = false;
    $('#activity').load('./htmls/perdida-intergalactica/pop-up-perdida-neuralizador-h.html');
  },

  perdidaIntergalactica : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-v.html');
    } else {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica.html');
    }
  },

  perdidaIntergalactica2 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-2-v.html');
    } else {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-2-h.html');
    }
  },

  perdidaIntergalactica3 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-3-v.html');
    } else {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-3-h.html');
    }
  },
  perdidaIntergalactica4 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-4-v.html');
    } else {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-4-h.html');
    }
  },

  perdidaIntergalactica5 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-5-v.html');
    } else {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-5-h.html');
    }
  },

  perdidaIntergalactica6 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-6-v.html');
    } else {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-6-h.html');
    }
  },

  perdidaIntergalactica7 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-7-v.html');
    } else {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-7-h.html');
    }
  },

  perdidaIntergalactica8 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-8-v.html');
    } else {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-8-h.html');
    }
  },

  // Escenario 2-Contacto alienigena //---------------------------------------------------------------

  popupB : function() {
    ismap = false;
    $('#activity').load('./htmls/contacto-alienigena/pop-up-perdida-destruccion-b-h.html');
  },

  popupNeutralizadorB : function() {
    ismap = false;
    $('#activity').load('./htmls/contacto-alienigena/pop-up-perdida-neuralizador-b-h.html');
  },

  contactoAlienigena : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-1-v.html');
    } else {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-1-h.html');
    }
  },
  contactoAlienigena2 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-2-v.html');
    } else {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-2-h.html');
    }
  },

  contactoAlienigena3 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-3-v.html');
    } else {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-3-h.html');
    }
  },

  contactoAlienigena4 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-4-v.html');
    } else {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-4-h.html');
    }
  },

  contactoAlienigena5 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-5-v.html');
    } else {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-5-h.html');
    }
  },

  contactoAlienigena6 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-6-v.html');
    } else {
      $('#activity').load('./htmls/contacto-alienigena/contacto-alienigena-6-h.html');
    }
  },
  
  // Escenario 2-PErdida Informacion //---------------------------------------------------------------

  popupC : function() {
    ismap = false;
    $('#activity').load('./htmls/informacion-perdida/pop-up-perdida-destruccion-c-h.html');
  },

  popupNeutralizadorC : function() {
    ismap = false;
    $('#activity').load('./htmls/informacion-perdida/pop-up-perdida-neuralizador-c-h.html');
  },

  perdidaInformacion : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-1-v.html');
    } else {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-1-h.html');
    }
  },

  perdidaInformacion2 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-2-v.html');
    } else {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-2-h.html');
    }
  },

  perdidaInformacion3 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-3-v.html');
    } else {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-3-h.html');
    }
  },

  perdidaInformacion4 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-4-v.html');
    } else {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-4-h.html');
    }
  },

  perdidaInformacion5 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-5-v.html');
    } else {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-5-h.html');
    }
  },

  perdidaInformacion6 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-6-v.html');
    } else {
      $('#activity').load('./htmls/informacion-perdida/informacion-perdida-6-h.html');
    }
  },

  // Escenario 4-Ayuda Extraterrestre //---------------------------------------------------------------

  popupD : function() {
    ismap = false;
    $('#activity').load('./htmls/ayuda-extraterrestre/pop-up-perdida-destruccion-d-h.html');
  },

  popupNeutralizadorD : function() {
    ismap = false;
    $('#activity').load('./htmls/ayuda-extraterrestre/pop-up-perdida-neuralizador-d-h.html');
  },

  ayudaExtraterrestre : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-1-v.html');
    } else {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-1-h.html');
    }
  },

  ayudaExtraterrestre2 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-2-v.html');
    } else {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-2-h.html');
    }
  },

  ayudaExtraterrestre3 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-3-h.html');
    } else {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-3-h.html');
    }
  },

  ayudaExtraterrestre4 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-4-v.html');
    } else {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-4-h.html');
    }
  },

  ayudaExtraterrestre5 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-5-v.html');
    } else {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-5-h.html');
    }
  },

  ayudaExtraterrestre6 : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-6-v.html');
    } else {
      $('#activity').load('./htmls/ayuda-extraterrestre/ayuda-extraterrestre-6-h.html');
    }
  },

/*   map : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica-v.html');
    } else {
      $('#activity').load('./htmls/perdida-intergalactica/perdida-intergalactica.html');
    }
  }, */

  // Cover //-------------------------------------------------------------------
  cover : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/cover.html');
  },

  //  Game over //--------------------------------------------------------------
  game_over_bien : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/game-over-bien.html');
  },
  game_over_mal : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/game-over-mal.html');
  },

   // Map //---------------------------------------------------------------------
/*   map : function() {
    ismap = true;
    var isvertical = screen.height > screen.width ? true : false;
    if(isvertical) {
      $('#activity').load('./htmls/map-vertical.html');
    } else {
      $('#activity').load('./htmls/map-horizontal.html');
    }
  }, */

};

$(window).resize(function(){
  if(ismap) {
    activity.map();
  } else {
    ismap = false;
  }
});

let reproductor = document.getElementById("correcto")
boton.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio")
  etiquetaAudio.setAttribute("src", "./res/pm3/correcto.mp3")
  etiquetaAudio.play()
})
