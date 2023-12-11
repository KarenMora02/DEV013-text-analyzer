import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const userInput = document.querySelector('[name="user-input"]');
const wordCount = document.querySelector('[data-testid="word-count"]');

if (userInput === null) {
  alert("ups, No encontre la entrada del usuario");
}
//add.... recibe 2 parametros el primero id de evento el segundo el manejador del evento

userInput.addEventListener("input", function () {
  // traer lo que el usurio metio en el 'userInput'
  const text = userInput.value;
  // obtengoo el contenido actual de 'wordCount', separarlo por ":" y obtener la primera parte
  // agrego el resultado del análisis de palabras realizado por 'analyzer.getWordCount(text)'
  wordCount.textContent = wordCount.textContent.split(":").at(0) + ": " + analyzer.getWordCount(text);
});
