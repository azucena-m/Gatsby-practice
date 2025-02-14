import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/projects.module.css'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage} from "gatsby-plugin-image"


export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
      <h3>Projects and Websites I've Created</h3>
      <div className={styles.projects}>
        {projects.map(project => (
          <Link to={"/works/" + project.frontmatter.slug} key={project.id}>
            <div>
              <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </div>
      <p>Like what you see? Email me at { contact } for a quote!</p>
    </div>
    </Layout>
  )
}

//export page query 
export const query = graphql`
 query ProjectPage {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        slug
        stack
        thumb {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        title
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`
