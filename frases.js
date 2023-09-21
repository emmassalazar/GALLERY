var myArray = [
    "«Nunca pinto sueños o pesadillas. Pinto mi propia realidad.» Frida Kahlo",
    "«No tengas miedo de la perfección, nunca la alcanzarás.» Salvador Dalí",
    "«El arte deriva de un deseo de la persona para comunicarse con otro.» Edvard Munch",
    "«Veo el arte y la literatura como un posible ensanchamiento de horizontes hacia la libertad.» Joan Brossa",
    "«Quería comenzar una revolución, usar el arte para construir el tipo de sociedad que yo misma imaginaba.» Yayoi Kusama",
    "«No hay arte sin transformación.» Robert Bresson",
    "«Todo arte es autobiográfico.» Federico Fellini",
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
  document.getElementById("frase").innerHTML=randomItem;