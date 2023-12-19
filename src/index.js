import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const userInput = document.querySelector('[name="user-input"]');
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector(
  '[data-testid="character-count"]'
);
const characterNoSpacesCount = document.querySelector(
  '[data-testid="character-no-spaces-count"]'
);
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector(
  '[data-testid="word-length-average"]'
);
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click",function(){
  userInput.value = ""
  const event = new Event("input");
  userInput.dispatchEvent(event);
})
if (userInput === null) {
  alert("ups, No encontre la entrada del usuario");
}
//add.... recibe 2 parametros el primero id de evento el segundo el manejador del evento

userInput.addEventListener("input", function () {
  // traer lo que el usurio metio en el 'userInput'
  const text = userInput.value;
  // obtengoo el contenido actual de 'wordCount', separarlo por ":" y obtener la primera parte
  // agrego el resultado del análisis de palabras realizado por 'analyzer.getWordCount(text)'
  wordCount.textContent =
    wordCount.textContent.split(":").at(0) + ": " + analyzer.getWordCount(text);
  characterCount.textContent =
    characterCount.textContent.split(":").at(0) +
    ": " +
    analyzer.getCharacterCount(text);

  characterNoSpacesCount.textContent =
    characterNoSpacesCount.textContent.split(":").at(0) +
    ": " +
    analyzer.getCharacterNoSpacesCount(text);

  numberCount.textContent =
    numberCount.textContent.split(":").at(0) +
    ": " +
    analyzer.getNumberCount(text);

  numberSum.textContent =
    numberSum.textContent.split(":").at(0) + ": " + analyzer.getNumberSum(text);

  wordLengthAverage.textContent =
    wordLengthAverage.textContent.split(":").at(0) +
    ": " +
    analyzer.getAverageWordLength(text);
});
