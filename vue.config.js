module.exports = {
  configureWebpack: config => {
    if (sails.config.environment === 'development') {
      /* HMR */
      config.entry = {
        app: ['./src/main.js', 'webpack-hot-middleware/client?reload=true&noInfo=true']
      }
    } else {
      /* config for production mode */
    }
  }
}
