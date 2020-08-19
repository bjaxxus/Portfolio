import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";


const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      mike: file(relativePath: { eq: "mikedorner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      davisco: file(relativePath: { eq: "davisco.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maemu: file(relativePath: { eq: "maemu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                    <Img fluid={data.davisco.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">Haraldur Björnsson</div>
                    <div className="main-image">
                    <Img fluid={data.maemu.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                    <Img fluid={data.mike.childImageSharp.fluid} />
                </div>
                </div>
                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
            </div>
            
        </div>
    )
}

export default Banner