"use strict";
(globalThis["webpackChunkcreate_react_app"] = globalThis["webpackChunkcreate_react_app"] || []).push([["react-syntax-highlighter_languages_refractor_actionscript"],{

/***/ "./node_modules/refractor/lang/actionscript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/actionscript.js ***!
  \*****************************************************/
/***/ ((module) => {



module.exports = actionscript;
actionscript.displayName = 'actionscript';
actionscript.aliases = [];

function actionscript(Prism) {
  Prism.languages.actionscript = Prism.languages.extend('javascript', {
    keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
  });
  Prism.languages.actionscript['class-name'].alias = 'function';

  if (Prism.languages.markup) {
    Prism.languages.insertBefore('actionscript', 'string', {
      xml: {
        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
        lookbehind: true,
        inside: {
          rest: Prism.languages.markup
        }
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_actionscript.chunk.js.map