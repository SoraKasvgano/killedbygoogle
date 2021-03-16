module.exports = {
    env: {
        mode: process.env.NODE_ENV,
    },
	  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
};