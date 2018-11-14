/*eslint no-undef: "error"*/
/*eslint-env node*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './src/img/[hash].[ext]'
            }
          }
        ]
        // [
        //   { loader: 'url-loader?name=/img/[name].[ext]' },
        //   { loader: 'image-webpack-loader' }
        // ]
        // [
        //   'file-loader',
        //   {
        //     loader: 'image-webpack-loader',
        //     options: {
        //       bypassOnDebug: true, // webpack@1.x
        //       disable: true // webpack@2.x and newer
        //     }
        //   }
        // ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
