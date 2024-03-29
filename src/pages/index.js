import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Ankit Dubey, a fullstack developer living in beautiful Mumbai.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
