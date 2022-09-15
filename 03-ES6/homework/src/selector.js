//const TemplateGlob = require("@11ty/eleventy/src/TemplateGlob");

var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  // if (typeof startEl === "undefined") {
  //   startEl = document.body;
  // }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if(matchFunc(startEl)) resultSet.push(startEl);

  //recorrer los hijos
  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet,...result];
  }
  console.log('esto es resultSet: ', resultSet);
  // TU CÓDIGO AQUÍ
  return resultSet;
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0]==='#') return 'id';
  if (selector[0]==='.') return 'class';
  if (selector.includes(".")) return 'tag.class';
    // o se puede hacer un for para iterar sobre selector y detectar un (.)
  return 'tag';
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(el){
    return '#' + el.id === selector;
   }
  } else if (selectorType === "class") {
    matchFunction = function(el){
      for(let i=0; i < el.classList.length;i++){
       if('.' + el.classList[i] === selector) return true;
      }
      return false;
   }    
  
  } else if (selectorType === "tag.class") {
    matchFunction = function(el){
      let [t, c] = selector.split('.')
      //recursion 
      return matchFunctionMaker(t)(el) && matchFunctionMaker('.' + c)(el)
    }

  } else if (selectorType === "tag") {
    matchFunction = function(el){
      return el.tagName === selector.toUpperCase();
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
