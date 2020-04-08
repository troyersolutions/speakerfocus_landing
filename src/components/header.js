import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

// Hooks
import { useFeaturedImage } from '../hooks/useFeaturedImage'

// Layout Components
import { Container } from '@material-ui/core'

export default ({
    title
}) => {
    return (
        <Header>
            <Container maxWidth="md">
                <Link to={`/`}>
                    <Img fixed={useFeaturedImage()}/>
                </Link>
            </Container>
        </Header>
    )
}

const Header = styled.header`
    display:flex;
    align-items:center;
    height:4rem;
    @media (min-width:992px) {
        height:6rem;
    }
`
const Img = styled(Image)`
`