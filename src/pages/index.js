import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section  bg-dark" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">About me</h2>
                <hr className="divider my-4"/>
                <p className="text-white-50 mb-4">I am Nadiia. I </p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"
                   onClick={Scroller.handleAnchorScroll}>Get Started!</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="experience">
          <div className="container">
            <h2 className="text-center mt-0">MY EXPERIENCE</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-8 col-md-6 text-left">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Rockitworks</h3>
                  <p className="text-muted mb-0">Software Programmer</p>
                  <p className="text-muted mb-0">Working with internal systems of the company. Working with clients of the firm that include development firms. Participation in different client projects: sites and CMS of online-offline shops, mobile operators etc. My role is a backend developer with the use of: PHP 5.5 - 7.2, Laravel 5.6, Symfony 3.3 - 4.0, Zend Framework 2, MySQL. In some projects, like a full-stack with frontend-end technologies: JavaScript(ECMAScript 6), jQuery, HTML, CSS, Bootstrap. I took part in the integration of online stores with payment systems, migration of projects from old versions of Symfony to new ones, integration of Push notifications (Firebase) with the API of the application, optimization of database queries, integration with payment systems (PayU, eCard) etc.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-right">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Jan 2018 - Present</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-6 text-left">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Donetsk National University</h3>
                  <p className="text-muted mb-0">IT staff at the Computer Technology Department</p>
                  <p className="text-muted mb-0">Heads of dean's office interested in my web-system. So, they offered me to finalize it. My responsibilities are all development cycles: architecture, design, code, testing. Used PHP 5, PHPUnit, Yii2, JavaScript, JQuery, Pjax, CSS3, HTML5, Bootstrap3, MySQL
                    and GIT.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-right">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Jul 2017 - Dec 2017</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white" id="education">
          <div className="container text-center">
            <h2 className="mb-4">MY EDUCATION</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-8 col-md-6 text-left">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Donetsk National University</h3>
                  <p className="text-muted mb-0">Master's degree (with honours) in Computer Science, Intelligent Information Technology</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-right">
                <div className="mt-5">
                  <h3 className="h4 mb-2">2017-2018</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-6 text-left">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Donetsk National University</h3>
                  <p className="text-muted mb-0">Bachelor's degree in Compute Science (with honours)</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-right">
                <div className="mt-5">
                  <h3 className="h4 mb-2">2013-2017</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="technologies">
          <div className="container">
            <h2 className="text-center mt-0">MY TECH STACK</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-php text-primary mb-4"></i>
                  <p className="text-muted mb-0">Yii2, Zend 2</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-laravel text-primary mb-4"></i>
                  <p className="text-muted mb-0">Laravel v. 5.4 - 5.8</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-symfony text-primary mb-4"></i>
                  <p className="text-muted mb-0">Symfony v. 3.0 - 4.1</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fa fa-4x fa-database text-primary mb-4"></i>
                  <p className="text-muted mb-0">MySQL</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-aws text-primary mb-4"></i>
                  <p className="text-muted mb-0">For management files in big projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-js text-primary mb-4"></i>
                  <p className="text-muted mb-0">jQuery</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-html5 text-primary mb-4"></i>
                  <p className="text-muted mb-0">HTML5, CSS3, Bootstrap</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-java text-primary mb-4"></i>
                  <p className="text-muted mb-0">Some experience in CORE JAVA, JAVA SE, ANDROID SDK</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white" id="other">
          <div className="container text-center">
            <h2 className="mb-4">SPECIAL SKILLS</h2>
            <hr className="divider my-4"/>
            <p className="text-muted mb-0">Language skills:</p>
            <hr className="divider my-4"/>

            <div className="row lang-row">
            <div className="col-lg-2 col-md-6 text-center lang-col">
              <div className="mt-6">
                <h3 className="h4 mb-2">Russian</h3>
                <p className="text-muted mb-0">Native</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 text-center lang-col">
              <div className="mt-6">
                <h3 className="h4 mb-2">Ukrainian</h3>
                <p className="text-muted mb-0">Native</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 text-center lang-col">
              <div className="mt-6">
                <h3 className="h4 mb-2">English</h3>
                <p className="text-muted mb-0">B1</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 text-center lang-col">
              <div className="mt-6">
                <h3 className="h4 mb-2">Polish</h3>
                <p className="text-muted mb-0">B1</p>
              </div>
            </div>
              <div className="col-lg-2 col-md-6 text-center lang-col">
                <div className="mt-6">
                  <h3 className="h4 mb-2">French</h3>
                  <p className="text-muted mb-0">A2</p>
                </div>
              </div>
            </div>

            <hr className="divider my-4"/>
            <p className="text-muted mb-0">Something</p>
            <hr className="divider my-4"/>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">CONTACT ME</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Ready to start your next project with me? Send me an
                  email
                  and I will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:nadine.astakhova@gmail.com">nadine.astakhova@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
