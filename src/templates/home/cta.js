import React from 'react'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

// Layout Components
import { Container, Button } from '@material-ui/core'

export default () => {
    return (
        <section>
            <Contain maxWidth="md">
                <Logo xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 166 212">
                    <path d="M126.076 0c21.761 0 39.395 17.616 39.395 39.344s-17.634 39.342-39.395 39.342c-21.753 0-39.392-17.614-39.392-39.342C86.684 17.616 104.323 0 126.076 0z" fill="#000"/><path d="M40.821 148.19c3.286 0 6.202-1.48 8.203-3.774l66.308-60.98c-13.16-3.189-24.087-12.109-29.974-23.958L32.974 129.12c-1.93 2.692-3.075 5.04-3.075 8.158 0 6.023 4.896 10.913 10.922 10.913z" fill="#000"/><path d="M8.95 206.805c22.035 16.91 55.909-15.121 57.174-16.343.225-.196 13.925-12.242 28.297-17.057 8.91-2.984 18.077-3.19 24.451 3.931 3.478 3.871 14.727-1.63 8.991-8.032-7.342-8.202-21.224-15.527-45.574-3.852-13.33 6.38-23.756 15.636-24.353 16.167-7.163 6.847-30.194 24.411-41.645 15.628-2.493-1.912-3.774-4.225-4.043-7.276-.902-10.535 10.25-25.703 15.797-32.05l12.356-4.303s-2.474-.276-8.3-5.491c-5.448-4.89-6.894-10.176-6.894-10.176l-5.56 11.283c-3.96 4.409-20.879 24.373-19.407 41.751.54 6.396 3.55 11.869 8.71 15.82z" fill="#000"/>
                </Logo>
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
const Logo = styled.svg`
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