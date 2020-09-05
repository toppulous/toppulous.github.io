const { addBabelPlugin, override } = require("customize-cra");

module.exports = override(
  addBabelPlugin(["@babel/plugin-proposal-decorators", { legacy: true }]),
  addBabelPlugin(["@babel/plugin-proposal-class-properties", { loose: true }]),
  addBabelPlugin([
    "@babel/plugin-transform-runtime",
    {
      helpers: true,
      regenerator: true,
    },
  ])
);
