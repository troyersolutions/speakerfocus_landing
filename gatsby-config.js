module.exports = {
  siteMetadata: {
    title: `Speaker Focus`,
    description: `Speaker Focus is the complete platform that’s built and priced to help speakers grow fast.`,
    author: `@gatsbyjs`,
    siteUrl: `https://speakerfocus.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/clients`,
        name: `clients`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.js": [
            'cache-control: public, max-age=31536000, immutable'
          ],
          "/*.css": [
            'cache-control: public, max-age=31536000, immutable'
          ],
          "/public/**/*.html": [
              'cache-control: public, max-age=0, must-revalidate'
          ],
          "/public/page-data/*": [
              'cache-control: public, max-age=0, must-revalidate'
          ],
          "/public/app-data.json": [
              'cache-control: public, max-age=0, must-revalidate'
          ],
          "/sw.js": [
            'cache-control: public, max-age=0, must-revalidate'
          ],
          "/*": [
            'X-Frame-Options: SAMEORIGIN' 
          ]
        }
      }
    },
    `gatsby-plugin-offline`,
  ],
}
