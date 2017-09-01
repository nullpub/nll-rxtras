
export default {
  entry: './package/index.js',
  format: 'es',
  dest: './package/bundle/rxtras.es5.js',
  sourceMap: true,
  external: id => ["rxjs"].reduce((p, c) => p || id.startsWith(c), false)
};
