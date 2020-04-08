import React from 'react'


// Componets
import Intro from './intro/index'
import Laptop from './laptop'
import About from './about'
import Customers from './customers'
import Featured from './featured'
import Cta from './cta'

export default () => {
    return (
        <>
        <Intro
            title={`Become a highly paid speaker with the world’s #1 speaker training platform`}
            description={`Speaker Focus is the complete platform that’s built and priced to help speakers grow fast.`}
            list={[
                `Book speaking engagements every month with predictability`,
                `Get paid higher speaking fees`,
                `Gain confidence and eliminate your fear of public speaking`
            ]}
        />
        <Laptop/>
        <About
            title={`We help speakers grow`}
            data={[
                {
                    title: `Book more speaking engagements`,
                    items: [
                        `Learn how to convert a total stranger into a paid gig`,
                        `Word-class 8-figure lead generation campaigns`,
                        `Attract hot, ready to buy customers to your speaking business in droves`
                    ]
                }, {
                    title: `Get paid higher speaking fees`,
                    items: [
                        `Learn the art and science of attracting high paying gigs`,
                        `Build a defensible personal brand`,
                        `Master high-ticket speaking sales strategies`
                    ]
                }, {
                    title: `Eliminate your fear of speaking`,
                    items: [
                        `Gain confidence speaking to thousands of people`,
                        `Master fundamental public speaking platform skills`,
                        `Step-by-step strategy for delivering a powerful presentation every time`
                    ]
                }
            ]}
        />
        <Customers
            title={`Speaker Focus customers have seen:`}
            data={[
                {
                    title: `10x`,
                    description: `Higher revenue`
                }, {
                    title: `5x`,
                    description: `More speaking gigs`
                }, {
                    title: `2x`,
                    description: `Increased audience evaluation`
                }, {
                    title: `8x`,
                    description: `More brand awareness`
                }
            ]}
        />
        <Featured
            title={`Featured customers`}
            description={`Explore the stories of the people who are traveling the world speaking and changing lives with Speaker Focus.`}
            data={[
                `zJ_b8NEj9wo`,
                `65KOGg-Cl0U`,
            ]}
        />
        <Cta
            title={`Get more speaking engagements with Speaker Focus`}
        />
        </>
    )
}