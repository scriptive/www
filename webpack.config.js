module.exports ={
  plugins: [
      // OccurrenceOrderPlugin is needed for webpack 1.x only
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      // Use NoErrorsPlugin for webpack 1.x
      new webpack.NoEmitOnErrorsPlugin()
  ]
};