import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Home/HeroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroSection />
    <p className="text-sadi-blue-600 text-center text-2xl font-bold">
      Welcome to your new Gatsby site.
    </p>
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
