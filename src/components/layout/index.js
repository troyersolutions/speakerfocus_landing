import React from 'react'
import { ThemeProvider } from 'styled-components'

// Theme
import Theme from './theme'

// Styling
import Style from './style'

// Layout Components
import Header from '../header'
import Footer from '../footer'

export default ({
    children,
    header
}) => {
    return (
        <ThemeProvider theme={Theme}>
            <Style />
            {header && <Header/>}
            <main>{children}</main>
            <Footer/>
        </ThemeProvider>
    )
}