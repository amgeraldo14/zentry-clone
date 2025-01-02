const postcss = require("postcss");
const postcssJs = require("postcss-js");
const { readFileSync } = require("fs");

require.extensions[".css"] = function (module, filename) {
  module.exports = ({ addBase, addComponents, addUtilities }) => {
    const css = readFileSync(filename, "utf8");
    const root = postcss.parse(css);
    const jss = postcssJs.objectify(root);

    if ("@layer base" in jss) {
      addBase(jss["@layer base"]);
    }
    if ("@layer components" in jss) {
      addComponents(jss["@layer components"]);
    }
    if ("@layer utilities" in jss) {
      addUtilities(jss["@layer utilities"]);
    }
  };
};
