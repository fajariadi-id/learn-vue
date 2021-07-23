module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://db-task-tracker.herokuapp.com',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
};
