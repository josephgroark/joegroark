import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import logo from '../images/mikey.png';

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      I'm humbled you've taken the time to view my learning projects.
       I'm on a journey to describe the experience of working with modern tech and share my stories along the way.
    </p>
    <img src={logo} alt="Mikey" />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`