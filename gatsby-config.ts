import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `personal-website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `pages`,
      // Path to the directory
      path: `${__dirname}/src/projectmd/`,
    },
  },
  'gatsby-transformer-remark',
],

}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/projectmd`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

export default config
