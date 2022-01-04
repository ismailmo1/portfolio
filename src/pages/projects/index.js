import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';

const ProjectsPage = ({ data }) => {

  data.allMdx.nodes.map((node) => {

    console.log(node)
  });
  return (
    <Layout pageTitle='My projects'>
      {data.allMdx.nodes.map((node) => {
        return (<article key={node.id} >
          <h2><Link to={`/projects/${node.slug}`}>{node.frontmatter.name}</Link></h2>
          <p>{node.frontmatter.description}</p>
        </article>)
      })}
    </Layout >
  )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___priority, order: ASC}) {
      nodes {
        frontmatter {
          name
          description
        }
        id
        slug       
        parent {
          ... on File {
            birthTime(formatString: "MMM D, YYYY")
          }
        }

      }
    }
  }
  
  `

export default ProjectsPage