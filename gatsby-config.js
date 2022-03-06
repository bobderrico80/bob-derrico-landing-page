module.exports = {
  siteMetadata: {
    title: `Bob D'Errico - Software Engineer`,
    siteUrl: `https://www.bobderrico.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
  ],
};
