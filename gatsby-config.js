module.exports = {
  siteMetadata: {
    title: "Ismail Mohammed",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`
      }
    },
    "gatsby-plugin-mdx"
  ]
};