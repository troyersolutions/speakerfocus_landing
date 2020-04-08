const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const query = await graphql(`
        query subpageQuery {
            pages: allMarkdownRemark {
                nodes {
                    id
                    fields {
                        slug
                    }
                }
            }
        }
    `)

    query.data.pages.nodes.forEach(({
        id,
        fields: {
            slug
        }
    }) => {
        createPage({
            path: slug,
            component: path.resolve(`src/templates/subpage/index.js`),
            context: {
                id
            }
        })
    })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
  }