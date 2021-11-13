import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Checkout some of the cool projects i've built!</p>
      <StaticImage objectFit="cover" objectPosition="absolute" src="../images/homepage-bg.jpg" />
    </Layout>
  )
}

export default IndexPage