module.exports = async ({ graphql, actions }) => {
    const query = await graphql(`
        allMarkdownremark(
            filter: {fileAbsolutePath: {regex: "/(type1)/.*\\.md$/"}}
        ) {
            edges {
                node {
                    id
                    fields: {
                        slug
                    }
                }
            }
        }
    `)
}