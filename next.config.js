const withMdx = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMdx({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});
