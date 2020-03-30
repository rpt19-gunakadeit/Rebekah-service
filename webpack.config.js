const path = require('path');

module.exports = {
  entry: {
    reviews: './client/components/reviews.jsx',
    shippingReturns: './client/components/shippingReturns.jsx'
  },
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/dist')
  }
}