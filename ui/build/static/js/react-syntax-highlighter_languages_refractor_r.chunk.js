"use strict";
(globalThis["webpackChunkcreate_react_app"] = globalThis["webpackChunkcreate_react_app"] || []).push([["react-syntax-highlighter_languages_refractor_r"],{

/***/ "./node_modules/refractor/lang/r.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/r.js ***!
  \******************************************/
/***/ ((module) => {



module.exports = r;
r.displayName = 'r';
r.aliases = [];

function r(Prism) {
  Prism.languages.r = {
    comment: /#.*/,
    string: {
      pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'percent-operator': {
      // Includes user-defined operators
      // and %%, %*%, %/%, %in%, %o%, %x%
      pattern: /%[^%\s]*%/,
      alias: 'operator'
    },
    boolean: /\b(?:TRUE|FALSE)\b/,
    ellipsis: /\.\.(?:\.|\d+)/,
    number: [/\b(?:NaN|Inf)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],
    keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
    punctuation: /[(){}\[\],;]/
  };
}

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_r.chunk.js.map
