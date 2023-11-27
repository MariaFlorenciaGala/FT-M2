var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet//matchien es que encuentre coincidencias o cumpla con ciertos parámetros
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  const traverse = function(element){
    if(matchFunc(element)){
      resultSet.push(element)
    //recorro los hijos
    const children = element.children;
    for(let i = 0 ; i< children.length; i++){
      traverse(children[i]);//llamo recursivamente los hijos
  }
}
}
  traverse(startEl);
  return resultSet;
};


// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
selector = '#price';
var selectorTypeMatcher = function (selector) {
  // tu código aquí
if (selector.startsWith('#')) {
      return 'id'
    } else if (selector.startsWith('.') && selector.indexOf('.') !== selector.lastIndexOf('.')) {
      return 'tag.class'; // Contiene al menos dos puntos (indicando tag.class)
    } else if (selector.startsWith('.')) {
      return 'class';
    } else if (selector.includes('.')) {
      return 'tag.class'; // No comienza con punto pero tiene un punto (indicando tag.class)
    } else {
      return 'tag';
    }
  };
  console.log(selector)
// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function(element){
      return element.id === selector.slice(1)
    }
   } else if (selectorType === "class") {
    matchFunction = function(element){
      return element.classList.contains(selector.slice(1));
    }
  } else if (selectorType === "tag.class") {
    var [tag, className] = selector.split('.')
    matchFunction = function(element){
      return element.tagName.toLowerCase() === tag && element.classList.contains(className)
    }
  } else if (selectorType === "tag") {
    matchFunction = function (element){
      return element.tagName.toLowerCase() === selector.toLowerCase()
    }

  }
  return matchFunction;
};


var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc, document.body);
  return elements;
};
