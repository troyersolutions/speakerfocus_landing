import React from 'react'
import styled from 'styled-components'
import { LazyIframe } from 'react-lazy-media'

// Layout Components
import { Container } from '@material-ui/core'

export default ({
    title,
    description,
    data
}) => {
    return (
        <section>
            <Contain maxWidth="md">
                <Header>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Header>
                <List>
                    {data.map((item, index) => (
                        <Item key={index}>
                            <LazyIframe
                                classes={[`iframe--responsive`]}
                                allow="autoplay" 
                                allowfullscreen="" 
                                frameborder="0" 
                                title=""
                                src={`https://www.youtube.com/embed/${item}?showinfo=0&amp;wmode=transparent&amp;rel=0&amp;autoplay=0&amp;mute=0&amp;controls=1`}
                            />
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
    display:grid;
    grid-template-columns:minmax(0,1fr);
    grid-row-gap:${props => props.theme.spacing(3)}px;
    @media (min-width:992px) {
        grid-row-gap:${props => props.theme.spacing(6)}px;
    }
`
const Header = styled.header`
    display:grid;
    grid-template-columns:minmax(0,1fr);
    grid-row-gap:${props => props.theme.spacing(2)}px;
`
const Title = styled.h2`
`
const Description = styled.p`
`
const List = styled.ul`
    display:grid;
    grid-template-columns:minmax(0,1fr);
    grid-row-gap:${props => props.theme.spacing(2)}px;
    @media (min-width:992px) {
        grid-template-columns:repeat(2,minmax(0,1fr));
        grid-column-gap:${props => props.theme.spacing(9)}px;
    }
`
const Item = styled.li`
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    .iframe--responsive {
        position: absolute;
        overflow: hidden;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
    }
`