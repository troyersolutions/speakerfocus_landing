import { useStaticQuery, graphql } from 'gatsby'

export const useFeaturedImage = () => {
    const { file } = useStaticQuery(graphql`
        query useFeaturedImageQuery {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 196) {
                      ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return file.childImageSharp.fixed
}