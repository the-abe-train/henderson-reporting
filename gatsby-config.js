module.exports = {
  siteMetadata: {
    title: `Henderson Reporting`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/logos/new_logo.png",
        "title": "Henderson Reporting"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `merriweather`,
          `fira sans\:300,400,400i,700`,
          `courier prime`
        ],
        display: 'swap'
      }
    }
  ]
};