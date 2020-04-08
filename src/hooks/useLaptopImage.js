import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const { file } = useStaticQuery(graphql`
        query useLaptopImage {
            file(relativePath: { eq: "laptop-trans.png" }) {
                childImageSharp {
                    fluid(maxWidth: 350) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return file.childImageSharp.fluid
}