import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'

// Utils
import useMicImage from '../../hooks/useMicImage'

// Layout Components
import { Container, Button } from '@material-ui/core'

export default () => {
    return (
        <section>
            <Contain maxWidth="md">
                <Image fluid={useMicImage()}/>
                <Title>{`Get more speaking engagements with Speaker Focus`}</Title>
                <Submit variant="contained" color="primary" size="large" onClick={() => scrollTo('#form')}>{`Start now`}</Submit>
            </Contain>
        </section>
    )
}

// Styled Components
const Contain = styled(Container)`
    padding-top:${props => props.theme.spacing(4)}px;
    padding-bottom:${props => props.theme.spacing(4)}px;
    position:relative;
    z-index:1;
    display:grid;
    grid-template-columns:minmax(0,1fr);
    grid-row-gap:${props => props.theme.spacing(4)}px;
    align-items:center;
    @media (min-width:992px) {
        grid-column-gap:${props => props.theme.spacing(4)}px;
        padding-top:${props => props.theme.spacing(12)}px;
        padding-bottom:${props => props.theme.spacing(12)}px;
    }
`
const Image = styled(Img)`
    width:40px;
    margin:0 auto;
`
const Title = styled.h2`
    text-align:center;
    margin:0 auto;
    max-width:560px;
`
const Submit = styled(Button)`
    font-weight:bold;
    font-size:1rem;
    margin:0 auto;
    width:100%;
    max-width:195px;
`