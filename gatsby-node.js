const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
      query Articles {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/works/'+ node.frontmatter.slug,
            component: path.resolve('./src/pages/templates/project-details.js'),
            context: { slug: node.frontmatter.slug } 
        })
    })
}