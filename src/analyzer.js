const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //parto en espacios trae palabras
    return text.split(" ").length;
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterNoSpacesCount: (text) => {
    return text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "").replace(/ /g, "")
      .length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text.split(" ");
    const palabras = text.split(" "); 
    for (const property in palabras) {
      console.log(`${property}: ${palabras[property]}`);
      
      //tarer la longitud de cada palabras y sumarla a una variable que inicie en 0 al final del for dividir en la cantidad de palabras 
    }
     
   
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
