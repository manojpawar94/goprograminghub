const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = {
  images: {
    loader: "akamai",
    path: "/",
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};