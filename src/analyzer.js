const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //parto en espacios trae palabras
    return text
      .split(" ")
      .filter((palabra) => palabra !== "")
      .filter((palabra) => !/\d+/.test(palabra)).length;
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterNoSpacesCount: (text) => {
    return text.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, "").replace(/ /g, "")
      .length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const palabras = text
      .split(" ")
      .filter((palabra) => palabra !== "")
      .filter((palabra) => !/\d+/.test(palabra));
    let sumaLongitudes = 0;

    //recorre
    for (let i = 0; i < palabras.length; i++) {
      sumaLongitudes += palabras[i].length;
    }
    //esto calcula la longitud
    const longitudMedia = sumaLongitudes / palabras.length;
    if (Number.isNaN(longitudMedia)) {
      return 0;
    }
    return longitudMedia;
    //tarer la longitud de cada palabras y sumarla a una variable que inicie en 0 al final del for dividir en la cantidad de palabras
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\b-?\d+(\.\d+)?\b/g) || [];
    return numbers.length;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\b-?\d+(\.\d+)?\b/g) || [];

    return numbers.reduce((acc, number) => acc + parseFloat(number), 0);
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
