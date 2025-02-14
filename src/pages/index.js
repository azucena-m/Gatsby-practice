import * as React from "react"
import Layout from "./components/Layout"
import * as styles from "./styles/home.module.css"
import {  graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({data}) {


  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & Web Developer based in the United states.</p>
          <Link className={styles.btn} to='/projects'>My Portfolio</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt='banner'/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
    }
  }
}
`