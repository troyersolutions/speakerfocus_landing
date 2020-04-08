import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const { file } = useStaticQuery(graphql`
        query useMicImage {
            file(relativePath: { eq: "mic.png" }) {
                childImageSharp {
                    fluid(maxWidth: 40) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return file.childImageSharp.fluid
}