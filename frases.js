var myArray = [
    "«Nunca pinto sueños o pesadillas. Pinto mi propia realidad.» Frida Kahlo",
    "«No tengas miedo de la perfección, nunca la alcanzarás.» Salvador Dalí",
    "«El arte deriva de un deseo de la persona para comunicarse con otro.» Edvard Munch",
    "«Veo el arte y la literatura como un posible ensanchamiento de horizontes hacia la libertad.» Joan Brossa",
    "«Quería comenzar una revolución, usar el arte para construir el tipo de sociedad que yo misma imaginaba.» Yayoi Kusama",
    "«No hay arte sin transformación.» Robert Bresson",
    "«Todo arte es autobiográfico.» Federico Fellini",
    "«El arte no cambia nada, el arte te cambia a ti.» David Lynch",
    "«El arte es lo que resiste: resiste a la muerte, a la servidumbre, a la infamia, a la vergüenza.» Gilles Deleuze",
    "«El papel del artista es hacer preguntas, no responderlas.» Anton Chejov",
    "«La arquitectura es música congelada.» Arthur Schopenhauer",
    "«La belleza artística no consiste en representar una cosa bella, sino en la bella representación de una cosa.» Immanuel Kant",
    "«La observación de la naturaleza y la meditación han generado el arte.» Cicerón",
    "«En el arte como en el amor la ternura es lo que da la fuerza.» Oscar Wilde",
    "«Sin arte la vida sería un error.» Friedrich Nietzsche",
    "«El arte debe confortar a los enfadados y enfadar a los acomodados.» Bansky"

  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
  document.getElementById("frase").innerHTML=randomItem;