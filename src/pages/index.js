import React from 'react'

// Layout Components
import Layout from '../components/layout/index'
import SEO from '../components/seo'

// Components
import Content from '../templates/home/index'

export default () => {
    return (
        <Layout>
            <SEO/>
            <Content/>
        </Layout>
    )
}