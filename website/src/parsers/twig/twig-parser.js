import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'twig-parser/package.json';

const ID = 'twigParser';
const displayName = 'Twig Parser';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: displayName,
  version: pkg.version,
  homepage: pkg.homepage,
  locationProps: new Set(['loc']),

  loadParser(callback) {
    require(['twig-parser'], callback);
  },

  parse({ parse }, code) {
    return parse(code);
  },

  nodeToRange({loc}) {
    return [0, 1];
  },
}
