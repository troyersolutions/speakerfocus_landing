import React from 'react'
import { green } from '@material-ui/core/colors'
import styled from 'styled-components'

// Layout Components
import { Container } from '@material-ui/core'

// Components
import CheckIcon from '@material-ui/icons/Check'

export default ({
    title,
    data
}) => {
    return (
        <section>
            <Contain maxWidth="md">
                <Title>{title}</Title>
                <Row>
                    {data.map(({
                        title,
                        items
                    }, index) => (
                        <Column key={index}>
                            <Subtitle>{title}</Subtitle>
                            <List>
                                {items.map((item, index) => (
                                    <Item key={index + 10}>
                                        <Icon/>
                                        {item}
                                    </Item>
                                ))}
                            </List>
                        </Column>
                    ))}
                </Row>
            </Contain>
        </section>
    )
}

// Styled Components
const Contain = styled(Container)`
    padding-top:${props => props.theme.spacing(4)}px;
    padding-bottom:${props => props.theme.spacing(4)}px;
    display:grid;
    grid-row-gap:${props => props.theme.spacing(4)}px;
    grid-template-columns:minmax(0,1fr);
    align-items:center;
    @media (min-width:992px) {
        grid-column-gap:${props => props.theme.spacing(4)}px;
    }
`
const Title = styled.h2`
`
const Subtitle = styled.h3`
    font-size:1.125rem;
    font-weight:bold;
`
const Row = styled.ul`
    display:grid;
    grid-column-gap:${props => props.theme.spacing(6)}px;
    grid-row-gap:${props => props.theme.spacing(6)}px;
    grid-template-columns:minmax(0,1fr);
    align-items:start;
    @media (min-width:992px) {
        grid-template-columns:repeat(2, minmax(0,1fr));
    }
`
const Column = styled.li`
    display:grid;
    grid-template-columns:minmax(0,1fr);
    grid-row-gap:${props => props.theme.spacing(3)}px;
    padding-top:${props => props.theme.spacing(2)}px;
    border-top:2px solid #3f51b5;
`
const List = styled.ul`
    display:grid;
    list-style:none;
    grid-template-columns:minmax(0,1fr);
    grid-row-gap:${props => props.theme.spacing(2)}px;
`
const Item = styled.li`
    display:grid;
    grid-template-columns:minmax(0, 2rem) minmax(0, 1fr);
    grid-column-gap:${props => props.theme.spacing(2)}px;
    align-items: start;
    line-height: 1.5rem;
`
const Icon = styled(CheckIcon)`
    fill:${green[900]};
    background-color:${green[100]};
    border-radius:50%;
    height: 1.5rem;
    width: 1.5rem;
    padding: 0.25rem;
`