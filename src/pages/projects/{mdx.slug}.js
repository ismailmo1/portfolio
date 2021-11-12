import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import Layout from '../../components/layout';

const ProjectPost = ({ data }) => {
  // console.log(data)
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.name}>
      <p>Posted: {data.mdx.parent.birthTime}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        name
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
      body
      parent {
        ... on File {
          birthTime(formatString: "MMM D, YYYY")
        }
      }
      wordCount {
        words
      }
    }
  }
 `

export default ProjectPost