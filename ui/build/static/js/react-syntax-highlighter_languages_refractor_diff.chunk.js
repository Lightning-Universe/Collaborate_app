"use strict";
(globalThis["webpackChunkcreate_react_app"] = globalThis["webpackChunkcreate_react_app"] || []).push([["react-syntax-highlighter_languages_refractor_diff"],{

/***/ "./node_modules/refractor/lang/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/diff.js ***!
  \*********************************************/
/***/ ((module) => {



module.exports = diff;
diff.displayName = 'diff';
diff.aliases = [];

function diff(Prism) {
  ;

  (function (Prism) {
    Prism.languages.diff = {
      coord: [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
      /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
      /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
      /^\d+.*$/m] // deleted, inserted, unchanged, diff

    };
    /**
     * A map from the name of a block to its line prefix.
     *
     * @type {Object<string, string>}
     */

    var PREFIXES = {
      'deleted-sign': '-',
      'deleted-arrow': '<',
      'inserted-sign': '+',
      'inserted-arrow': '>',
      unchanged: ' ',
      diff: '!'
    }; // add a token for each prefix

    Object.keys(PREFIXES).forEach(function (name) {
      var prefix = PREFIXES[name];
      var alias = [];

      if (!/^\w+$/.test(name)) {
        // "deleted-sign" -> "deleted"
        alias.push(/\w+/.exec(name)[0]);
      }

      if (name === 'diff') {
        alias.push('bold');
      }

      Prism.languages.diff[name] = {
        // pattern: /^(?:[_].*(?:\r\n?|\n|(?![\s\S])))+/m
        pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
        alias: alias
      };
    }); // make prefixes available to Diff plugin

    Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
      value: PREFIXES
    });
  })(Prism);
}

/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_diff.chunk.js.map
