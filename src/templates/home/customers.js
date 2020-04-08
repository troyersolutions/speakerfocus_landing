import React from 'react'
import styled from 'styled-components'

// Layout Components
import { Container } from '@material-ui/core'

export default ({
    title,
    data
}) => {
    return (
        <section>
            <Contain maxWidth="md">
                <Title>{title}</Title>
                <List>
                    {data.map(({
                        title,
                        description
                    }, index) => (
                        <Item key={index}>
                            <Subtitle>{title}</Subtitle>
                            <Description>{description}</Description>
                        </Item>
                    ))}
                </List>
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
        padding-top:${props => props.theme.spacing(8)}px;
        padding-bottom:${props => props.theme.spacing(8)}px;
    }
`
const Title = styled.h2`
`
const Subtitle = styled.h3`
    font-size:2.75rem;
    font-weight:bold;
`
const Description = styled.p`
    font-size:1rem;
`
const List = styled.ul`
    display:grid;
    grid-template-columns:minmax(0,1fr);
    grid-row-gap:${props => props.theme.spacing(4)}px;
    @media (min-width:992px) {
        grid-template-columns:repeat(4,minmax(0,1fr));
        grid-row-gap:0;
    }
`
const Item = styled.li`
    display:grid;
    grid-template-columns:minmax(0,1fr);
    align-items:center;
    align-content:center;
    text-align:center;
    height:165px;
    width:228px;
    margin:0 auto;
    &:nth-child(1) {
        background-color:rgb(0,57,203);
        color:#fff;
    }
    &:nth-child(2) {
        background-color:rgb(41,98,255);
        color:#fff;
    }
    &:nth-child(3) {
        background-color:rgb(199,199,199);
    }
    &:nth-child(4) {
        background-color:rgb(250,250,250);
    }
`