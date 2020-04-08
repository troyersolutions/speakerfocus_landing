import React from 'react'
import styled from 'styled-components'

// Layout Components
import { Container } from '@material-ui/core'

// Components
import Header from './header'
import Form from './form'

export default ({
    title,
    description,
    list
}) => {
    return (
        <Section>
            <Contain maxWidth="md">
                <Header
                    title={title}
                    description={description}
                    list={list}
                />
                <Form/>
            </Contain>
        </Section>
    )
}


// Styled Components
const Section = styled.section`
    position:relative;
    overflow:hidden;
`
const Contain = styled(Container)`
    padding-top:${props => props.theme.spacing(4)}px;
    padding-bottom:${props => props.theme.spacing(4)}px;
    position:relative;
    z-index:1;
    display:grid;
    grid-row-gap:${props => props.theme.spacing(4)}px;
    align-items:center;
    @media (min-width:992px) {
        grid-column-gap:${props => props.theme.spacing(4)}px;
    }
`