import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p className="text-sadi-blue-600 text-center text-2xl font-bold">
      Welcome to your new Gatsby site.
    </p>
    <p>Now go build something great.</p>
    <div
      style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
      className="mx-auto"
    >
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div>
  </Layout>
)

export default IndexPage
