
export default {
  entry: './package/index.js',
  format: 'umd',
  moduleName: '@nll/rxtras',
  dest: './package/bundle/rxtras.umd.js',
  sourceMap: true,
  external: id => ["rxjs"].reduce((p, c) => p || id.startsWith(c), false),
};
