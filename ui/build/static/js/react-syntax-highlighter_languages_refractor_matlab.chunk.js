"use strict";
(globalThis["webpackChunkcreate_react_app"] = globalThis["webpackChunkcreate_react_app"] || []).push([["react-syntax-highlighter_languages_refractor_matlab"],{

/***/ "./node_modules/refractor/lang/matlab.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/matlab.js ***!
  \***********************************************/
/***/ ((module) => {



module.exports = matlab;
matlab.displayName = 'matlab';
matlab.aliases = [];

function matlab(Prism) {
  Prism.languages.matlab = {
    comment: [/%\{[\s\S]*?\}%/, /%.+/],
    string: {
      pattern: /\B'(?:''|[^'\r\n])*'/,
      greedy: true
    },
    // FIXME We could handle imaginary numbers as a whole
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
    keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
    function: /(?!\d)\w+(?=\s*\()/,
    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
    punctuation: /\.{3}|[.,;\[\](){}!]/
  };
}

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_matlab.chunk.js.map
