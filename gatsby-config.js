module.exports = {
  // siteMetadata: {
  //   title: `Henderson Reporting`,
  //   siteUrl: `https://www.henderson-reporting.com`,
  //   description: "Henderson Reporting & Transcribing Inc. We uphold a guaranteed standard of accuracy, efficiency, and security.",
  //   image: '/favicon-32x32.png'
  // },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    // "gatsby-plugin-react-helmet", {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     "icon": "src/images/logos/new_logo.png",
    //     "name": "Penis"
    //   }
    // },
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