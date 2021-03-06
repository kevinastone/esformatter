'use strict';

var _br = require('rocambole-linebreak');
var _tk = require('rocambole-token');
var _ws = require('rocambole-whitespace');

var ImportDeclaration = require('./ImportDeclaration');

exports.format = function ExportNamedDeclaration(node) {
  _br.limitAfter(node.startToken, 0);
  _ws.limitAfter(node.startToken, 1);

  // node.specifiers is actually handled by the ExportSpecifier hook!

  if (!node.specifiers.length) return;

  var fromKeyword = _tk.findPrev(node.endToken, 'from');
  if (fromKeyword) {
    // safeguard against `export { foo, bar };` (no "from")
    _br.limit(fromKeyword, 0);
    _ws.limit(fromKeyword, 1);
  }
};

exports.getIndentEdges = ImportDeclaration.getIndentEdges;
