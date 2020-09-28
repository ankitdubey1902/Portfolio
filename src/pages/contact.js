import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

const contactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="mailto:ankitdubey1902@gmail.com">ankitdubey1902@gmail.com</a>{" "}
        on Gmail.
      </p>
    </Layout>
  )
}
export default contactPage
