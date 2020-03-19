const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: [
          '/node_modules'
        ],
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        },
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist')
  }
}