// const Config = require('webpack-chain');
// const config = new Config();
const path = require('path')
const babelOption = require('./babel.conf')

// config.entryPoints.clear()

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: [{
          loader: 'babel-loader',
          options: babelOption
        }
         
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}

// console.log('cotext', path.resolve(__dirname, '../../', 'entry/'))
// config
//   .context()
//   .mode('development')
//   .module
//   .rule('compile')
//     .test()
//     .use('babel')
//       .loader('babel-loader')
//       .options(babelOption);

// module.exports = config