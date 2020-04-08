import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMeta = () => {
    const { site } = useStaticQuery(graphql`
        query useSiteMetaQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return site.siteMetadata
}