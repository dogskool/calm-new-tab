module.exports = {
  entry: {
    'bundle': ['babel-polyfill', './src/main.js'],
  },
  output: {
    filename: 'build/[name].js'
  },
	module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
