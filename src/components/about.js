import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";


const About = () => {
    const data = useStaticQuery(graphql`
    query {
      mikemeyers: file(relativePath: { eq: "mikemeyers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      morningbrew: file(relativePath: { eq: "morningbrew.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     
      
    }
  `)
    return (
        <div className="about">
            <div className="container">
                <div className="inner-about">
                    <div className="content">
                        <h3>The about me part</h3>
                        <p>25 years old, currently finishing up my B.Sc in Computer Science, already 
                          graduated with B.Sc in Mechatronical Engineering from Reykjavík University. Former football player for KV & KR.
                          Participated in the Startup Supernova accelerator program, Co-founder of Vidcove/Vitco a Reverse Image Search platform.
                          Generally a technically inclined individual that likes to dabble in trying out new things.
                        </p>
                        <div className="btn-row">
                            <Link to="/projects">View Projects</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                            <Img fluid={data.mikemeyers.childImageSharp.fluid}/>
                        </div>
                        <div className="bottom-left">
                            <Img fluid={data.morningbrew.childImageSharp.fluid}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
            
        </div>
    )
}

export default About