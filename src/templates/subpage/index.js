import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Parser from 'html-react-parser'

// Layout Components
import Layout from '../../components/layout/index'
import SEO from '../../components/seo'
import { Container } from '@material-ui/core'

export default ({
    data: {
        markdownRemark: {
            frontmatter: {
                title,
                description
            },
            html
        }
    }
}) => {
    return (
        <Layout header>
            <SEO title={title} description={description}/>
            <Contain maxWidth="md">
                {Parser(html)}
            </Contain>
        </Layout>
    )
}

// Styled Components
const Contain = styled(Container)`
    display:grid;
    grid-template-columns:minmax(0,1fr);
    grid-row-gap:1.5rem;
    padding-top:${props => props.theme.spacing(4)}px;
    padding-bottom:${props => props.theme.spacing(4)}px;
    @media (min-width:992px) {
        grid-row-gap:2rem;
        padding-top:${props => props.theme.spacing(8)}px;
        padding-bottom:${props => props.theme.spacing(8)}px;
    }
`

// Page Query
export const pageQuery = graphql`
    query privacyQuery($id: String!) {
        markdownRemark(id: {eq: $id}) {
            frontmatter {
                title
                description
            }
            html
        }
    }
`