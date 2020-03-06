const path = require("path");
const { NormalModuleReplacementPlugin} = require('webpack');

module.exports = {
  webpack: {
    plugins: [
      new NormalModuleReplacementPlugin(
        /.*\/generated\/iconSvgPaths.*/,
        path.resolve(__dirname, "src/blueprint/iconSvgPaths.js"),
      )
    ]
  },
  plugins: [
  ]
};