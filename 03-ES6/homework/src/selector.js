var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ
const allElements = document.getElementsByTagName("*");
for (let elements of allElements) {
  if (matchFunc(elements)){resultSet = [...resultSet, elements]}
}
  return resultSet
}
// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  return [...selector][0]==='#'?'id':[...selector][0]==='.'?'class':[...selector].includes('.', 1)?'tag.class':'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (element)=>{
      return ('#'+ element.id) === selector
    };
  } else if (selectorType === "class") {
    matchFunction = (element)=>{
      let classes = element.className.split(/(\s+)/).filter( e => e.trim().length > 0)
      return classes.map(v=>'.'+v).includes(selector)
    };
  } else if (selectorType === "tag") {
    matchFunction = (element)=>{
      return (element.localName) === selector
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (element)=>{//element = img.thumbnail
      let selectors = selector.split(/,|\./)
      let classes = element.className.split(/(\s+)/).filter( e => e.trim().length > 0);
      return (element.localName === selectors[0]) && (classes.includes((selectors[1])))
    };
  } 
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
