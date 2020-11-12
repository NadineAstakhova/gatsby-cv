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
    return <a className="btn btn-primary btn-xl" href={data.file.publicURL} target="_blank">Download My CV</a>
}

export default Download
