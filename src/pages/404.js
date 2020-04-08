import React from 'react'

// Layout Components
import Layout from '../components/layout/index'
import SEO from '../components/seo'

export default () => {
    return (
        <Layout>
        <SEO title="404: Not found" />
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </Layout>
    )
}