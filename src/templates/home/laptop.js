import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

// Hooks
import useLaptopImage from '../../hooks/useLaptopImage'

// Layout Components
import { Container } from '@material-ui/core'

export default () => {
    return (
        <section>
            <Contain>
                <Image fluid={useLaptopImage()}/>
            </Contain>
        </section>
    )
}

// Styled Components
const Contain = styled(Container)`
    padding-top:${props => props.theme.spacing(4)}px;
    padding-bottom:${props => props.theme.spacing(4)}px;
    @media (min-width:992px) {

    }
`
const Image = styled(Img)`
    max-width: 350px;
    margin:0 auto;
`