const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './index.js', // Entry point that includes all modules
  output: {
    filename: 'threewp.bundle.min.js', // Single output file
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'ThreeWP',
      type: 'umd', // Universal Module Definition, accessible globally
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         format: {
  //           comments: false
  //         },
  //       },
  //       extractComments: false,
  //     }),
  //   ],
  // },
  mode: 'production',
  
};
