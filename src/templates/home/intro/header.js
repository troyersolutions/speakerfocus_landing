import React from 'react'
import styled from 'styled-components'
import { green } from '@material-ui/core/colors'
import Image from 'gatsby-image'

// Hooks
import { useFeaturedImage } from '../../../hooks/useFeaturedImage'

// Components
import CheckIcon from '@material-ui/icons/Check'

export default ({
    title,
    description,
    list
}) => {
    return (
        <>
            <Logo fixed={useFeaturedImage()}/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <List>
                {list.map((item, index) => (
                    <ListItem key={index}>
                        <Icon/>
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    )
}

// Styled Components
const Logo = styled(Image)`
    grid-row: 1;
    grid-column:1/2;
    @media (min-width:992px) {
        grid-column: 1/2;
    }
`
const Title = styled.h1`
    font-size:1.5rem;
    font-weight:bold;
    line-height:1.1;
    grid-row: 2;
    @media (min-width:992px) {
        grid-column: 1/2;
        font-size:2rem;
    }
`
const Description = styled.p`
    font-size:1.25rem;
    grid-row:4;
    @media (min-width:992px) {
        grid-row:3;
        grid-column:1/2;
    }
`
const List = styled.ul`
    display:grid;
    list-style:none;
    grid-row-gap:${props => props.theme.spacing(2)}px;
    grid-row:5;
    @media (min-width:992px) {
        grid-column:1/2;
        grid-row:4;
    }
`
const ListItem = styled.li`
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