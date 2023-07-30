const path = require('path')
const NpmDtsPlugin = require('npm-dts-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
    },
  },
  output: {
    filename: 'component-library.js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/lib',
    library: {
      type: 'commonjs2',
    },
    globalObject: 'this',
  },
  optimization: {
    moduleIds: 'named',
  },
  plugins: [
    new NpmDtsPlugin({
      entry: './src',
      output: './lib/component-library.d.ts',
    }),
  ],
}
