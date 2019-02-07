module.exports = {
  siteMetadata: {
    name: `Rahat Chowdhury`,
    title: `My Journey`,
    date: `2019`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
