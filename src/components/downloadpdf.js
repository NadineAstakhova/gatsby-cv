import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Download = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "CV_Nadiia_Astakhova.pdf"}) {
        publicURL
        name
      }
    }
  `)
    const link = "/gatsby-cv" + data.file.publicURL;
    return <a className="btn btn-primary btn-xl" href={link} target="_blank">Download My CV</a>
}

export default Download
