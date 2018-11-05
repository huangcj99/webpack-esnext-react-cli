let babelLoaderConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=babel'
      }
    ]
  }
}

module.exports = babelLoaderConfig