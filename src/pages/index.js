import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import logo from "../images/mikeyLogo.png"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <img
          css={css`
            float: right;
            width: 100;
            padding: 25px 25px 50px 25px;;
          `}
          src={logo}
          alt="Mikey"
        />
        <h1
          css={css`
            position: relative;
          `}
        >
          Fiction and fact from Mikeys almanack
        </h1>

        <h4
          css={css`
            display: inline-block;
          `}
        >
          {data.allMarkdownRemark.totalCount} Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
