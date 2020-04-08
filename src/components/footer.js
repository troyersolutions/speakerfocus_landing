import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Layout Components
import { Container } from '@material-ui/core'

export default () => {
    const date = new Date().getFullYear()
    return (
        <Footer>
            <Contain maxWidth="md">
                <List>
                    <Item>
                        <Button to={`/privacy`}>{`Privacy Policy`}</Button>
                    </Item>
                    <Item>
                        <Button to={`/earnings`}>{`Earnings Disclaimer`}</Button>
                    </Item>
                    <Item>
                        <Button to={`/terms`}>{`Terms of Service`}</Button>
                    </Item>
                </List>
                <Copyright>{`${date} © SpeakerFocus.com - All rights reserved`}</Copyright>
            </Contain>
        </Footer>
    )
}

// Styled Components
const Contain = styled(Container)`
    padding-top:${props => props.theme.spacing(4)}px;
    padding-bottom:${props => props.theme.spacing(4)}px;
    display:grid;
    grid-template-columns:minmax(0,1fr);
    grid-row-gap:${props => props.theme.spacing(2)}px;
`
const Footer = styled.footer`
    text-align:center;
    @media (min-width:992px) {
        text-align:left;
    }
`
const List = styled.ul`
    display:flex;
    flex-wrap:wrap;
`
const Item = styled.li`
    margin-right:0;
    margin-bottom:0.5rem;
    width:100%;
    &:last-child {
        margin-right:0;
    }
    @media (min-width:992px) {
        margin-right:1rem;
        margin-bottom:0;
        width:auto;
    }
`
const Button = styled(Link)`
    color: inherit;
    text-decoration:none;
    &:hover {
        text-decoration:underline;
    }
`
const Copyright = styled.p`

`