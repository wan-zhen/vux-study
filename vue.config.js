const vuxLoader = require("vux-loader");

module.exports = {
  baseUrl: './',
  // build: {
  //   assetsPublicPath: './'
  // },
  configureWebpack: config => {
    vuxLoader.merge(config, {
      plugins: [{
          name: "vux-ui"
        },
        {
          name: "less-theme",
          path: "src/style/theme.less"
        }
      ]
    });
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
};