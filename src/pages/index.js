/* eslint-disable react/no-array-index-key */
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../global"
import { theme } from "../theme"

const IndexPage = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <SEO title="Home" />
        <h1>Hi people!</h1>
        <div>STUFF</div>
        <div> MORE STUFF</div>
        <Link to="/page-2/">Go to page 2</Link>
      </>
    </ThemeProvider>
  </Layout>
)

export default IndexPage
